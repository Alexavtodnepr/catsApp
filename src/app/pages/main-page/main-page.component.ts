import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { frameworksMockData } from 'src/app/mockData/mockData';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { EmailService } from 'src/app/services/email.service';
import { bufferCount, filter, Subscription, debounceTime } from 'rxjs';
import { IHobby } from 'src/app/models/hobby';
import { IForm } from 'src/app/models/form';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe],
})
export class MainPageComponent implements OnInit, OnDestroy {
  @ViewChild(MatTable) table!: MatTable<any>;

  showTask: boolean = false;
  selectData = frameworksMockData;
  selectDataKeys = Object.keys(this.selectData);
  versionArray!: string[];
  formattedDate!: string;
  startDate = new Date(1990, 0, 1);
  hobbyArray: IHobby[] = [];
  dataSource!: MatTableDataSource<any>;
  hobbyName!: FormControl;
  hobbyDuration!: FormControl;
  form!: FormGroup;
  formPendingState?: Subscription;
  valueFormChanges?: Subscription;
  constructor(
    private emailValidService: EmailService,
    private cd: ChangeDetectorRef,
    private datePipe: DatePipe,
  ) {
    this.dataSource = new MatTableDataSource(this.hobbyArray);
  }
  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      framework: new FormControl('', Validators.required),
      frameworkVersion: new FormControl(
        { value: this.versionArray, disabled: true },
        Validators.required,
      ),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        asyncValidators: this.emailValidService.uniqueEmailValidator(),
        updateOn: 'blur',
      }),
      hobby: new FormControl([]),
    });
    this.formPendingState = this.form.statusChanges
      .pipe(
        bufferCount(2, 1),
        filter(([prevState]) => prevState === 'PENDING'),
      )
      .subscribe(() => this.cd.markForCheck());
    this.valueFormChanges = this.form
      .get('dateOfBirth')
      ?.valueChanges.pipe(debounceTime(300))
      .subscribe((value: Date) => {
        this.formattedDate = this.formatDate(value);
      });
    this.hobbyName = new FormControl('', Validators.required);
    this.hobbyDuration = new FormControl('', Validators.required);
  }

  public OnSubmit() {
    const formData: IForm = {
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      dateOfBirth: this.formattedDate,
      framework: this.form.get('framework')?.value,
      frameworkVersion: this.form.get('frameworkVersion')?.value,
      email: this.form.get('email')?.value,
      hobby: this.form.get('hobby')?.value,
    };
    console.log(formData);
    alert(JSON.stringify(formData));
  }

  public frameworkSelected(event: MatSelectChange) {
    this.versionArray = this.selectData[event.value];
    this.form.get('frameworkVersion')?.enable();
    this.form.get('frameworkVersion')?.setValue('');
  }

  public addHobby() {
    const newHobby: IHobby = {
      name: this.hobbyName.value,
      duration: this.hobbyDuration.value,
    };
    this.hobbyArray.push(newHobby!);
    this.dataSource.data = this.hobbyArray;
    if (this.table) this.table.renderRows();
    this.form.get('hobby')?.setValue(this.hobbyArray);
    this.hobbyName.reset();
    this.hobbyDuration.reset();
  }

  public removeHobby(i: number) {
    this.hobbyArray = this.hobbyArray.filter((item, index) => index !== i);
    this.dataSource.data = this.hobbyArray;
    if (this.table) this.table.renderRows();
    this.form.get('hobby')?.setValue(this.hobbyArray);
  }
  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'dd-MM-yyyy') || '';
  }
  public ngOnDestroy() {
    this.formPendingState!.unsubscribe();
    this.valueFormChanges!.unsubscribe();
  }
}

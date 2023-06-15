import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { frameworksMockData } from 'src/app/mockData/mockData';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;

  showTask: boolean = false;
  selectData = frameworksMockData;
  selectDataKeys = Object.keys(this.selectData);
  versionArray!: string[];
  hobbyArray: any[] = [];
  dataSource!: MatTableDataSource<any>;
  hobbyName!: FormControl;
  hobbyDuration!: FormControl;
  form!: FormGroup;
  constructor(private emailValidService: EmailService) {
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
    this.hobbyName = new FormControl('', Validators.required);
    this.hobbyDuration = new FormControl('', Validators.required);
  }

  public OnSubmit() {
    console.log(this.form.value);
  }

  public frameworkSelected(event: MatSelectChange) {
    this.versionArray = this.selectData[event.value];
    this.form.get('frameworkVersion')?.enable();
    this.form.get('frameworkVersion')?.setValue('');
  }

  public addHobby() {
    const newHobby = {
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

  public checkEmail(event: Event) {
    // console.log(this.form.get('email')?.hasError('emailExistsValidator'));
    // console.log(event);
  }
}

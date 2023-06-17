import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { CatsApiService } from 'src/app/services/cats-api.service';
import { FormControl, Validators } from '@angular/forms';
import { IBreed } from 'src/app/models/breed';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  breeds!: IBreed[];
  breedsControl!: FormControl;
  limitControl!: FormControl;
  constructor(
    private catsServ: CatsApiService,
    private cd: ChangeDetectorRef,
  ) {}

  public ngOnInit() {
    this.breedsControl = new FormControl('');
    this.limitControl = new FormControl(10, Validators.max(100));
    this.changeSearch(+this.limitControl.value, this.breedsControl.value);
    this.catsServ.getAllBreeds().subscribe((el: IBreed[]) => {
      this.breeds = el;
      this.cd.markForCheck();
    });
    this.breedsControl.valueChanges.subscribe((selectedValue: string) => {
      this.changeSearch(+this.limitControl.value, selectedValue);
      this.cd.markForCheck();
    });
    this.limitControl.valueChanges.subscribe((value: string) => {
      this.cd.markForCheck();
      if (this.limitControl.valid) {
        this.changeSearch(+value, this.breedsControl.value);
      }
    });
  }

  changeSearch(limit: number, selectedValue: string) {
    if (selectedValue === '') {
      this.catsServ.getPictures(limit).subscribe();
    } else {
      this.catsServ.getByBreed(limit, selectedValue).subscribe();
    }
  }

  public resetAllParams() {
    this.breedsControl.setValue('');
    this.limitControl.setValue(10);
  }
}

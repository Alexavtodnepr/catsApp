import { Component, OnInit } from '@angular/core';
import { takeUntil, filter, bufferTime, Subject, interval } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { frameworksMockData } from 'src/app/mockData/mockData';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  showTask: boolean = false;
  emailFormControl!: FormControl;
  date!: FormControl;
  selectData = frameworksMockData;
  selectDataKeys = Object.keys(this.selectData);
  ngOnInit() {
    this.date = new FormControl();
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }
}

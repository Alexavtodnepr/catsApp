import { Component, OnInit } from '@angular/core';
import { takeUntil, filter, bufferTime, Subject, interval } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  timer$ = interval(1000);
  stopTimer$ = new Subject<void>();
  doubleClick$ = new Subject<void>();
  timerRunning = false;
  timerStarted = false;
  time = 0;
  displayTime = '00:00:00';
  emailFormControl!: FormControl;
  date!: FormControl;
  selectData = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3'],
  };
  selectDataKeys = Object.keys(this.selectData);
  ngOnInit() {
    this.date = new FormControl();
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    if (this.timerStarted) {
      this.startTimer();
    }

    this.doubleClick$
      .pipe(
        bufferTime(300),
        filter(clicks => clicks.length > 1),
        takeUntil(this.stopTimer$),
      )
      .subscribe(() => {
        this.stopTimer();
      });
  }

  startStopTimer() {
    if (this.timerRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    this.timerStarted = true;
    this.timerRunning = true;
    this.stopTimer$.next();

    this.timer$.pipe(takeUntil(this.stopTimer$)).subscribe(() => {
      this.time++;
      this.displayTime = this.formatTime(this.time);
    });
  }

  stopTimer() {
    this.timerRunning = false;
    this.stopTimer$.next();
  }

  waitTimer() {
    this.doubleClick$.next();
  }

  resetTimer() {
    this.time = 0;
    this.displayTime = '00:00:00';
    this.timerStarted = false;
  }

  formatTime(time: number): string {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
}

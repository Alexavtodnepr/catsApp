import { Component, OnInit } from '@angular/core';
import { bufferTime, filter, takeUntil, interval, Subject } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  timer$ = interval(1000);
  stopTimer$ = new Subject<void>();
  doubleClick$ = new Subject<void>();
  timerRunning = false;
  timerStarted = false;
  time = 0;
  displayTime = '00:00:00';

  ngOnInit() {
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

import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
import { takeUntil, interval, Subject } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit {
  private clickTimeout: any;
  timer$ = interval(1000);
  stopTimer$ = new Subject<void>();
  timerRunning = false;
  timerStarted = false;
  time = 0;
  displayTime = '00:00:00';
  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit() {
    if (this.timerStarted) {
      this.startTimer();
    }
  }

  startStopTimer() {
    if (this.timerRunning) {
      this.stopTimer();
      this.resetTimer();
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
      this.cd.markForCheck();
      this.displayTime = this.formatTime(this.time);
    });
  }

  stopTimer() {
    this.timerRunning = false;
    this.stopTimer$.next();
  }

  waitTimer() {
    this.stopTimer();
  }

  oneClick() {
    if (this.clickTimeout) {
      clearTimeout(this.clickTimeout);
      this.clickTimeout = null;
      this.waitTimer();
    } else {
      this.clickTimeout = setTimeout(() => {
        clearTimeout(this.clickTimeout);
        this.clickTimeout = null;
      }, 300);
    }
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

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgCardComponent {
  showInfoFlag: boolean = false;
  @Input() img: any;
}

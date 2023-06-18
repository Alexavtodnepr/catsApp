import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from 'src/app/components/img-card/image-dialog/image-dialog.component';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgCardComponent {
  showInfoFlag: boolean = false;
  @Input() img: any;
  constructor(public dialog: MatDialog) {}
  public openDialog() {
    this.dialog.open(ImageDialogComponent, { data: this.img.url });
  }
}

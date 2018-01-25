import { Component } from '@angular/core';
import {types, tweens, hitAreas} from 'ngvas';
import Line = types.Line;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private r = -100;
  private i     = 0;
  private _size = [ 20, 80, 20, 80 ];
  // private _xy   = [ [0, 0], [0, 0], [0, 0], [0, 0] ];
  private _fill = [ 0x7fc7ff, 0x87cefa, 0x00ffff, 0x00ffff ];
  // public size: any   = [this._size[0], this._size[0]];
  private circleRotation: any = 270;
  private rectRotation: any = 0;
  public xy: any     = [ 250 - Math.abs(this.r), 250 ];
  // public fill: any   = this._fill[0];
  public stroke: any = { width: this._size[0] / 4, style: this._fill[this.i] };

  public fill = 0x7fc7ff;
  public squareTranslate = [250, 250];

  public pixelHitArea = hitAreas.PixelHitArea;


  public tweenComplete () {
    // Prevents Angular Error: "Expression has changed after it was checked."
    setTimeout(() => {
      if (++this.i > 3) { this.i = 0; }
      // this.rotate = [ this._size[this.i] * 5, 1000, tweens.easings.easeInOutSine, () => this.tweenComplete() ];
      // this.size   = [ [this._size[this.i], this._size[this.i]], 1000, tweens.easings.easeInOutSine ];
      // this.xy     = [ this._xy[this.i], 1000, tweens.easings.easeInOutSine ];
      // this.fill   = [ this._fill[this.i], 1000, tweens.easings.easeInOutSine ];
      // this.stroke = [ { style: this._fill[this.i] }, 1000, tweens.easings.easeInOutSine];
    });
  }

  public onClick (e: MouseEvent): void {

  }

  public rotateCircle() {
    if (this.r > 0) {
      this.circleRotation = 270;
    } else {
      this.circleRotation = 90;
    }
    return this.circleRotation;
  }

  public rotateRect() {
    if (this.r > 0) {
      this.circleRotation = 0;
    } else {
      this.circleRotation = 180;
    }
    return this.circleRotation;
  }

  public onMouseEnter (e: MouseEvent): void {
    // this.squareFill = 0x009900;
  }

  public onMouseLeave (e: MouseEvent): void {
    // this.squareFill = 0x666666;
  }
}

import { Component, OnInit, AfterViewInit  } from '@angular/core';
import {hitAreas} from 'ngvas';
import { ViewChild, ElementRef } from '@angular/core';
import {Point} from './point-form.point.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasRef: ElementRef;
  public point: Point;
  // public xValues = [
  //   { value: -3, display: '-3' },
  //   { value: -2, display: '-2' },
  //   { value: -1, display: '-1' },
  //   { value: 0, display: '0' },
  //   { value: 1, display: '1' },
  //   { value: 2, display: '2' },
  //   { value: 3, display: '3' },
  //   { value: 4, display: '4' },
  //   { value: 5, display: '5' }
  // ];
  //
  // public rValues = [
  //   { value: -3, display: '-3' },
  //   { value: -2, display: '-2' },
  //   { value: -1, display: '-1' },
  //   { value: 0, display: '0' },
  //   { value: 1, display: '1' },
  //   { value: 2, display: '2' },
  //   { value: 3, display: '3' },
  //   { value: 4, display: '4' },
  //   { value: 5, display: '5' }
  // ];

  private ctx: CanvasRenderingContext2D;

  ngOnInit() {
    this.getPoints();
    this.point = {
      xValue: null,
      rValue: 5
    };
  }

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.draw_graph();
  }

  draw_graph() {
    const ctx = this.ctx;
    const canvas_width = this.canvasRef.nativeElement.width;
    const canvas_height = this.canvasRef.nativeElement.height;
    const grid_size = 320;
    if (this.canvasRef != null) {
      let r1 = this.point.rValue * 32;
      const x0 = 160;
      const y0 = 160;
      const rect_w = - r1;
      const rect_h = r1 / 2;
      let startAngle = Math.PI * 3 / 2;
      let endAngle = 0;
      const triangle_x = x0 - r1;
      const triangle_y = y0 - r1 / 2;
      if (r1 < 0) {
        startAngle = Math.PI * 0.5;
        endAngle = Math.PI;
        r1 = -r1;
      }

      ctx.clearRect(0, 0, canvas_width, canvas_height);
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#000000';
      ctx.moveTo(0, grid_size / 2);
      ctx.lineTo(canvas_width, grid_size / 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#000000';
      ctx.moveTo(grid_size / 2, 0);
      ctx.lineTo(grid_size / 2, canvas_height);
      ctx.stroke();

      // rectangle
      ctx.beginPath();
      ctx.rect(x0, y0, rect_w, rect_h);
      ctx.fillStyle = '#aee7ff';
      ctx.fill();
      ctx.stroke();

      // circle-part
      const radius = r1;
      ctx.beginPath();
      ctx.arc(x0, y0, radius, startAngle, endAngle);
      ctx.lineTo(x0, y0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // triangle
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x0, triangle_y);
      ctx.lineTo(triangle_x, y0);
      ctx.lineTo(x0, y0);
      ctx.fill();
      ctx.stroke();
    }

  }

  drawOnClick(event: MouseEvent): void {
    const ctx = this.ctx;
    if (this.canvasRef != null) {
      const clientX = event.clientX - this.canvasRef.nativeElement.offsetLeft;
      const clientY = event.clientY - this.canvasRef.nativeElement.offsetTop;
      let x, y;
      if (clientX >= 160) {
        x = (clientX - 160) * 5 / 160;
      } else {
        x = -(160 - clientX) * 5 / 160;
      }
      if (clientY >= 160) {
        y = -(clientY - 160) * 5 / 160;
      } else {
        y = (160 - clientY) * 5 / 160;
      }
      this.drawPoint(clientX, clientY, 'blue');
      this.point.xValue = x;
      this.point.yValue = y;

    }
  }

  drawPoint(x, y, color) {
    const ctx = this.ctx;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  getPoints(): void {
    // this.pointService.getPoints()
    //   .subscribe(points => this.points = points);
  }
}

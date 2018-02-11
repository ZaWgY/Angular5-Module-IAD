import { Component, OnInit } from '@angular/core';
import {PointsService} from './points.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css'],
  providers: [PointsService]
})
export class PointsComponent implements OnInit {
  points: Array<any>;
  constructor(private pointsService: PointsService) { }

  ngOnInit() {
    this.pointsService.getAll().subscribe(
      data => {
        this.points = data;
      },
      error => console.error(error)
    );
  }

}

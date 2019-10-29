import { Component, OnInit } from '@angular/core';

import { restaurants } from '../restaurants';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  restaurants = restaurants;

  constructor() { }

  ngOnInit() {
  }

}
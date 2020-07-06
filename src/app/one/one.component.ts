import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-one',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

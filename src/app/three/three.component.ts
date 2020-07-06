import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

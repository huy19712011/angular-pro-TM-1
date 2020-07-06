import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  // encapsulation: ViewEncapsulation.Native, // not work, why?
  encapsulation: ViewEncapsulation.None,
})
export class TwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

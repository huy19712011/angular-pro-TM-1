import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'example-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  user;

  update() {
    this.user.name = 'Matt Skiba';
  }

}

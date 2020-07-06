import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'example-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TwoComponent {

  constructor() { }

  @Input()
  user;

  update() {
    this.user.name = 'Scott Raynor';
  }
}

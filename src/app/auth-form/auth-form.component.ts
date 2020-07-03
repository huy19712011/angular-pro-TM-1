import { Component, OnInit, Output, EventEmitter, ContentChild, AfterContentInit, ContentChildren, QueryList, ViewChild, AfterViewInit, Input } from '@angular/core';

import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit, AfterContentInit, AfterViewInit {
  showMessage: boolean;
  
  // @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent> ;

  @ViewChild(AuthMessageComponent, {static: true}) message : AuthMessageComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // console.log(this.message);
    // this.message.days = 30;
  }

  ngAfterContentInit() {
    if (this.message) {
      this.message.days = 30;
    }

    if (this.remember) {
      // this.remember.checked.subscribe((checked: boolean) => {
      //   this.showMessage = checked;
      // });

      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}

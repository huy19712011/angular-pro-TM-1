import { Component, OnInit, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';

import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.component';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit, AfterContentInit {
  showMessage: boolean;
  
  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}

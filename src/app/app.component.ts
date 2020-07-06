import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { static: true, read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
  ) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);
    // console.log(component.instance);
    component.instance.title = 'Create account';
    
    // component.instance.submitted.subscribe((data: User) => this.loginUser(data)); // way 1
    component.instance.submitted.subscribe(this.loginUser); // the same as way 1
  }
  
  loginUser(user: User) {
    console.log('Login: ', user);
  }
}

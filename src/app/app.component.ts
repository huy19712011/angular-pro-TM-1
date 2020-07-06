import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, ComponentRef, TemplateRef } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  component: ComponentRef<AuthFormComponent>;
  
  @ViewChild('entry', { static: true, read: ViewContainerRef }) entry: ViewContainerRef;

  @ViewChild('tmpl', {static: true}) tmpl: TemplateRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
  ) {}

  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.tmpl);
    
  }
  
  destroyComponent() {
    this.component.destroy();
  }
  
  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }
  
  loginUser(user: User) {
    console.log('Login: ', user);
  }
}

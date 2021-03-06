import { Component, OnInit, Output, EventEmitter, ContentChild, AfterContentInit, ContentChildren, QueryList, ViewChild, ViewChildren, AfterViewInit, Input, ElementRef, ViewContainerRef, AfterViewChecked, ChangeDetectorRef, Renderer2 } from '@angular/core';

import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit, AfterContentInit, AfterViewInit {
  title = 'Login';

  showMessage: boolean;

  @ViewChild('email') email: ElementRef;
  
  // @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent> ;
  
  // @ViewChild(AuthMessageComponent, {static: true}) message : AuthMessageComponent;
  
  @ViewChildren(AuthMessageComponent) message : QueryList<AuthMessageComponent>;
  // @ViewChildren(AuthMessageComponent,{read: ElementRef}) message : QueryList<AuthMessageComponent>;
  // @ViewChildren(AuthMessageComponent,{read: AuthMessageComponent}) message : QueryList<AuthMessageComponent>;
  // @ViewChildren(AuthMessageComponent,{read: ViewContainerRef}) message : QueryList<AuthMessageComponent>;
  
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  
  constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    // console.log(this.message);
    // this.message.days = 30;
    
    // if (this.message) {
    //   this.message.days = 30;
    // }
    
    // if (this.message) {
    //   setTimeout(() => {
    //     this.message.forEach((message) => {
    //       message.days = 30;
    //     });
    //   });
    // }
    
    if (this.message) {
      this.message.forEach((message) => {
        message.days = 30;
      });

      this.cd.detectChanges();
    }

    // console.log(this.email.nativeElement);

    // using nativeElement
    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email address');
    // this.email.nativeElement.focus();
    // this.email.nativeElement.classList.add('email');

    // using Renderer2
    // this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
    // this.renderer.addClass(this.email.nativeElement, 'email');
    // // this.renderer.selectRootElement('.email').focus(); // select DOM with class 'email'
    // this.renderer.selectRootElement('#email').focus(); // select DOM with id = 'email'
  }
  
  
  ngAfterContentInit() {
    // if (this.message) {
    //   this.message.days = 30;
    // }
    
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

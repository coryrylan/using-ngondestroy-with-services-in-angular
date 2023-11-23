import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HelloComponent } from './hello.component';
import 'zone.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent, CommonModule],
  template: `
    <a href="https://coryrylan.com/blog/using-ngondestroy-with-services-in-angular">
      <h1>ngOnDestroy with Angular Services</h1>
    </a>

    <button (click)="show = !show">toggle</button>

    <app-hello *ngIf="show"></app-hello>
  `,
})
export class App {
  show = true;
}

bootstrapApplication(App);

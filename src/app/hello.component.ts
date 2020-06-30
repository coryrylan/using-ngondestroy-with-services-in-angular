import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-hello',
  template: `hello there`,
  providers: [LogService]
})
export class HelloComponent {
  constructor(private log: LogService) { }
}
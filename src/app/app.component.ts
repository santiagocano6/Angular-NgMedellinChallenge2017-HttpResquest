import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ComponentService } from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  joke: string;

  constructor (private componentService: ComponentService) {}

  ngOnInit(): void {
    this.getData();

    setInterval(() => {
       this.getData(); }, 5000);
  }

  getData(): void {
    this.componentService.getJoke().subscribe(
      nextJoke => {
        this.joke = nextJoke;
      },
      error => {
        this.joke = `Error uncontrolled:  ${error}`;
        console.log(error);
      }
    );
  }
}

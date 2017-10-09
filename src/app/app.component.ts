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
    setInterval(() => {
       this.getData(); }, 5000);
  }

  getData(): void {
    this.componentService.getJoke().subscribe(
      nextJoke => {
        this.joke = nextJoke;
      },
      error => {
        alert(error);
      }
    );
  }
}

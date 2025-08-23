import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, MatSidenavModule, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Agenda';

  ngOnInit(): void {

  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from "./core/components/mainlayout/mainlayout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, MainLayoutComponent]
})
export class AppComponent {
  title = 'food-store';
}

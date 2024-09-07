import { Component } from '@angular/core';
import { MainLayoutComponent } from "./core/components/mainlayout/mainlayout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<app-mainlayout/>',
  styleUrl: './app.component.scss',
  imports: [MainLayoutComponent]
})
export class AppComponent {
  title = 'food-store';
}

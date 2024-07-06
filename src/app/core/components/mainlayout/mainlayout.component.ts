import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
@Component({
  selector: 'app-mainlayout',
  standalone: true,
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.scss',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent]
})
export class MainLayoutComponent {

}

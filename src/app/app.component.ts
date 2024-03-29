import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "./main-page/main-page.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CarrousselComponent } from './carroussel/carroussel.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MainPageComponent, NavbarComponent, CarrousselComponent]
})
export class AppComponent {
  title = 'projetoJoji';
}

import { Component } from '@angular/core';
import { AllComponent } from '../pages/all/all.component';
import { MoviesComponent } from '../pages/movies/movies.component';
import { PeopleComponent } from '../pages/people/people.component';
import { TvComponent } from '../pages/tv/tv.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}

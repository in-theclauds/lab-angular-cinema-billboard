import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  allTheMovies: Array <any> = [];

  constructor( private myService: Movies,
                private myRouter: Router) { }

  goToMoviePage(theIDArgument) {
    this.myRouter.navigate(['/movies', theIDArgument]);
  }

  ngOnInit() {
    this.allTheMovies = this.myService.getMovies();
    console.log(this.allTheMovies);
  }

}

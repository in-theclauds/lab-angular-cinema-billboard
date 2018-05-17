import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../movies.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  theMovie: any = {};

  constructor( private route: ActivatedRoute,
              private myService: Movies) { }

  ngOnInit() {
    this.route.params
      .subscribe((theParams) => {
        const theID = Number(theParams['id']);
        this.theMovie = this.myService.getMovie(theID);
        console.log(this.theMovie);
    });
  }

}

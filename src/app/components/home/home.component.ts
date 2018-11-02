import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  artistas: any[] = []

  constructor( private spotiy: SpotifyService ) {
    this.spotiy.getNewReleases()
        .subscribe( (data:any) => {
          console.log(data.albums.items)
          this.artistas = data.albums.items;
        });
  }

  ngOnInit() {
  }

}

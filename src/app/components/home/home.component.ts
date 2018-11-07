import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  artistas: any[] = []
  loading:boolean;
  error = false;
  mensajeError: string;

  constructor( private spotiy: SpotifyService ) {
    this.loading = true
    this.spotiy.getNewReleases()
        .subscribe( (data:any) => {
          this.artistas = data;
          this.loading = false
        }, (errorServicio) => {
          console.log(errorServicio)
          this.loading = false
          this.error = true
          this.mensajeError = errorServicio.error.error.message;
        });
  }

  ngOnInit() {
  }

}

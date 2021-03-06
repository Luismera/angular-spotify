import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  
  nuevasCasiones: any[] = []
  loading:boolean;

  constructor( private spotify:SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string){
    console.log(termino)
    this.loading = true;
    this.spotify.getArtistas(termino)
        .subscribe( (data:any) => {
          this.nuevasCasiones = data
          this.loading = false;
        })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) {
    console.log
  }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }` ;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD3EVjV_wTRXUiNoTy9HifsFoKDIiaypROs5IS2yxDE-reGxi3ms9IHMEFUL3kkB-sueyV9Xrz8wUERgOY'
    })

    return this.http.get(url, { headers })

  }

  getNewReleases(){
 
    return this.getQuery('browse/new-releases')
               .pipe( map( data => data['albums'].items ) )
        
  }

  getArtistas( termino: string ){

    return this.getQuery(`search?q=${termino}&type=artist`)
               .pipe( map( data => data['artists'].items ) )
    
  }

  getArtista( id: string ){

    return this.getQuery(`artists/${id}`)
               //.pipe( map( data => data['artists'].items ) )
    
  }


}

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
      'Authorization': 'Bearer BQAwThZUgzoxUc_z2BLFv7_unqKSiKq03nBcFbx-1Z2wC07DT6heNxFj1iIiVZ9XUoEQ02mV-Jji2R3Cqss'
    })

    return this.http.get(url, { headers })

  }

  getNewReleases(){
 
    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => data['albums'].items ) )
        
  }

  getArtista( termino ){

    return this.getQuery(`search?q=${termino}&type=artist`)
               .pipe( map( data => data['artists'].items ) )
    
  }


}

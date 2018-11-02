import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) {
    console.log
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCtPrY7XV1NgePzYomhLEzCXtMl76QJQ93fL4BPlaAJStofDswxfJVndcSBgO8FOrrb59BF9clDjmvDb6U'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
        
  }


}

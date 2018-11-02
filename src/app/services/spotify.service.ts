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
      'Authorization': 'Bearer BQBGGs2cVS5gv9d_EwrijhkssV-DB6pex0VqHWDpfpVuD2tqNFoMNTpG06qJ_oEMXOlMPZPVj0nI4jL8_M8'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
        
  }

  getArtista( termino ){
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBGGs2cVS5gv9d_EwrijhkssV-DB6pex0VqHWDpfpVuD2tqNFoMNTpG06qJ_oEMXOlMPZPVj0nI4jL8_M8'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers})
    
  }


}

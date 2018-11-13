import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Song } from '../../models/song';
import { Album } from '../../models/album';
import { deserialize } from 'json-typescript-mapper';


import 'rxjs/add/operator/map';
/*
  Generated class for the ItunesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItunesProvider {
  apiRoot: string = 'https://itunes.apple.com/search?term="';
  searchKind: string;


  constructor(public http: HttpClient) {
    console.log('Service API iTunes listo!');
  }

  /*getArtistSongs(artistName: string): Promise<Song[]> {
    this.searchKind = '"&entity=song';
    return this.http.get(this.apiRoot+artistName+this.searchKind)
    .map((res: any) =>{
      return res.map(res=>{deserialize(Song, res)});
    }).toPromise();
  }*/
  getArtistSongs(artistName: string): Promise<Song[]> {
    this.searchKind = '"&entity=song';
    return this.http.get(this.apiRoot+artistName+this.searchKind)
    .map((res: any) =>{
      console.log(res.results);
      return res.map(res=>{deserialize(Song, res)});
    }).toPromise();
  }

  getArtistAlbums(artistName: string): Promise<Album[]> {
    this.searchKind = '"&entity=album';
    return this.http.get(this.apiRoot+artistName+this.searchKind)
    .map((res: any) =>{
      return res.map(res=>{deserialize(Album, res)});
    }).toPromise();
  }
}

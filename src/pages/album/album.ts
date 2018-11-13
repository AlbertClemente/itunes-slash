import { Album } from './../../models/album';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ItunesProvider } from '../../providers/itunes/itunes';

@Component({
  selector: 'page-album',
  templateUrl: 'album.html'
})
export class AlbumPage {
  albums: Album[] = [];
  albumName: string = '';
  like: boolean = false;
  totalLikes: number = 0;
  msg: string = '';

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public itunes: ItunesProvider, public loadingCtrl: LoadingController) {
    console.log('iTunes service listo.');
  }

  presentToast(msg:string) {
    const toast = this.toastCtrl.create({
      message: this.msg,
      duration: 3000
    });
    toast.present();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Cargando resultados...",
      duration: 1500
    });
    loader.present();
  }

  getAlbums(artist: string){
    /*
    this.itunes.getArtistAlbums(artist).subscribe((data: any) => {
        this.albums = data.results;
      }
    );
    */
    this.presentLoading();
    this.itunes.getArtistAlbums(artist)
    .then(
      res => {
        this.albums = res;
      }
    )
    .catch(
      err => {
        console.error(err);
      }
    );
    return this.albumName = artist;
  }

}

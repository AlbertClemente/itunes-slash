import { Song } from '../../models/song';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

//Importamos el provider
import { ItunesProvider } from '../../providers/itunes/itunes';

//model
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  songs: Song[] = [];
  artistName: string = '';
  like: boolean = false;
  totalLikes: number = 0;
  msg: string = '';

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public itunes: ItunesProvider, public loadingCtrl: LoadingController) {}
  getSongs(artist: string){
    /*
      this.itunes.getArtistSongs(artist).subscribe((data: any) => {
        this.songs = data.results;
      }
    );
    */

    // https://codecraft.tv/courses/angular/http/http-with-promises/
    // https://codecraft.tv/courses/angular/http/http-with-observables/
    this.presentLoading()
    this.itunes.getArtistSongs(artist)
    .then(
      res => {
        this.songs = res;
        console.log(this.songs);
      }
    )
    .catch(
      err => {
        console.error(err);
      }
    );
    return this.artistName = artist;
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

  likeSong(like:boolean){

    /*if (like == false){
      this.msg = 'Canción añadida correctamente a tu lista de favoritos.';
      this.presentToast(this.msg);
      this.like = true;
      this.totalLikes++;
      return like;
    }
    else{
      this.msg = 'Canción quitada correctamente de tu lista de favoritos.';
      this.presentToast(this.msg);
      this.like = false;
      this.totalLikes--;
      return like;
    }
    */
  }
}

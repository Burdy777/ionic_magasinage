import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewArticlePage } from '../new-article/new-article';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  goToNewArticle(){
    this.navCtrl.push(NewArticlePage);
  }
}

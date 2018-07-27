import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * Generated class for the NewArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-article',
  templateUrl: 'new-article.html',
})
export class NewArticlePage {
types = [
  'jupe', 'pantalon', 'chaussures'
];
sizesShoes = [
  36, 37, 38, 39, 40, 41
];
sizesClothes = [
  'S', 'M', 'L', 'XL'
];
selectedType = false;
selected;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewArticlePage');
  }

  selectType(selected) {
    if (selected != ''){
      this.selectedType = true;
      this.selected = selected;
    }
  }

  selectSizeClothes(){

  }

  selectSizeShoes() {
    
  }
}

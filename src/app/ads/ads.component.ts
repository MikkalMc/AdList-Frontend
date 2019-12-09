import { Component, OnInit } from '@angular/core';
import { AdsService } from './ads.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  ads = []
  owner = ""
  title = ""
  description = ""
  price = 0


  constructor(private adsService: AdsService) { }

  ngOnInit() {
  }

  createAd() {
    this.adsService.createAd(this.owner, this.title, this.description, this.price)
    .subscribe((el) => {
    })
  }

  getAds() {
    this.adsService.getAds()
    .subscribe((el) => {
      let stringify = JSON.stringify(el)
      let parse = JSON.parse(stringify)
      this.ads = []
      parse.forEach(ad => {
        console.log(ad)
        this.ads.push(ad)
      });
    })
  }

  delete(id) {
    console.log("delete ", id)
  }
}

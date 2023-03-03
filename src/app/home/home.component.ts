import { Component, OnInit } from '@angular/core';
// import { Data } from '../data';
import {PostService} from '../post.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageName: any;
  // data = new Data("", "", "", "", "", 0, "", "", "", "");

  myData:any;

  dataArr: any = [];

  yes = true;

// category:any
// weight:any
// city:any
// milkInLiters:any
// pregnant:any
// price:any
// sellerName:any
// sellerPhone:any



  constructor(private postService: PostService) {}

  get(){

    this.postService.get().subscribe((data:any) => {
      // this.imageName = data[0].goodImage;
      
      this.dataArr = data;

      // data.forEach((myData:any) => {
        
      //     if(myData.category == 'chicken') {

      //       this.yes = false;

      //     }

      // });

      console.log(this.dataArr);

  //     for (this.myData of data) {
  //       this.imageName = this.myData.goodImage
  //         this.category = this.myData.category
  //         this.weight = this.myData.weight
  //         this.city = this.myData.city
  //         this.milkInLiters = this.myData.milkInLiters
  //         this.pregnant = this.myData.pregnant
  //         this.price = this.myData.price
  //         this.sellerName = this.myData.sellerName
  //         this.sellerPhone = this.myData.sellerPhone

  //  }

   

    })

  }

  ngOnInit() {
    
    this.get();

  }

}

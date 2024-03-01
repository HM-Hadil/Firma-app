import { Component } from '@angular/core';
import { FallahServiceService } from './../../services/fallah-service.service';
import { product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  shop: product[] =[];
  constructor(private service: FallahServiceService,private router:Router ){

  }
  ngOnInit(): void {
    this.getAllProducts();

   }
   getAllProducts(){
     this.service.getproductList().subscribe(data=>{
       this.shop=data;
       console.log(data)
     })

   }

}

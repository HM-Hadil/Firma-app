import { Router } from '@angular/router';
import { FallahServiceService } from './../../services/fallah-service.service';
import { product } from 'src/app/models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
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
  AddPanier(id:any){
    this.router.navigate(['/shopId', id]);

  }


}

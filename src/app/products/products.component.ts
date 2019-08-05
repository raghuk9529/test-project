import { Component,Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
product;
  constructor(@Inject (Http) public obj,@Inject (Router) public rt) {
      this.obj.get("/getProduct").subscribe(x=>{
          this.product=JSON.parse(x._body);
         // alert(this.product)
      })
   }

 

}

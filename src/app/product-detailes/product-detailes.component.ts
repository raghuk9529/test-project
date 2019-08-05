import { Component,Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.css']
})
export class ProductDetailesComponent {
proid;info;

  constructor(@Inject (Http) public ht,@Inject (ActivatedRoute) public rt) { 
 this.rt.params.subscribe(dt=>{
    this.proid=(dt["pid"]);
    this.ht.post("/pdetailes",{proid:this.proid}).subscribe(dt=>{
      this.info=JSON.parse(dt._body)
      //alert(this.info)
    })
  })
  

 
  }
  
}


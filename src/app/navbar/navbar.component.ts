import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navbarOpen = false;
  public show:boolean=false;
  public buttonName:any='New User Registration';
  public headingName:string='Login Page';
  public hide:boolean=true;
  
  
  toggleNavbar()
   {
       this.navbarOpen = !this.navbarOpen;
   }
      toggle()
                {
                    this.show=!this.show;
                    this.hide=!this.hide;
                    if(this.show)
                      this.headingName='Signup Page',
                      this.buttonName='Already have a account';
                         
                           
                      else
                      this.headingName='Login Page',
                      this.buttonName='New User Registration';
                     
                }
}

import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';


const routes:Routes=[
     {path:"",redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'features',component:FeaturesComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'pd/:pid',component:ProductDetailesComponent},
    {path:'**',component:PageNoteFoundComponent},

   
   
]
export const routing=RouterModule.forRoot(routes);
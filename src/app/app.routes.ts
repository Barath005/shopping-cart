import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'listing/:category', component: ListingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkoutpage', component: CheckoutpageComponent },
  { path: 'singleproduct/:singleproductId', component: SingleproductComponent }
];
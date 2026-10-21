import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Product } from './pages/product/product';

const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'product/:id',
    component: Product
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

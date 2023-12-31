import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('../app/components/home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../app/components/about/about.module').then(x => x.AboutModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('../app/components/blog/blog.module').then(x => x.BlogModule)
  },
  {
    path: 'sut',
    loadComponent: () => import('../app/components/sut/sut.component').then(x => x.SutComponent)
  },
  {
    path: 'projects',
    loadChildren: () => import('../app/components/project/project.module').then(x => x.ProjectModule)
  },
  {
    path: 'eshop',
    loadChildren: () => import('../app/components/online-shop/online-shop.module').then(x => x.OnlineShopModule)
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

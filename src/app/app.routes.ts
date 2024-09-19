import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';
import { RelatedproductComponent } from './components/relatedproduct/relatedproduct.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'home',
        pathMatch : 'full'
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'product',
        component : ProductComponent
    },
    {
        path : 'relatedproduct',
        component : RelatedproductComponent
    },
    {
        path : 'cart',
        component : CartComponent
    },
    {
        path : 'productThumbnail',
        component : ProductThumbnailComponent
    }
];

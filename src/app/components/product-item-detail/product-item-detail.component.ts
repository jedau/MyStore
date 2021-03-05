import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  @Input() product!: Product;
  quantity: number = 1;
  sub;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(params => { 
       this.product = this.productService.getProduct(params.get('id'));
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addToCart(): void {
    alert(`${this.product.name} x${this.quantity} added to the cart!`);
    let addedItem: Item = { product: this.product, quantity: this.quantity }
    this.cartService.addToCart(addedItem);
  }

  onBack(): void {
    this.router.navigate(['']);
 }
}

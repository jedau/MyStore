import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  cart!: Cart;
  products!: Product[];
  item!: Item;

  constructor(private cartService: CartService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  addToCart(addedItem: Item): void {
    this.cartService.addToCart(addedItem);
    this.cart = this.cartService.getCart();
  }
}

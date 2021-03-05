import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/models/item';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: Cart;
  items!: Item[];
  total!: number;
  fullName!: string;
  address!: string;
  creditCard!: number;
  cartSize: number;

  constructor(private cartService: CartService, private router: Router) { 
  }

  ngOnInit(): void {
    this.getCart();
    if (this.cart.total == 0) {
      alert("The cart is empty!");
      this.router.navigate(['']);
    }
  }

  getCart(): void {
    this.cart = this.cartService.getCart();
    if (this.cart != undefined && this.total != 0) {
      this.items = this.cart.items;
      this.total = this.cart.total;
      this.cartSize = this.cart.items.length;
    } else {
      alert("The cart is empty!");
      this.router.navigate(['']);
    }
  }

  recalculateCartTotal(): void {
    this.total = this.cartService.getCartTotal();
    if (this.cart.total == 0) {
      alert("The cart is empty!");
      this.router.navigate(['']);
    }
  }

  checkout(): void {
    if (this.cart.total == 0) {
      alert("The cart is empty!");
      this.router.navigate(['']);
    } else {
      this.cartService.saveCustomerDetails(this.fullName, this.address, this.creditCard);
      this.cartService.generateOrderNumber();
      this.router.navigate(['confirmation']);
    }
  }
}

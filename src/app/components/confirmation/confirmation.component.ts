import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Customer } from 'src/app/models/customer';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  cart!: Cart;
  customer: Customer;
  orderNumber: string;

  constructor(private cartService: CartService, private router: Router) { 
    this.customer = {fullName: "", address: "", creditCard: 0};
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.customer = this.cartService.getCustomerDetails();
    this.orderNumber = this.cartService.orderNumber;
    this.cartService.setCart([], 0);
    if (this.cart == undefined) {
      alert("You need to complete an order first!");
      this.router.navigate(['']);
    }
  }

  onBack(): void {
    this.cartService.setCart([], 0);
    this.router.navigate(['']);
 }
}

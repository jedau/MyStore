import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { Item } from 'src/app/models/item';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart!: Cart;
  products!: Product[];
  item!: Item;
  customer: Customer;
  orderNumber: string;

  constructor() {
    this.customer = {fullName: "", address: "", creditCard: 0};
  }

  getCart(): Cart {
    return this.cart;
  }

  getCartItems(): Item[] {
    return this.cart.items;
  }

  getCartTotal(): number {
    this.calculateCartTotal();
    return Number(this.cart.total.toFixed(2));
  }

  setCart(items: Item[], total: number): void {
    this.cart = {items: items, total: total};
  }

  calculateCartTotal(): void {
    let runningTotal: number = 0;
    this.cart.items.forEach(item => runningTotal += item.product.price * item.quantity);
    this.cart.total = runningTotal;
  }

  addToCart(itemToBeAdded: Item): void {
    let isAdded: boolean = false;
    let oldQuantity: number = 0;
    let existingItemIndex: number = 0;
    this.item = itemToBeAdded;
    if (this.cart == undefined) {
      this.cart = { items: [itemToBeAdded], total: itemToBeAdded.product.price * itemToBeAdded.quantity };
    } else {
      this.cart.items.forEach((item, index) => {
        if (!isAdded) {
          if (item.product.id == this.item.product.id) {
            isAdded = true;
            oldQuantity = item.quantity;
            existingItemIndex = index;
          }
        }
      });
      if (!isAdded) {
        this.cart.items.push(this.item);
      } else {
        this.cart.items[existingItemIndex].quantity = Number(oldQuantity) + Number(this.item.quantity);
      }
    }
    this.calculateCartTotal();
  }

  removeFromCart(itemToBeRemoved: Item): void {
    this.cart.items.forEach((item, index) => {
      if(item.product.id == itemToBeRemoved.product.id) {
        this.cart.items.splice(index,1);
      }
    });
    this.calculateCartTotal();
  }

  saveCustomerDetails(fullName: string, address: string, creditCard): void {
    this.customer.fullName = fullName;
    this.customer.address = address;
    this.customer.creditCard = creditCard;
  }

  getCustomerDetails(): Customer {
    return this.customer;
  }

  generateOrderNumber(): void {
    let orderNumber = "";
    let validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (let i = 0; i < 16; i++) {
      orderNumber += validChars.charAt(Math.floor(Math.random() * validChars.length));
    }
    this.orderNumber = orderNumber;
  }
}
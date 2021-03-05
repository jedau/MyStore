import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item!: Item;
  @Output() selectedItem = new EventEmitter<Item>();
  @Output() recalculatedTotal = new EventEmitter<number>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  modifyQuantity(newQty: string): void {
    if (Number(newQty) == 0) {
      this.removeFromCart();
    } else {
      this.item.quantity = Number(newQty);
      this.selectedItem.emit(this.item);
      this.recalculatedTotal.emit(this.cartService.getCartTotal());
    }
  }

  removeFromCart(): void {
    this.cartService.removeFromCart(this.item);
    this.recalculatedTotal.emit(this.cartService.getCartTotal());
  }

}

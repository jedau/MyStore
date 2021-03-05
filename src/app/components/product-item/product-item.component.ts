import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  quantity: number = 1;
  @Output() selectedProduct = new EventEmitter<{product: Product, quantity: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(): void {
    alert(`${this.product.name} x${this.quantity} added to the cart!`);
    this.selectedProduct.emit({product: this.product, quantity: this.quantity});
  }
}

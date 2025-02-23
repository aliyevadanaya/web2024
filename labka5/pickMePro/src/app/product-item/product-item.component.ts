import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Product {
  id: number;
  name: string;
  category: string;
  likes: number;
  image: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() like = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>(); 

  onLike(): void {
    this.like.emit();
  }
  onRemove(): void {
    this.remove.emit();
  }
}

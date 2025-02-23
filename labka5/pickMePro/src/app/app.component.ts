import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = ['Apple', 'Samsung', 'Xiaomi', 'Huawei'];
  selectedCategory: string = "";

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}

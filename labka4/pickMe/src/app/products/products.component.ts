import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      image: 'https://i.pinimg.com/736x/98/3d/31/983d31b9274670c99af53f7a44e15be6.jpg',
      name: 'iPhone 14 Pro Max',
      description: 'Apple iPhone 14 Pro Max 256GB, фиолетовый (у меня, кстати, точно такой же телефон :3)',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000'
    },

    {
      image: 'https://i.pinimg.com/736x/10/a9/5c/10a95cd790dcdeba8b954057e8b0429d.jpg',
      name: 'iPad Pro 2024',
      description: 'Планшет Apple iPad Pro 2024 Wi-Fi 13 дюйм 8 Гб/256 Гб черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2024-wi-fi-13-djuim-8-gb-256-gb-chernyi-119579567/?c=750000000'
    },

    {
      image: 'https://i.pinimg.com/736x/59/5a/40/595a4083d18ee46baff2e2edaa85e778.jpg',
      name: 'Apple Pencil Pro',
      description: 'Стилус Apple Pencil Pro белый',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-pencil-pro-belyi-119975356/?c=750000000'
    },

    {
      image: 'https://i.pinimg.com/736x/a8/c0/a5/a8c0a501f98468a04c03700a026e1a2b.jpg',
      name: 'Apple Magic Keyboard',
      description: 'Чехол Apple Magic Keyboard для Apple iPad Pro 13 (2024) 13 дюйм черный',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-magic-keyboard-dlja-apple-ipad-pro-13-2024-13-djuim-chernyi-120291527/?c=750000000'
    },

    {
      image: 'https://i.pinimg.com/736x/52/74/a5/5274a5ccd6163ee44184ef01d901ecbd.jpg',
      name: 'Apple Watch SE2',
      description: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм черный-черный (у меня такие же, только  2023 года :3)',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-chernyi-chernyi-129672957/?c=750000000'
    },

    {
      image: 'https://i.pinimg.com/736x/32/f7/3e/32f73e918436aa40ff52a421fb49a875.jpg',
      name: 'AirPods Pro 2',
      description: 'Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-belyi-107211678/'
    },

    {
      image: 'https://i.pinimg.com/736x/8c/f6/e6/8cf6e64fa37fa94ae5543a742c3e9e16.jpg',
      name: 'MacBook Pro',
      description: 'Ноутбук Apple MacBook Pro 14 2024 / 24 Гб / SSD 512 Гб / macOS / MX2H3',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-512-gb-macos-mx2h3-132140624/?c=750000000'
    },

    {
      image: 'https://i.pinimg.com/736x/88/2e/45/882e4591dd3782ce6a5f048d1f2724e6.jpg',
      name: 'iMac',
      description: 'Моноблок Apple iMac 24 2024 MWUU3 серебристый',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-imac-24-2024-mwuu3-serebristyi-131303037/?c=750000000'
    },

    {
      image: 'https://i.pinimg.com/736x/93/70/3a/93703a66fa68a3e320bd441abe995cdd.jpg',
      name: 'Apple Vision Pro',
      description: 'Очки дополненной реальности Apple Vision Pro 512 Gb',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-vision-pro-512-gb-116472619/?c=750000000'
    },

    {
      image: 'https://i.pinimg.com/736x/f4/fb/d2/f4fbd265aa59a783de199e31a2d72cff.jpg',
      name: 'Apple TV',
      description: 'Медиаплеер Apple TV 128ГБ 4K 2022 Wi‑Fi + Ethernet',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-tv-128gb-4k-2022-wi-fi-ethernet-108062591/?c=750000000'
    },

  ];
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component'; 

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
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() selectedCategory!: string;
  products: Product[] = [
    // Apple
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/98/3d/31/983d31b9274670c99af53f7a44e15be6.jpg',
      name: 'iPhone 14 Pro Max',
      category: 'Apple',
      likes: 0,
      description: 'Apple iPhone 14 Pro Max 256GB, фиолетовый (у меня, кстати, точно такой же телефон :3)',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000'
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/10/a9/5c/10a95cd790dcdeba8b954057e8b0429d.jpg',
      name: 'iPad Pro 2024',
      category: 'Apple',
      likes: 0,
      description: 'Планшет Apple iPad Pro 2024 Wi-Fi 13 дюйм 8 Гб/256 Гб черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2024-wi-fi-13-djuim-8-gb-256-gb-chernyi-119579567/?c=750000000'
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/59/5a/40/595a4083d18ee46baff2e2edaa85e778.jpg',
      name: 'Apple Pencil Pro',
      category: 'Apple',
      likes: 0,
      description: 'Стилус Apple Pencil Pro белый',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-pencil-pro-belyi-119975356/?c=750000000'
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/a8/c0/a5/a8c0a501f98468a04c03700a026e1a2b.jpg',
      name: 'Apple Magic Keyboard',
      category: 'Apple',
      likes: 0,
      description: 'Чехол Apple Magic Keyboard для Apple iPad Pro 13 (2024) 13 дюйм черный',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-magic-keyboard-dlja-apple-ipad-pro-13-2024-13-djuim-chernyi-120291527/?c=750000000'
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/736x/52/74/a5/5274a5ccd6163ee44184ef01d901ecbd.jpg',
      name: 'Apple Watch SE2',
      category: 'Apple',
      likes: 0,
      description: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм черный-черный (у меня такие же, только  2023 года :3)',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-chernyi-chernyi-129672957/?c=750000000'
    },

    
    // Samsung
    {
      id: 6,
      name: 'Samsung Galaxy S24 Ultra',
      category: 'Samsung',
      likes: 0,
      image: 'https://i5.walmartimages.com/asr/a109ea06-568f-49d9-bd52-5975cb6b5a12.d54437261c36059e19d0d6b22e48680b.jpeg',
      description: 'Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ серый',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000'
    },
    {
      id: 9,
      name: 'Samsung Galaxy Z Flip 3',
      category: 'Samsung',
      likes: 0,
      image: 'https://m.media-amazon.com/images/I/719OjGWiuWL.jpg',
      description: 'Смартфон Samsung Galaxy Z Flip 3 8 ГБ/256 ГБ лавандовый',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip-3-8-gb-256-gb-lavandovyi-102033475/?c=750000000'
    },
    {
      id: 7,
      name: 'Samsung Galaxy Tab S10 Ultra',
      category: 'Samsung',
      likes: 0,
      image: 'https://cdn.movertix.com/media/catalog/product/cache/image/1200x/s/a/samsung-galaxy-tab-s10-ultra-14-6-5g-moonstone-grey-256gb-and-12gb-ram-sm-x926n-side.jpg',
      description: 'Планшет Samsung Tab S10 Ultra 14.6 дюйм 12 Гб/256 Гб серый',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-tab-s10-ultra-14-6-djuim-12-gb-256-gb-seryi-128152132/?c=750000000'
    },
    {
      id: 8,
      name: 'Samsung Watch7',
      category: 'Samsung',
      likes: 0,
      image: 'https://api.fmobile.kz/image/media/sale/image/smart_chasy_samsung_galaxy_watch7_40mm_sm_l300nzeacis_282161_1%202024-07-25_16-28-59.272674%206772f7e9f5462c8820cd095b.jpg',
      description: 'Смарт-часы Samsung Galaxy Watch7 40 мм бежевый-белый',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch7-40-mm-bezhevyi-belyi-121760378/?c=750000000'
    },
    {
      id: 10,
      name: 'Samsung Galaxy Buds',
      category: 'Samsung',
      likes: 0,
      image: 'https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/earpods/samsung/galaxy-buds-fe/galaxy-buds-fe-grafit.jpg/galaxy-buds-fe-grafit.jpg/veonmarket%3Alarge',
      description: 'Наушники Samsung Galaxy Buds FE серый',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-fe-seryi-114021918/?c=750000000'
    },


    // Xiaomi
    {
      id: 11,
      name: 'Xiaomi 14 Ultra',
      category: 'Xiaomi',
      likes: 0,
      image: 'https://i.pinimg.com/474x/34/81/e1/3481e12d79564b49eb8a3abe41c538df.jpg',
      description: 'Смартфон Xiaomi 14 Ultra 16 ГБ/512 ГБ черный',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-gb-512-gb-chernyi-117684874/?c=750000000'
    },
    {
      id: 12,
      name: 'Xiaomi Pad 6 Pro',
      category: 'Xiaomi',
      likes: 0,
      image: 'https://m-home.kz/images/xiaomi-pad-6s-pro/9.webp',
      description: 'Планшет Xiaomi Mi Pad 6 Pro 11 дюйм 12 Гб/512 Гб черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-pad-6-pro-11-djuim-12-gb-512-gb-chernyi-110872733/?c=750000000'
    },
    {
      id: 13,
      name: 'Xiaomi Smart Pen',
      category: 'Xiaomi',
      likes: 0,
      image: 'https://m.media-amazon.com/images/I/41J3EjeLdeL._AC_UF1000,1000_QL80_.jpg',
      description: 'Стилус Xiaomi Smart Pen черный',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-pen-m2107k81pc-chernyi-103355873/?c=750000000'
    },
    {
      id: 14,
      name: 'Xiaomi Фитнес-браслет',
      category: 'Xiaomi',
      likes: 0,
      image: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-smart-band-9/m/97a741551c121a13dfd50e5187f3d489.jpg',
      description: 'Фитнес-браслет Xiaomi Smart Band 9 черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-chernyi-121749494/?c=750000000'
    },
    {
      id: 15,
      name: 'Xiaomi Power Bank',
      category: 'Xiaomi',
      likes: 0,
      image: 'https://i.gadgets360cdn.com/large/xiaomi_mi_power_bank_3_pro_edition_1546601712974.jpg',
      description: 'Внешний аккумулятор Xiaomi Redmi Power Bank 20000 мАч черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-power-bank-20000-mach-chernyi-100322086/?c=750000000'
    },

    // Huawei
    {
      id: 16,
      name: 'Huawei Pura 70 Pro',
      category: 'Huawei',
      likes: 0,
      image: 'https://i.pinimg.com/474x/70/c0/7e/70c07ee1dafb722258a7da578a27fba9.jpg',
      description: 'Смартфон Huawei Pura 70 Pro 12 ГБ/512 ГБ черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/huawei-pura-70-pro-12-gb-512-gb-chernyi-120278768/?c=750000000'
    },
    {
      id: 17,
      name: 'Huawei Matebook D16',
      category: 'Huawei',
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h09/84934294700062.png?format=gallery-large',
      description: 'Ноутбук Huawei MateBook D16 16" / 16 Гб / SSD 1024 Гб / Win 11 Home / MitchellG-W7611',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/huawei-matebook-d16-16-16-gb-ssd-1024-gb-win-11-home-mitchellg-w7611-116480565/?c=750000000'
    },
    {
      id: 18,
      name: 'Планшет Huawei MatePad',
      category: 'Huawei',
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p70/p7b/24180594.png?format=gallery-medium',
      description: 'Планшет Huawei MatePad S 11.5 дюйм 8 Гб/256 Гб серебристый с клавиатурой + подарок',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/huawei-matepad-s-11-5-djuim-8-gb-256-gb-serebristyi-s-klaviaturoi-podarok-134418590/?c=750000000'
    },
    {
      id: 19,
      name: 'Huawei Watch',
      category: 'Huawei',
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/heb/87290543308830.png?format=gallery-medium',
      description: 'Смарт-часы Huawei Watch GT 5 46 мм черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/huawei-watch-gt-5-46-mm-chernyi-124275314/?c=750000000'
    },
    {
      id: 20,
      name: 'Наушники Huawei',
      category: 'Huawei',
      likes: 0,
      image: 'https://img01.huaweifile.com/sg/ms/ae/pms/uomcdn/AE_HW_B2C/pms/202405/gbom/6942103112225/800_800_77F69A0205BA0878A428F822DA9DAD7Cmp.png',
      description: 'Наушники Huawei Free Clip фиолетовый',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/huawei-free-clip-fioletovyi-116760058/?c=750000000'
      
    }
  ];

  get filteredProducts() {
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  likeProduct(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) product.likes++;
  }

  removeProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}

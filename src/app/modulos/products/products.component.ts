import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modelos/Product';
import { AltioraService } from 'src/app/servicios/altiora.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  product!: Product;
  selectedProducts: Product[] = [];

  constructor(private altioraService: AltioraService) {
    this.GetAllProducts();
  }

  ngOnInit(): void {
  }

  async GetAllProducts() {
    this.products = await this.altioraService.GetAllProducts();
    console.log("products", this.products)
  }

  openNew() {
  }

  editProduct(product: Product) {
  }

  deleteProduct(product: Product) {
  }

}

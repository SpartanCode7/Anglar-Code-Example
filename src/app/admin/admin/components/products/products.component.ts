import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  // platformBrowserDynamic().bootstrapModule(AppModule);

  taxStatus : any = ["Basic", "Intermidiate", "High Paid"];
  currencies : any = ["US", "Korean", "Uae", "Russia", "Singapore"];

  permalinks : any = ['Apple', 'Google', 'Samsung'];

  addColors : any = [" ", "Color"];


  productForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  onProdSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.productForm.value);
  }

  ngOnInit(): void {
  }

}

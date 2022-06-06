import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppdataService } from './../../../../appservices/services/appdata.service';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  permalinks : any = ['Apple', 'Google', 'Samsung'];

  cateForm = new FormGroup({
    cateName: new FormControl(''),
    cateDiscription: new FormControl(''),
    cateSlug: new FormControl(''),
    catePermalink: new FormControl(''),
  });

  postCates: any;

  cateSubmit(){
    this.http
    .post('http://localhost:5000/categories', this.cateForm.value)
    .subscribe({
      next: (response) => console.log(response)
    });
  }

  ngOnInit(): void {
  }

}

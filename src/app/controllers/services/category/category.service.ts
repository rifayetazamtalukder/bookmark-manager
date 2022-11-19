import { Injectable } from '@angular/core';

import { LocalStorage } from "../../enums/local-storage";

// src/app/controllers/services/category/category.service.ts

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  public getAllCategories(): string[] {
    const categories = localStorage.getItem(LocalStorage.categories);

    if(!categories) {
      return [];
    }
    
    return JSON.parse(categories);
  }

  public addBookmark() {

  }

  public addCategory(newCategory: string) {
    const _categories = this.getAllCategories();

    _categories.push(newCategory);

    localStorage.setItem(LocalStorage.categories, JSON.stringify(_categories));
  }
}

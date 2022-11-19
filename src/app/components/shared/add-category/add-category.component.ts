import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { CategoryService } from "../../../controllers/services/category/category.service";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit, OnDestroy {

  public bookmarkForm!: FormGroup;
  public readonly titleMaxLength: number = 30;

  public categories: string[] = [];

  // Getters
  get title() { return this.bookmarkForm.get('title'); }
  get url() { return this.bookmarkForm.get('url'); }
  get category() { return this.bookmarkForm.get('category'); }


  constructor(
    private readonly _fb: FormBuilder,
    private readonly _categoryService: CategoryService,
    private readonly _snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.categories = this._categoryService.getAllCategories();

    this.bookmarkForm = this._fb.group({
      title: ['', [
        Validators.required,
        Validators.maxLength(this.titleMaxLength)
      ]],
      url: ['', [
        Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
      ]],
      category: ['', [
        Validators.required
      ]]
    });
  }

  ngOnDestroy(): void {
    this._snackbar.dismiss();
  }

  public handleAddBookmarkFormSubmit() {
    // console.log('Form value: ', this.bookmarkForm.value);
    if(this.bookmarkForm.valid) {

    }
    else {
      this._snackbar.open('Please fill all the required fields', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 4000
      });
    }
  }

  public getTitleErrorMessage(): string | undefined {
    if (this.title?.valid) {
      return;
    }

    if (this.title?.hasError('required')) {
      return `Title is a required field`;
    }
    else {
      return `Maximum ${this.titleMaxLength} characters is allowed`;
    }
  }

  public getUrlErrorMessage(): string | undefined {
    if (this.url?.valid) {
      return;
    }

    if (this.url?.hasError('required')) {
      return `URL is a required field`;
    }
    else {
      return `Please enter a valid url`;
    }
  }

  public getCategoryErrorMessage(): string | undefined {
    if (this.category?.valid) {
      return;
    }

    if (this.category?.hasError('required')) {
      return `Category is a required field`;
    }
    else {
      return `Please enter a valid Category`;
    }
  }
}

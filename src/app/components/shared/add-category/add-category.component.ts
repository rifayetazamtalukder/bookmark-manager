import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { MatDialogRef } from '@angular/material/dialog';

import { CategoryService } from "../../../controllers/services/category/category.service";

import { BookmarkService } from "../../../controllers/services/bookmark/bookmark.service";

import { BookMark } from "../../../controllers/interfaces/bookmark.interface";

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
  get customCategory() { return this.bookmarkForm.get('customCategory'); }


  constructor(
    private readonly _fb: FormBuilder,
    private readonly _categoryService: CategoryService,
    private readonly _bookmarkService: BookmarkService,
    private readonly _snackbar: MatSnackBar,
    private _dialogRef: MatDialogRef<AddCategoryComponent>
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
      ]],
      customCategory: ['not-enabled', [
        Validators.required
      ]]
    });
  }

  ngOnDestroy(): void {
    this._snackbar.dismiss();
  }

  public handleAddBookmarkFormSubmit() {
    if(this.bookmarkForm.valid) {
      console.log('Form value: ', {
        bookmarkForm: this.bookmarkForm.value,
        isCategoryDisabled: this.category?.disabled
      });

      // const _category = this.category?.disabled ? this.customCategory?.value : this.category?.value;

      let _category = '';

      if(this.category?.disabled) {
        _category = this.customCategory?.value.trim();

        if(this.categories.includes(_category)) {
          this._snackbar.open('This category name is already exists', 'Close', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 4000
          });

          return;
        }
        else {
          // Add the category
          this._categoryService.addCategory(_category);
        }

      }
      else {
        _category = this.category?.value
      }

      const _bookmark: BookMark = {
        title: this.title?.value,
        url: this.url?.value,
        category: _category
      }

      // console.log('Final _bookmark: ', _bookmark);

      this._bookmarkService.addBookmark(_bookmark);
      this._dialogRef.close('bookmark_added');
    }
    else {
      this._snackbar.open('Please fill all the required fields', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 4000
      });
    }
  }

  public addCustomCategory() {
    this.category?.disable();

    this.bookmarkForm.patchValue({  
      customCategory: '',
      category: 'disabled'
    });

    this.bookmarkForm.updateValueAndValidity()
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

  public getCustomCategoryErrorMessage(): string | undefined {
    if (this.customCategory?.valid) {
      return;
    }

    if (this.customCategory?.hasError('required')) {
      return `Category name is a required field`;
    }
    else {
      return `Please enter a valid Category Name`;
    }
  }
}

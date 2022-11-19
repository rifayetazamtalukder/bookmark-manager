import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private readonly _dialog: MatDialog,
  ) {}

  ngOnInit(): void {

  }

  public openAddBookmarkDialog() {
    const dialogRef = this._dialog.open(AddCategoryComponent, {
      width: '500px',
      maxWidth: '94vw',
      maxHeight: '90vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Bookmark form data: ${result}`);
    });
  }
}

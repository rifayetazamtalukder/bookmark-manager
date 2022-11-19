import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { BookmarkService } from "../../../controllers/services/bookmark/bookmark.service";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  bookmark: any;

  constructor(
    private readonly _bookmarkService: BookmarkService,
  ) {

  }

  ngOnInit(): void {
    this._bookmarkService.singleBookmarkSubject$
      .subscribe((data: any) => {
        this.bookmark = data;
      })
  }

}

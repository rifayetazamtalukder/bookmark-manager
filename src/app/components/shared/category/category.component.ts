import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { BookMark } from "../../../controllers/interfaces/bookmark.interface";

import { BookmarkService } from "../../../controllers/services/bookmark/bookmark.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() bookmark: BookMark | undefined;

  constructor(
    private readonly _bookmarkService: BookmarkService,
  ) {

  }

  ngOnInit(): void {

  }

  handleClick() {
    if(this.bookmark) {
      this._bookmarkService.details(this.bookmark);
    }
  }
}

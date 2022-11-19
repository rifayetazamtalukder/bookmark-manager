import { Component, OnInit } from '@angular/core';

import { BookmarkService } from "./controllers/services/bookmark/bookmark.service";
import { BookMark } from "./controllers/interfaces/bookmark.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bookmark-manager';

  public bookamrks: BookMark[] = [];

  constructor(
    private readonly _bookmarkService: BookmarkService
  ) {}

  ngOnInit(): void {
    this._bookmarkService.setBookMarks();

    this._bookmarkService.bookmarks$
      .subscribe((_bookmarks: BookMark[]) => {
      this.bookamrks = _bookmarks;

      console.log('Bookmarks: ', this.bookamrks);
    });
  }
}

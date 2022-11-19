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
  public bookamrksGrouped: any = [];

  constructor(
    private readonly _bookmarkService: BookmarkService
  ) {}

  ngOnInit(): void {
    this._bookmarkService.setBookMarks();

    this._bookmarkService.bookmarks$
      .subscribe((_bookmarks: BookMark[]) => {
        const groupedBookmark = 
        _bookmarks.reduce((r: any, a: any) => {
          r[a.category] = r[a.category] || [];
          r[a.category].push(a);
          return r;
        }, Object.create(null));
        
        // for(const category of groupedBookmark) {
          //   console.log(category);
          // }
        const data = Object.entries(groupedBookmark);
        // console.log(data);

        // for(const book of data) {
        //   // console.log(book);

        // }

        this.bookamrksGrouped = data;

        this.bookamrks = _bookmarks;
        console.log('Bookmarks: ', this.bookamrks);
    });
  }
}

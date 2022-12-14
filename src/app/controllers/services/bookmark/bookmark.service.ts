import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { BookMark } from "../../interfaces/bookmark.interface";


@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  private _bookmarkSubject = new BehaviorSubject<BookMark[]>([]);
  public bookmarks$ = this._bookmarkSubject.asObservable();

  public _singleBookmarkSubject = new BehaviorSubject<BookMark | null>(null);
  public singleBookmarkSubject$ = this._singleBookmarkSubject.asObservable();
  
  private readonly bookmarkKey = 'bookmarks';

  get bookMarks(): BookMark[] {
    return this._bookmarkSubject.value;
  }

  constructor() { }

  public addBookmark(newBookMark: BookMark): void {
    const _bookmarks: BookMark[] = [
      ...this.bookMarks,
      newBookMark
    ]

    this._bookmarkSubject.next(_bookmarks);
    this._saveBookMarkInLocalStorage(_bookmarks);
  }

  private _saveBookMarkInLocalStorage(bookmarks: BookMark[]): void {
    localStorage.setItem(this.bookmarkKey, JSON.stringify(bookmarks));
  }

  /**
   * Set bookmarks from local storage
   * 
   * This method will be called when the app is initialized
   */
  public setBookMarks() {
    let _bookMarks: BookMark[] = [];

    const _bookMarkInLocalSotrage = localStorage.getItem(this.bookmarkKey);

    if(_bookMarkInLocalSotrage) {
      _bookMarks = JSON.parse(_bookMarkInLocalSotrage);
    }

    this._bookmarkSubject.next(_bookMarks);
  }

  details(bookMark: BookMark) {
    this._singleBookmarkSubject.next(bookMark);
  }
}

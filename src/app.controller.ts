import { Book, Books } from './fakeDatabase';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {  BooksService } from './app.service';

@Controller("books")
export class BooksController {
  constructor(private readonly BooksService: BooksService) {}

  @Get("getAllBooks")
  getAllBooks():Book[]{
  return this.BooksService.getAllBooks()
  }

  @Get("getById/:id")
  getBookbyid(@Param("id")id:string):Book|undefined{
    const bookID=+id;
    return this.BooksService.getBookbyId(bookID);

  }
  @Post("addBook")
  addBook(@Body() book:Partial<Book>):Book|undefined{
  const bookData=book;
  if(!bookData.author||!bookData.title||!bookData.publicationYear) return undefined
    return this.BooksService.create(bookData)
  }
  @Put("/:id")
  updateBook(@Param("id")id:number,@Body()book:Partial<Book>):number{
    const BookId=id;
    return BookId;
  }
}

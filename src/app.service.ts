import { Injectable } from '@nestjs/common';
import { Book, Books } from './fakeDatabase';

@Injectable()
export class BooksService {
getAllBooks():Book[]{
  return Books
}
getBookbyId(bookId:number):Book |undefined{
  return Books.find(book=>book.id===bookId)

}
addBook():Book|undefined{
return ;
}
create(book:Partial<Book  >):Book|undefined{
  const newId=Books[Books.length-1].id +1

  const newBook:Book={
    id:newId,
    author:book.author??"",
    publicationYear:book.publicationYear??  0,
    title:book.title??""
  }
  Books.push(newBook)
  return newBook ;

}
updateBook(){
  
}
}

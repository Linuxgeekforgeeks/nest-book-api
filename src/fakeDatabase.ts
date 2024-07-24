export interface Book{
    id:number,
    author:string,
    title:string,
    publicationYear:number,

}


export const Books:Book[]=[
    { id: 1, title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1839 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960 },
    { id: 3, title: "1984", author: "George Orwell", publicationYear: 1949 },
    { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925 },
    { id: 5, title: "Moby Dick", author: "Herman Melville", publicationYear: 1851 },
  ]
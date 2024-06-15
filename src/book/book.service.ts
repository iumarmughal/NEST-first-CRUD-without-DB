import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
    public books: Book[] = [];

    // Add book
    addBookService(book: Book): string {
        book.id = uuidv4()
        this.books.push(book);
        return "Book added";
    }

    // Update book
    updateBookService(id: string, updatedBook: Book): string {
        let index = this.books.findIndex((currentBook) => {
            return currentBook.id === id;
        });
        this.books[index] = updatedBook;
        return "Book updated";

    }

    // Delete book
    deleteBookService(bookId: string): string {
        this.books = this.books.filter((book) => {
            return book.id !== bookId;
        });
        return "Book deleted";

    }

    //find all books
    findAllBooks(): Book[] {
        return this.books
    }
}

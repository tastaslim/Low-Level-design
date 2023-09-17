class Book:
    def __init__(self, name):
        self.book = name

    def list_books(self):
        return self.book

    def create_book(self, name):
        self.book.push(name)
        return f"Book created: {name}"


class PrintInformation:

    def save_book(self, book_id):
        print(f"Book saved: ${self}, {book_id}")

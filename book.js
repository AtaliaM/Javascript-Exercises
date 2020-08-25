let book = {
    name: "Harry Potter",
    author: "J.K Rowling",
    releaseDate: 1995,
    numPages: 555,
}

function returnBookInfo(book) {
    return `The book ${book.name} was written by ${book.author} in the year ${book.releaseDate}.`;
}

console.log(returnBookInfo(book));
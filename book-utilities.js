let book1 = {
    name: "Harry Potter",
    author: "J.K Rowling",
    releaseDate: 1995,
    numPages: 555,
}

let book2 = {
    name: "The Shining",
    author: "Stephen King",
    releaseDate: 1977,
    numPages: 447,
}

let bookUtils = {}

bookUtils.getFirstPublished = (book1, book2) => {
    return book1.releaseDate < book2.releaseDate ? book1.releaseDate : book2.releaseDate;
};

bookUtils.setNewEdition = (book, editionYear) => {
    book.latestEdition = editionYear;
};

bookUtils.setLanguage = (book, language) => {
    book.language = language;
};

bookUtils.setTranslation = (book, language, translator) => {
    book.translation = {
        language : language,
        translator : translator,
    }
};

bookUtils.setPublisher = (book, name, location) => {
    book.publisher = {
        name : name,
        location : location,
    }
};

bookUtils.isSamePublisher = (book1,book2) => {
    if (book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location)
    {
        return true;
    }
    else {
        return false;
    }
};

console.log(bookUtils.getFirstPublished(book1, book2));

bookUtils.setNewEdition(book1, 2000);
console.log(book1.latestEdition);

bookUtils.setLanguage(book2, "Hebrew");
console.log(book2.language);

bookUtils.setTranslation(book1, "Russian", "humpty dumpty");
console.log(book1.translation);

bookUtils.setPublisher(book2, "Awesome publisher", "Tokyo");
console.log(book2.publisher);
bookUtils.setPublisher(book1, "Awesome publisher", "Tokyo");
console.log(book2.publisher);

console.log(bookUtils.isSamePublisher(book1,book2));






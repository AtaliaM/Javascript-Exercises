var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
    ];

function booksThatCanBeRead(data) {

    data.forEach(book => {  
        if (book.readingStatus === true) {
            console.log(`The book "${book.title}" by author ${book.author} reading status is ${book.readingStatus} so it can be read.`);
        }   
    });
}

booksThatCanBeRead(library);
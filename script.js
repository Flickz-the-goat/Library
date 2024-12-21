//get the button and add event listener
const btn = document.querySelectorAll("#addBook");
btn.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector("#modal");
        modal.showModal();
    })
});
let books = [];
//create the book function 
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
//add the sumbit button stuff and add the book
const submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
    createBook(); 
    addDiv(); 
    updateRead();
});
function createBook() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;
    const book = new Book(title, author, pages, read);
    books.push(book);
}
function addDiv() {
    let b = books.pop();
    books.push(b); 
    const book = document.createElement("div");
    book.classList.add("book");
    const title = document.createElement("div");
    title.textContent = b.title;
    title.classList.add("title");
    const content = document.createElement("div");
    content.classList.add("content");
    const author = document.createElement("div");
    author.textContent = b.author;
    const pages = document.createElement("div");
    pages.textContent = b.pages;
    const read = document.createElement("div");
    read.textContent = b.read;
    content.appendChild(author);
    content.appendChild(pages);
    content.appendChild(read);
    book.appendChild(title);
    book.appendChild(content);
    const bookshelf = document.querySelector(".bookshelf");
    bookshelf.appendChild(book);

    //add remove button
    const remove = document.createElement("button");
    remove.textContent = "X";
    remove.classList.add("remove");
    remove.addEventListener("click", () => {
        book.remove();
        updateRead();
    });
    title.appendChild(remove);
}

function updateRead() {
    const sidebar = document.querySelector(".sidebar");
    const num = document.createElement("div");
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].read === "Read") {
            count++;
        }
    }
    num.textContent = "Number Read Books: " + count;
    
    // Remove previous count if it exists
    const oldNum = sidebar.querySelector("div");
    if (oldNum) {
        oldNum.remove();
    }
    
    sidebar.appendChild(num);
}

// Initial call to display the count
updateRead();
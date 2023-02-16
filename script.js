const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const numberOfPages = document.querySelector("#number-of-pages");
const addBook = document.querySelector("#submit-btn");
const bookList = document.querySelector("#book-list");
const reading = document.querySelector(".read");
//   reading.checked = true;

addBook.addEventListener("click", function(){
    if(titleInput.value=="" && 
       authorInput.value == "" && 
       numberOfPages== ""){
        alert("Enter any Input");
       }
    else{
        const bookListRow = document.createElement("tr");
        const newTitle = document.createElement("th");
        newTitle.innerHTML = titleInput.value;
        bookList.appendChild(newTitle);
        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = authorInput.value;
        bookList.appendChild(newAuthor);
        const newNumberOfPages = document.createElement("th");
        newNumberOfPages.innerHTML = numberOfPages.value;
        bookList.appendChild(newNumberOfPages);
       const newReading = document.createElement("th");
       newReading.innerHTML = checking();
       bookList.appendChild(newReading);
            }
        })
    

function checking(){
if(reading.checked){
    return "Completed";
}
else{
return "not completed";
}
}
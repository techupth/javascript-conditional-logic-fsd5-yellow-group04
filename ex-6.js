// Exercise #6: Favorite Books
let favoriteBooks = [];

function addFavoriteBook(bookName) {
  if (bookName.includes("Beauty")) {
    return favoriteBooks.push(bookName);
  } else {
    return;
  }
}

// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty");

console.log(favoriteBooks);

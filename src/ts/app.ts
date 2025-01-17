import Cart from "./service/Cart";
import Book from "./domain/Book";
import MusicAlbum from "./domain/MusicAlbum";
import Movie from "./domain/Movie";

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
cart.add(
  new Movie(
    1009,
    "The Avengers",
    800,
    2012,
    "USA",
    "Avengers Assemle!",
    ["фантастика", "боевик", "фэнтези", "приключения"],
    137
  )
);

console.log(cart.items);

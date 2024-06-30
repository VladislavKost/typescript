import Cart from "../service/Cart";
import Movie from "../domain/Movie";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";

test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("add value to the chart", () => {
  const cart = new Cart();
  const movie = new Movie(
    1009,
    "The Avengers",
    800,
    2012,
    "USA",
    "Avengers Assemle!",
    ["фантастика", "боевик", "фэнтези", "приключения"],
    137
  );
  cart.add(movie);
  expect(cart.items[0]).toEqual(movie);
});

test("return sum of the chart", () => {
  const cart = new Cart();
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
  expect(cart.totalAmountClear()).toBe(3700);
});

test("return sum of the chart with discount", () => {
  const cart = new Cart();
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
  expect(cart.totalAmountDiscount(10)).toBe(3330);
});

test("delete item from the chart", () => {
  const cart = new Cart();
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
  cart.deleteItem(1001);
  const curIds = cart.items.map((item) => item.id);
  expect(curIds).toEqual([1008, 1009]);
});

import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  set items(items: Buyable[]) {
    this._items = items;
  }

  totalAmountClear(): number {
    const sum = this.items.reduce((acc: number, item: Buyable) => {
      acc += item.price;
      return acc;
    }, 0);
    return sum;
  }

  totalAmountDiscount(discount: number): number {
    const clearPriceTotal = this.totalAmountClear();
    return clearPriceTotal - (clearPriceTotal * discount) / 100;
  }

  deleteItem(id: number): void {
    const newItemsList = this.items.filter((item) => item.id !== id);
    this.items = newItemsList;
  }
}

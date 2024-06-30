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
    let sum: number = 0;
    for (const item of this.items) {
      sum += item.price;
    }
    return sum;
  }

  totalAmountDiscount(discount: number): number {
    const clearPriceTotal = this.totalAmountClear();
    return clearPriceTotal - (clearPriceTotal * discount) / 100;
  }

  deleteItem(id: number): void {
    const newItemsList = [];
    for (const item of this.items) {
      if (item.id !== id) {
        newItemsList.push(item);
      }
    }
    this.items = newItemsList;
  }
}

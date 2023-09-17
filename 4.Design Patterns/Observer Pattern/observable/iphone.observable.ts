import { StockObservable } from "./stock.observable";
import { NotificationObserver } from "../observer/notification.observer";

export class IphoneObservable implements StockObservable {
  private totalStocks = 0;
  private subscribers: Array<NotificationObserver> = [];
  addSubscriber(observer: NotificationObserver) {
    this.subscribers.push(observer);
  }

  removeSubscriber(observer: NotificationObserver) {
    this.subscribers = this.subscribers.filter((obs) => obs != observer);
  }

  notifySubscriber() {
    this.subscribers.forEach((observer) => observer.update());
  }

  getStockCount(): number {
    return this.totalStocks;
  }

  setStockCount(newStock: number): void {
    // When Iphone is out of Stock on Flipkart/Amazon and new stock comes
    if (this.getStockCount() == 0) this.notifySubscriber();
    this.totalStocks = newStock;
  }
}

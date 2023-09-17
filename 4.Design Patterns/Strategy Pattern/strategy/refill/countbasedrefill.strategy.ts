import { IRefillableStrategy } from "./refillable.strategy";

export class CountBasedRefillStrategy implements IRefillableStrategy {
  refill(): void {
    console.log("Refilling based on count");
  }
}

import { IRefillableStrategy } from "./refillable.strategy";

export class NoRefillStrategy implements IRefillableStrategy {
  refill(): void {
    console.log("No need to Refill");
  }
}

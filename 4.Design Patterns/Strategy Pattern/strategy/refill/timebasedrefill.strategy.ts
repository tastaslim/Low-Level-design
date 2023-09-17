import { IRefillableStrategy } from "./refillable.strategy";

export class TimeBasedRefillStrategy implements IRefillableStrategy {
  refill(): void {
    console.log("Refilling based on time");
  }
}

import { IRepairableStrategy } from "./repairable.strategy";

export class NoRepairStrategy implements IRepairableStrategy {
  repair(): void {
    console.log("No need to repair");
  }
}

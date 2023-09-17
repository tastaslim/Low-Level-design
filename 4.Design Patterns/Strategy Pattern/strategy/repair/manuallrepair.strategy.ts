import { IRepairableStrategy } from "./repairable.strategy";

export class ManualRepairStrategy implements IRepairableStrategy {
  repair(): void {
    console.log("Manual repair");
  }
}

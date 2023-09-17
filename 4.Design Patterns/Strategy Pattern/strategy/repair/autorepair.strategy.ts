import { IRepairableStrategy } from "./repairable.strategy";

export class AutoRepairStrategy implements IRepairableStrategy {
  repair(): void {
    console.log("Auto repairing");
  }
}

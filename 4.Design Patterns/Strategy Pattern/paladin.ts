import { Soldier } from "./soldier";
import { IRefillableStrategy } from "./strategy/refill/refillable.strategy";
import { IRepairableStrategy } from "./strategy/repair/repairable.strategy";

export class Paladin extends Soldier {
  constructor(props: {
    refillBehaviour: IRefillableStrategy;
    repairBehaviour: IRepairableStrategy;
  }) {
    super();
    this.refillBehaviour = props.refillBehaviour;
    this.repairBehaviour = props.repairBehaviour;
  }
  fight(): string {
    return "Paladin is fighting";
  }

  move(): string {
    return "Paladin is moving";
  }
  refill() {
    return this.refillBehaviour.refill();
  }

  repair() {
    return this.repairBehaviour.repair();
  }
}

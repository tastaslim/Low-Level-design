import {Soldier} from "./soldier";
import { IRefillableStrategy } from "./strategy/refill/refillable.strategy";
import { IRepairableStrategy } from "./strategy/repair/repairable.strategy";

export class Superhero extends Soldier {
	constructor(props: { refillBehaviour: IRefillableStrategy; repairBehaviour: IRepairableStrategy; }) {
		super();
		this.refillBehaviour = props.refillBehaviour;
		this.repairBehaviour = props.repairBehaviour;
	}

	fight():string {
		return 'Superhero is fighting';
	}
	move():string {
		return 'Superhero is moving';
	}

	refill() {
		console.log('Superhero is refilling');
		return this.refillBehaviour.refill();
	}

	repair() {
		return this.repairBehaviour.repair();
	}
}

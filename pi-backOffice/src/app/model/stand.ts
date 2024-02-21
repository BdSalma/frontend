import { TypeStand } from "./typeStand";
import { Pack } from "./pack";
export class Stand {
    id!: number;
    zone!: TypeStand;
    reserved!: boolean;
    number!: number;
    pack!: Pack;
}

import { TypePack } from "./typePack";
import {Stand} from "./stand"
import { Forum } from "./forum";
import { User } from "./user";
import { reservationStatus } from "./reservationStatus";
export class Pack {
    id!: number;
    typePack!: TypePack;
    prix!: number;
    reservationStatus!: reservationStatus;
    forum!: Forum;
    stand!: Stand;
    reserver !: User; 
    reservationDate!: Date; 
    validationDate!: Date; 

}
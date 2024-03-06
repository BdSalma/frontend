import {Stand} from "./stand"
import { Forum } from "./forum";
export class Pack {
    id!: number;
    prix!: number;
    statut!: boolean;
    forum!: Forum;
    stand!: Stand;
}
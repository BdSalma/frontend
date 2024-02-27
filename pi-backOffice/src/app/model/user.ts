import { Reclamation } from "./reclamation";

export class User {
    id!: string;
    username!: string;
    password!: string;
    email!: string;
    reclamations!: Reclamation[];
}
import { Devis } from "./devis";
import { Offer } from "./offer";
import { SocietyRole } from "./societyRole";
import { User } from "./user";

export class Society extends User {
    matricule!: number;
    logo!: string;
    adresse!: string;
    representative!: string;
    sector!: string;
    role!: SocietyRole;
    devis!: Devis[];
    offers!: Offer[];
}
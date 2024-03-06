import { Interview } from "./interview";
import { Individu } from "./individus";
export class Candidature {
    idCandidature!: number;
    date!: Date;
    status!: string;
    cv!: string;
    lettre!: string;
    interview!: Interview;
    individu!: Individu;
}
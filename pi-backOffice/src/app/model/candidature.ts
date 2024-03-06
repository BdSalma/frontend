import { Interview } from "./interview";
import { Individu } from "./individus";

import { Status } from "./status";
export class Candidature {
    idCandidature!: number;
    date!: Date;
    status!: Status;
    cv!: string;
    lettre!: string;
    interview!: Interview;
    individu!: Individu;
}
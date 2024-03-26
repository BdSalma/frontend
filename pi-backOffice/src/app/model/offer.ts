import {Society} from "./society";
import { Candidature} from "./candidature";
import { User } from "./user";
import { Category } from "./category";
export class Offer{
    id! : number;
    dateEmission!:Date;
    OffreCategory! : Category;
    offerName!:string;
    Candidatnumber! : number;
    candidatProfil! : string;
    duree!:string;
    description!:string;
    candidatures!: Candidature[];
    individus!:User[];
    society!:Society
}
import { Category } from "./category";
import {Society} from "./society";
import { Candidature} from "./candidature";
import { User } from "./user";
export class Offer{
    id! : number;
    dateEmission!:Date;
    offreCategory! : Category;
    offerName!:string;
    Candidatnumber! : number;
    candidatProfil! : string;
    duree!:string;
    description!:string;
    candidatures!: Candidature[];
    individus!:User[];
    society!:Society
}
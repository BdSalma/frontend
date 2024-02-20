import { Category } from "./category";

export class Offer{
    id! : number;
    dateEmission!:Date;
    OffreCategory! : Category;
    Candidatnumber! : number;
    candidatProfil! : string;
    duree!:string;
    description!:string;
}
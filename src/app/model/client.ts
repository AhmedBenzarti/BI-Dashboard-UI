import { Cheque } from "./cheque";

export class Client {
    id: string;
    firstName: string;
    lastName: string;
    numTel: string;
    cin: string;
    email: string;
    nbCheque: number;
    cheques: Cheque[];
}
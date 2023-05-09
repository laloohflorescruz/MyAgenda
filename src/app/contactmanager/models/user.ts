import { Note } from "./note";

export class User {
    id: number | undefined;
    name: string | null | undefined;
    avatar!: string;
    bio!: string;
    birthDate!: Date;

    notes: Note[] = [];

}

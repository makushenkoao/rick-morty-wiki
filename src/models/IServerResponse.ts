import {Info} from "./ICharacter";

export interface IServerResponse<T> {
    info: Info;
    results: T[];
}
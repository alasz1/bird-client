export class Sighting {
    constructor(
    public id: number,
    public species: string,
    public rarity: string, 
    public notes: string,
    public timestamp: number,
    public datetime: string,
    public coordinates: string
    ){}
}
import faker from 'faker'
import { Mappable } from './CustomMap'

//User class must satisfy all properties required by Mappable interface
export class User implements Mappable {
    name: string
    location: {
        lat: number,
        lng: number
    }
    color: string = 'red'

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `<h1>User Name: ${this.name}</h1>`
    }
}
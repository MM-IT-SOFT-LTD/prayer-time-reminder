import { APIProvider } from "./apiProvider";
import { prayZone } from "./prayZone";


export class APIManager {
    static getProvider() : APIProvider {
        return new prayZone()
    }
}
import { PrayZoneSetting } from "../components/api/PrayZoneSetting"
import { APIProvider } from "./apiProvider";
import { Time } from "./Time";


export class prayZone implements APIProvider {

    option: any

    constructor() {
        const options = localStorage.getItem('pray-zone-options')
        if (typeof options === 'string') {
            this.option = JSON.parse(options)
        } else {
            this.option = {
                method: '0',
                city: 'dhaka-bd-bd-4933',
                latitude: '23.75365627299183',
                longitude: '90.3685553158669',
                elevation:'30'
            }
        }
    }


    getOptionComponent(): () => JSX.Element {
        return PrayZoneSetting;
    }
    getOption() {
        return this.option
    }
    setOption(option: object): void {
        this.option = option
        localStorage.setItem('pray-zone-options', JSON.stringify(this.option))
    }
    getTimes(): Time[] {
        throw new Error("Method not implemented.")
    }
    
}
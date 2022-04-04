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
    async getTimes(): Promise<Time[]> {
        if (this.option.method == '0') {
            let response = await fetch('https://api.ipify.org?format=json')
            let ip = await response.json()
            ip = ip.ip
            let url = 'https://api.pray.zone/v2/times/today.json?ip='+ip
            if (this.option.school) {
                url += '&school='+this.option.school
            }
            response = await fetch(url)
            let results = await response.json()
            results = results.results.datetime[0].times
            const times : Time[] = []
            Object.keys(results).forEach(key => {
                times.push({
                    name: key,
                    time: results[key]
                })
            })
            return times
        }

         // todo add city and location api  https://prayertimes.date/api/docs/today

        return []
    }
    
}
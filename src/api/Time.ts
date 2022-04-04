import { DateTime } from "luxon"

class Time {
    name : string
    time: string | DateTime

    constructor(name: string, time: string) {
        this.name = name
        this.time = time
    }
}

export {
    Time
}
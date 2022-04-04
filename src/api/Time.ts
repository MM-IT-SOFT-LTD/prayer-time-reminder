enum TimeType {
    Fazr,
    Duhr,
    Asr,
    Magrib,
    Esa,
    Sunrise,
    Sunset
}


class Time {
    type : TimeType
    time: string 

    constructor(type: TimeType, time: string) {
        this.type = type
        this.time = time
    }
}

export {
    TimeType,
    Time
}
import { Time } from "./Time"


export interface APIProvider {
    getOptionComponent(): () => JSX.Element
    getOption(): object
    setOption(option: object): void
    getTimes(): Array<Time>
}

export default interface BaseAction {
    readonly type: string
    readonly payload?: any
    readonly error?: Error
}

import ICategory from './ICategory'

export default interface ICategories {
    categories: ICategory[]
    error: Error | null
}

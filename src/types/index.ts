export type Category = {
    id: string,
    name: string,
    img: string,
    description: string,
    // averagePrice: string
    // averageDuration: string
}

export enum PriceRange {
    low,
    normal,
    high
}

export type Company = {
    id: string,
    name: string,
    logo: string,
    description: string,
    price: PriceRange,
    rating: number,
    categories: Category[]
}

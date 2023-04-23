export type Property = {
    id: string,
    address: string,
    state: string,
    suburb: string,
    type: string,
    price?: string
}

export type Collection = {
    collectionId: number,
    savedProperties: Property[]
}

type Property = {
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

export const mockData : Collection = {
    collectionId: 1,
    savedProperties:[
        {id: "001", address: "9 Manna way", state: "VIC", suburb: "Point cook", type: "S", price: "$700,000"},
        {id: "001", address: "2A Hoppers Lane", state: "NSW", suburb: "Burnwood", type: "P"},
        {id: "001", address: "1023 Princes HW", state: "VIC", suburb: "Caulfield", type: "P"},
]};

export const mockData2 : string = "9 Manna Way, Pointcook, VIC, 3030";
import { Maybe, Some, None } from "../Functional";

type ConvertedAddress = {
    address: string,
    suburb: string,
    state: string
}

/* 
    Rules: 
        1. Convert a string to the ConvertedAddress object
        2. If the address comes as empty it should be returned as None.
    Problems: 
        1. How about the address string is not provided in a valid format? 
        2. What if some of the fields are missing?
        In that sense, it is still not safe. 
*/
const getValidatedAddress = (add: string) : Maybe<string>=> {
    return add ? Some.new(add) : None.new();
}

export const getMappedData = (address: string) : Maybe<ConvertedAddress> => {
    const validatedAddress = getValidatedAddress(address);
    
    return validatedAddress.map<ConvertedAddress>(address => {
        const splitedAddress = address.split(',');
        return {
            address: splitedAddress[0],
            suburb: splitedAddress[1],
            state: splitedAddress[2]
        }
    });
}
import { Maybe } from '../Functional/Maybe';
import { None } from '../Functional/None';
import { Some } from '../Functional/Some';

export type ConvertedAddress = {
    address: string,
    suburb: string,
    state: string,
    postcode: string
}

/* Rules 
1. The address must be splited by ',' 
2. The address must be constructed to ConvertedAddress type
3. Address, suburb, state, postcode are all required, if any of the section is missing, return None.
*/
const getValidatedAddress = (add: string) : Maybe<string>=> {
    return add ? Some.new(add) : None.new();
}

export const getMappedData = (address: string) : Maybe<ConvertedAddress>=> {
    const validatedAddress = getValidatedAddress(address);
    
    return validatedAddress.flatMap<string[]>(add => {
        return Some.new(add.split(','))
    }).flatMap<ConvertedAddress>(splitedAddress => {
        if(splitedAddress.length < 4) {
            return None.new();
        }else {
            splitedAddress.forEach(s => {
                if(!s)
                   return None.new();
            });
            return Some.new({
                address: splitedAddress[0],
                suburb: splitedAddress[1],
                state: splitedAddress[2],
                postcode : splitedAddress[3]
            });
        }
    })
}
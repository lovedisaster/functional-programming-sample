import { Maybe, Some, None } from "../Functional";
import { Collection } from "../types";

/* Rule: 
1. data should not be empty.
2. collectionId should not be empty.
3. savedProperties should not be empty or empty array.
*/
export const getMappedData = (data: Collection) : Maybe<Collection> => {
    if(data && data?.collectionId && data?.savedProperties?.length > 0) {
        return Some.new(data);
    }else{
        // undefined, null, any other custom rules defined as invalid.
        return None.new();
    }
}
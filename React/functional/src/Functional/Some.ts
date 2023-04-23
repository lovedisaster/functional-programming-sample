import {Maybe} from './Maybe';

export class Some<OriginalDataType> {
    static new<OriginalDataType> (value : OriginalDataType) {
        return new Some(value);
    }

    _value: OriginalDataType;

    constructor(value: OriginalDataType) {
        this._value = value;
    }

    map<ConvertedDataType>(f: (value: OriginalDataType) => ConvertedDataType): Some<ConvertedDataType> {
        return new Some(f(this._value));
    }

    flatMap<ConvertedDataType>(f: (value: OriginalDataType) => Maybe<ConvertedDataType>): Maybe<ConvertedDataType> {
        return f(this._value);
    }

    fold<ConvertedDataType>(isEmpty: ()=> ConvertedDataType, f:(value: OriginalDataType) => ConvertedDataType) {
        return f(this._value);
    }
}   
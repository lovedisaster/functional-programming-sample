import { Maybe } from './Maybe';

export class None<U> {
    static new<U>(): None<U> {
        return new None<U>();
    }

    map<V>(f: (value: U) => V): None<V> {
        return new None();
    }

    fold<V>(ifEmpty: () => V, f: (value: U) => V): V {
        return ifEmpty();
    }

    flatMap<V>(f: (value: U) => Maybe<V>): None<V> {
        return new None();
    }
}

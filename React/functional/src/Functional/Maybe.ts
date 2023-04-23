import { Some } from './Some';
import { None } from './None';

// A typical polymorphism （多态）
export type Maybe<U> = Some<U> | None<U>;
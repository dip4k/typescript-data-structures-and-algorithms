export class ComparableNumber implements Comparable<ComparableNumber> {
    constructor(public number: number) {}

    compareTo(value: ComparableNumber): number {
        return this.number - value.number;
    }

    greaterThan(value: ComparableNumber): boolean {
        return this.number > value.number;
    }

    equals(value: ComparableNumber): boolean {
        return this.number === value.number;
    }

    lesserThan(value: ComparableNumber): boolean {
        return this.number < value.number;
    }

    lesserThanOrEqual(value: ComparableNumber): boolean {
        return this.lesserThan(value) || this.equals(value);
    }

    static random(max?: number): ComparableNumber {
        return new ComparableNumber(
            Math.round(Math.random() * max || Number.MAX_SAFE_INTEGER)
        );
    }
}

export interface Comparable<T> {
    compareTo(value: T): number;
    greaterThan(value: T): boolean;
    equals(value: T): boolean;
    lesserThan(value: T): boolean;
    lesserThanOrEqual(value: T): boolean;
}

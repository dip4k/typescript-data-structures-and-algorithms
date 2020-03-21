import { swap } from "algorithms/swap/swap";

export function partition<T>(
    arr: T[],
    predicate: (e: T) => boolean,
    lo: number,
    hi: number
): number {
    let index = lo;

    for (let j = lo; j <= hi; j++) {
        if (predicate(arr[j])) {
            swap(arr, index++, j);
        }
    }

    swap(arr, index, hi);

    return index;
}
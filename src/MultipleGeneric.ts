class DataEntry<K, V> {
    private key: K;
    private value: V;
    constructor(key: K, value: V){
        this.key = key;
        this.value = value;
    }
}

class TriperlEntry<K, V, T> {
    private key: K;
    private value: V;
    private t: T;
    constructor(key: K, value: V, t: T) {
        this.key = key;
        this.value = value;
        this.t = t;
    }
}

export { DataEntry, TriperlEntry }
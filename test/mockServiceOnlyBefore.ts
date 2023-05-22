type Optional<T> = T | undefined;

class MockServiceOnlyBefore {
    onPrepare(config: Optional<object>, capabilities: Optional<object>) {
        return 42
    }
}

export { MockServiceOnlyBefore as launcher }

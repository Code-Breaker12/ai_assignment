let isMounted = false;

export function useEffect(effectFunction) {
    if (!isMounted) {
        effectFunction();
        isMounted = true;
    }
}

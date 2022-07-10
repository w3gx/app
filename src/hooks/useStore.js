import { useEffect, useState } from "react";
import { store } from "src/utils";

/**
 * Optimistically stores a value in localStorage
 *
 * @param {string} key
 * @param {any} initialValue
 * @returns
 */
const useStore = (key, initialValue) => {
    const storedValue = store(key) || initialValue;
    const [state, setState] = useState(storedValue);

    useEffect(() => {
        if (store(key) !== state) {
            store(key, state);
        }
    }, [state]);

    return [state, setState];
};

export { useStore };

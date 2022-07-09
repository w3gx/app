import { useEffect, useState } from "react";
import { store } from "src/utils";

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

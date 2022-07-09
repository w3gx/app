import { useEffect, useState } from "react";
import { store } from "src/utils";

const useStore = (key, initialValue) => {
    const storedValue = store(key) || initialValue;
    const [state, setState] = useState(storedValue);

    useEffect(() => {
        if (storedValue !== state) {
            setState(storedValue);
        }
    });

    return [state, setState];
};

export { useStore };

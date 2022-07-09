const store = (key, value) => {
    if (typeof localStorage === "undefined") {
        return value;
    } else {
        if (value === undefined) {
            return localStorage.getItem(key);
        } else {
            localStorage.setItem(key, value);
            return value;
        }
    }
};

export { store };

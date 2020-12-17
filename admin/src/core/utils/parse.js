export const parseToJson = (value, defaultValue = {}) => {
    try {
        return JSON.parse(value);
    } catch (error) {
        return defaultValue;
    }
}

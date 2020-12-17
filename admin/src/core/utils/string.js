export const pluralize = (word, count = 1, suffix = 's') => {
    return count === 1 ? word : `${word}${suffix}`
}

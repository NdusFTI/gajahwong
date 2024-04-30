const upperFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const toUpperFirstLetterWords = (word: string, separator: any = '-', replacer: any = '') => {
    if (!word || typeof word !== 'string') {
        throw new Error('Word must be string and not empty');
    }

    if (!word.includes(separator)) {
        return upperFirstLetter(word);
    }

    if (word.includes('jakarta') || word.includes('yogyakarta')) {
        const [word1, word2] = word.split(separator);
        return word1.toUpperCase() + upperFirstLetter(word2);
    }

    return word.split(separator).map(upperFirstLetter).join(replacer);
}
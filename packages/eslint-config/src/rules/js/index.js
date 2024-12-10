import formatting from './formatting.js';
import possibleProblems from './possible-problems.js';
import stylistic from './stylistic.js';
import suggestions from './suggestions.js';

// Object.values(document.querySelectorAll('.rule__name')).map(code => `'${code.innerText}': null`).join(', ')

export default {
    ...formatting,
    ...possibleProblems,
    ...stylistic,
    ...suggestions,
};

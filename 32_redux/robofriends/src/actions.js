import { CHANGE_SEARCH_FIELD } from './constants';

export const setSearchField = (text) => ({
    // Constant variable for better debugging:
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

// To test:
// export const setSearchField = (text) => {
//     console.log(text);
//     return {
//         type: CHANGE_SEARCH_FIELD,
//         payload: text
//     }
// }

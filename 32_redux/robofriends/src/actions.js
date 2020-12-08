import { CHANGE_SEARCH_FIELD } from './constants';

export const setSearchField = (text) => ({
    // Constant variable for better debugging:
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

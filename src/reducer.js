export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE AFTER FINISHED DEVELOPING
    token: "BQDr4wZlSSYF5J2qHcMHZvQxDXhOo1x0T4xWB2ZRYfjaTwVgFIIQmnUboQbPAFlUL2T-Kmh582TNzIa7Po_ovfq2NN3wDfXRje56uvCWjCSSIjUfs_gWdZh23dzPg6loRR500T5Q-ull_LpIab6OI3GJXc2HSJYZ6RK",
    
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, user:action.user
            }
        case 'SET_TOKEN':
            return {
                ...state, token:action.token
            }
        case 'SET_PLAYLIST':
            return {
                ...state, playlists:action.playlists
            }
        default:
            return state
    }
}

export default reducer;

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE AFTER FINISHED DEVELOPING
    token: "BQBAG8PEqy6fxFRsJFUCwbowoYV-7Rk5l1dVyOb_rdKuun5W_D9ULc79IL8UC3qaChwnxPYJK-dycb-pFbCmE9wmilMhBIz6PE0xOm1fbSvk05YTgCc4zLT6q8D_zchMLPS-EX-PZL7Of4l7kUeg01a1uqX7CmWVcf2K",
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
        default:
            return state
    }
}

export default reducer;

import { getDefaultNormalizer } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    // make token null after developing....
    token:null,
    // 'BQDIgtDU7uBWxiWNXx1dK_M63D7ibC-M5sI-I1qu3qO0fR0Kix_SrvwoV2H8sc7Otp_u27kP-s-0NNSdNvrvxtJbzEeuH0ymMObxfpg6q0fZjxIc4u5zab2DHqYyzsOoDwt96ST04gS0RgMaBXDvwhA3PnyKRjnsfbORe9I4F-UqyKu0',
};

const reducer = (state, action) => {
    console.log(action);

    //Action => type, [payload]
    switch(action.type) {
        case 'SET_USER':
         return {
            ...state,
            user: action.user,  
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
                };

        case "SET_SPOTIFY":
                    return {
                      ...state,
                      spotify: action.spotify,
                    };
          
              case "SET_ITEM":
                return {
                  ...state,
                  item: action.item,
                };
          
              case "SET_TOP_ARTISTS":
                return {
                  ...state,
                  top_artists: action.top_artists,
                };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET__PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly : action.discover_weekly,
                };    
        default:
            return state;
    }

}
export default reducer;
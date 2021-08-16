// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize";  //this will sent request to spotify to check login 

const redirectUrl = "http://localhost:3000/";     // its redirect address  of home page

 const clientId = "6b6fbf31910b47f5829372268bbf7321"

 const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
 ];

 export const getTokernFromUrl = () => {
     return window.location.hash 
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            // #accessToken=mySuperSecretKey&name= ashutosh
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial;
        }, {});
 }

 export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20"  
  )}&response_type=token&show_dialog=true`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;
const BASIC = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const TOKEN_URL =
        TOKEN_ENDPOINT;
    const response = await fetch(TOKEN_URL, {
        headers: {
            Authorization: `Basic ${BASIC}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams( {
            grant_type: 'refresh_token',
            refresh_token: SPOTIFY_REFRESH_TOKEN
        }),
        method: 'POST',
    });
    return response.json();
};


export const getCurrentPlaying = async () => {
    const {access_token} = await getAccessToken();
    return fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
}

export default async (_, res) => {
    const response = await getCurrentPlaying();
    const track = await response.json();
    console.log(track);
    return res.status(200).json(track)
}
import useSWR from 'swr'
import Spinner from "./Spinner";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function NowPlaying() {
    const { data, error } = useSWR('/api/spotify-now-playing', fetcher)

    if (error || !data?.item) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <h1>{data.item.name}</h1>
            <p>{data.item.artists[0].name}</p>
        </div>
    )
}

export default NowPlaying;
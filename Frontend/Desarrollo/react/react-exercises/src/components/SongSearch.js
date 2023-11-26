import React,{useState,useEffect} from 'react';
import { SongForm } from './SongForm';
import { SongDetails } from './SongDetails';
import { Loader } from './Loader';
import { helpHttp } from '../helpers/helpHttp';

export const SongSearch = () => {
    // Declaración de variables de estado
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    // Gestión de variables de estado
    useEffect(()=>{
        if(search === null) return;

        const fetchData = async()=>{
            const {artist,song }= search;

            let artistUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

            // console.log(artistUrl,songUrl);

            setLoading(true);
            
            const [artistRes,songRes] = await Promise.all([
                helpHttp().get(artistUrl),
                helpHttp().get(songUrl)
            ]);
            
            // console.log(artistRes,songRes);

            setBio(artistRes);
            setLyric(songRes);
            setLoading(false);
        }

        fetchData();
    },[search]);

    // Métodos
    const handleSearch = (data)=>{
        // console.log(data);
        setSearch(data);
    }



  return (
    <div>
        <h2>Song Search</h2>
        <article className='grid-1-3'>
            <SongForm handleSearch={handleSearch}/>
            {loading && <Loader/>}
            {search && !loading && (<SongDetails search={search} lyric = {lyric} bio={bio}/>)}
            </article>
        
    </div>
  )
}

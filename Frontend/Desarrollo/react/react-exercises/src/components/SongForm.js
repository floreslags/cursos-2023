import React,{useState} from 'react';

const initialForm = {
    artist:'',
    song:''
}

export const SongForm = ({handleSearch}) => {

    // Definición de variables de estado
    const [form, setform] = useState(initialForm)

    // Métodos
    const handleChange = (e)=>{
        setform({...form,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        // Validación de datos
        if(!form.artist || !form.song){
            alert("Datos incompletos");
            return;
        }

        handleSearch(form);
        setform(initialForm);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='artist' placeholder='Artist Name' onChange={handleChange} value={form.artist}/>
            <input type="text" name='song' placeholder='Song Name' onChange={handleChange} value={form.song}/>
            <input type="submit" value="Send"/>
        </form>
    </div>
  )
}

import React, {useRef} from 'react';

export default function References(){

    // Se implementa useRef para componentes funcionales

    let refMenu = useRef(),
    refMenuBtn = useRef();


    const handleToggleMenu = (e)=>{


    /*         
     // Sin referencias   
        const $menu = document.getElementById('menu');

        if(e.target.textContent === 'Menú'){

            e.target.textContent = 'Cerrar';
            $menu.style.display = 'block';
        }else{
            e.target.textContent = 'Menú';
            $menu.style.display = 'none';
            
        } */

        if(refMenuBtn.current.textContent === 'Menú'){
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display ="block";
        }else{
            refMenuBtn.current.textContent = "Menú";
            refMenu.current.style.display ="none";
        }


    }

    return(
        <>
            <h2>References</h2>
            <button ref={refMenuBtn} id="menu-btn" onClick={handleToggleMenu}>Menú</button>
            <nav ref={refMenu} id="menu" style={{display:'none'}}>
                <a href="#">Sección 1</a>
                <br/>
                <a href="#">Sección 2</a>
                <br/>
                <a href="#">Sección 3</a>
                <br/>
                <a href="#">Sección 4</a>
                <br/>
                <a href="#">Sección 5</a>
                <br/>
            </nav>
        </>
    );
}
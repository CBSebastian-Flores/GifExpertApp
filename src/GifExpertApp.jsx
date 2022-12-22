import { useState } from 'react';
import { AddCategory, GifGrid } from './Components';
import './style.css';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    /* Forma general */ //(la forma general esta en el mismo input (AddCategorry))

    /* Forma especifica */
    const onAddCategory = ( event ) => {
        if( categories.includes( event ) ) return;
        setCategories([event, ...categories]);
    }

    return (
        <>
            <header>
                {/* Titulo */}
                <h1>GifExpertApp</h1>
            </header>

            <body>
                {/* Input */}
            <AddCategory
                /* Forma general */
                // setCategories={ setCategories } 

                /* Forma especifica */ //(Devuelve el valor especifico)
                onNewCategory={onAddCategory}
            />

            {/* Listado de Gifs */}
            <ol className="contenedor">
                {
                    categories.map( ( category ) => (
                        <GifGrid key = { category } category = { category }/>
                        
                    ))
                }
            </ol>
            </body>
        </>
    )
}

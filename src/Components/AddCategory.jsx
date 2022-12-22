import { useState } from 'react';

/* general: setCategories  Especifico: onNewCategory*/
export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        /* GENERAL */
        // setCategories( categories => [ inputValue, ...categories ]);
        /* ESPECIFICO */
        onNewCategory(inputValue.trim())

        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }> 
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onChange}
            />
        </form>
    )
}

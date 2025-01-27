import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inpuValue, setInputValue] = useState()

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault() // Evita que se refresque el navegador al hacer enter el formulario
        const newCategory = inpuValue.trim();

        if (newCategory.length <= 1) return // evita que se agreguen valores vacios o menores a un caracter
        
        onNewCategory(newCategory)
        setInputValue('')
    }


    return(
        <form  onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inpuValue } 
                onChange={ (event) => onInputChange(event) }
            />
        </form>
    )
}
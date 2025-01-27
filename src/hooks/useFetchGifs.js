import { useEffect, useState } from 'react'
import { getGifs } from './../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const getImages = (async () => {
        setTimeout(async() => {
            const newImages = await getGifs(category)
            setImages(newImages)
            
            console.log('Images => ',images)
            setIsLoading(false)
            }, 1000)
    });
    
    
    useEffect(() => {
        console.log('useFetchGifs isloading =>', isLoading)
        getImages();
    }, [])

    return {
        images,
        isLoading: isLoading
    }
}
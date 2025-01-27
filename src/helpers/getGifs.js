
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=MNvSXQ36fW69bYBSmxIlYbFvFfX6J5aD&q=${ category }&limit=4`
    const response = await fetch( url )
    const { data } = await response.json()

   /*  const data = [
        {
            id: 'abc',
            title: 'Pajarraco',
            images: {
                downsized_medium: {
                    url: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDc2YTFqeXV5anp0Y25kcnl2bHp3ejU1Y21wYnU5emI2M25mYXMzbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3owvKfdNesVOnLOZeE/giphy.gif' 
                }
            }
        }
    ] */

    const gifs = data.map(img => {
        return (
            {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        )
    })
    console.log(gifs)
    return gifs
}
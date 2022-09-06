
import {useCallback, useEffect, useState} from "react";

type Frase = {
    _id: string
    author: string
    content: string
    tags: string[]
    length: number
    authorSlug: string
    dateAdded: Date
    dateModified: Date
}

export const Introduction = () => {

    const [phrase, setPhrase] = useState<Frase>()

    const getApi = useCallback( async () => {
        const result = await (await fetch('https://api.quotable.io/random')).json();
        setPhrase(result);
    },[])

    useEffect(() => {
         getApi();
    }, [getApi])

    return (
        <div>
            <button onClick={Introduction}>Muda de Frase</button>
            <p>{phrase?.content}</p>
            <p>{phrase?.author}</p>


        </div>
    )
}

// export const Button = () => {
//
//     const [frase, setFrase] = useState('')
//     const [count, setCount] = useState(0)
//
//     const getFrase = () => {
//         const randonNum = Math.floor(Math.random() * frases.length)
//         setFrase(frases[randonNum])
//     }
//
//     return (
//         <div>
//             <button onClick={getFrase}>Muda de Frase</button>
//             <p>{frase}</p>
//             <button onClick={() => setCount(count +1)}>ciclou {count} vezes</button>
//         </div>
//     )
// }
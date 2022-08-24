import {frases} from "../../frases";
import {useState} from "react";

export const Button = () => {

    const [frase, setFrase] = useState('')
    const [count, setCount] = useState(0)

    const getFrase = () => {
        const randonNum = Math.floor(Math.random() * frases.length)
        setFrase(frases[randonNum])
    }

    return (
        <div>
            <button onClick={getFrase}>Muda de Frase</button>
            <p>{frase}</p>
            <button onClick={() => setCount(count +1)}>ciclou {count} vezes</button>
        </div>
    )
}
import { useLocation } from "react-router"

export default function Contact() {
    const queryString = useLocation().search

    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get('name')

    return (
        <div>
            <h2>Hey {name}, Contact us here...</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque natus mollitia accusamus praesentium quasi maiores, commodi atque. Minima sapiente odit nihil mollitia illo! Eaque cumque odio eos quam rem vel.</p>
        </div>
    )
}

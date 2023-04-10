
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <p>
                Hiragana-Katakana Trainer
            </p>
            <Link className="App-link" to="/hiragana">Train Hiragana</Link>
            <Link className="App-link" to="/katakana">Train Katakana</Link>
            <Link className="App-link" to="/learn">Learn</Link>
        </div>
    )
}

export default Home
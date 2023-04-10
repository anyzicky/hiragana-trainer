import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import QuizHiragana from './pages/QuizHiragana';
import QuizKatakana from './pages/QuizKatakana';
import Learn from './pages/Learn';

const App = () => {
    return (
        <Router>
            <div className="App">
                
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/hiragana" element={<QuizHiragana/>}></Route>
                    <Route path="/katakana" element={<QuizKatakana/>}></Route>
                    <Route path="/learn" element={<Learn/>}></Route>
                </Routes>
                
            </div>
        </Router>
    );
}

export default App;

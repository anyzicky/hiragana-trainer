import { useEffect, useState } from "react"
import _ from 'lodash'
import hiraganaData from '../data/hiragana.json'
import Result from "../components/Result"
import Quiz from "../components/Quiz"
import { useNavigate } from "react-router-dom"

const QuizHiragana = () => {
 
    const [score, setScore] = useState(0)
    const [progress, setProgress] = useState(0)
    const [questChar, setQuestChar] = useState({})
    const [answerVariants, setAnswerVariants] = useState([])
    const [chars, setChars] = useState([...hiraganaData])
    const [showResult, setShowResult] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        if(chars.length) {
            const char = getRandChar(chars)
            removeChar(char);
            setQuestChar(char)
            setAnswerVariants(_.shuffle([
                char,
                getRandChar(hiraganaData),
                getRandChar(hiraganaData),
                getRandChar(hiraganaData),
            ]));
        }
        
    }, [progress])

    const removeChar = (answer) => {
        setChars(chars.filter(c => c.lang !== answer.lang))
    }

    const getRandChar = (ar) => {
        return ar[Math.floor(Math.random()*ar.length)];
    }

    const selectAnswer = (e) => {
        if(questChar.lang == e.target.value) {
            setScore(score => score + 1)
        }
        setProgress(progress => progress + 1)

        if(progress === hiraganaData.length) {
            setShowResult(true)
        }
    }
    
    const showResultHandler = () => {
        if(showResult === false) {
            setShowResult(true);
        } else {
            navigate('/')
        }
        
    }

    return (
        <div className="container">
            {showResult
                ? <Result score={score} progress={progress} total={hiraganaData.length}/>
                : <Quiz score={score} 
                        progress={progress}
                        answerVariants={answerVariants} 
                        hiraganaData={hiraganaData} 
                        questChar={questChar} 
                        selectAnswer={selectAnswer}
                    />
            }
            <div className="row">
                <div className="one columns offset-by-eight">
                    <button className="btn btn-dark" onClick={showResultHandler}>Exit</button>
                </div>
                <div className="three columns"></div>
            </div>
        </div>
    )
}

export default QuizHiragana
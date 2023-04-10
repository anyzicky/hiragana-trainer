import { useEffect, useState } from "react"
import _ from 'lodash'
import Result from "../components/Result"
import Quiz from "../components/Quiz"
import { useNavigate } from "react-router-dom"

const QuizScreen = (props) => {

    const [score, setScore] = useState(0)
    const [progress, setProgress] = useState(0)
    const [questChar, setQuestChar] = useState({})
    const [answerVariants, setAnswerVariants] = useState([])
    const [chars, setChars] = useState([...props.alphabet])
    const [showResult, setShowResult] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        if(chars.length) {
            const char = getRandChar(chars)
            removeChar(char);
            setQuestChar(char)
            setAnswerVariants(_.shuffle([
                char,
                getRandChar(props.alphabet),
                getRandChar(props.alphabet),
                getRandChar(props.alphabet),
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

        if(progress === props.alphabet.length) {
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
                ? <Result score={score} progress={progress} total={props.alphabet.length}/>
                : <Quiz alphabet={props.alphabet} 
                        score={score} 
                        questChar={questChar}
                        progress={progress} 
                        selectAnswer={selectAnswer} 
                        answerVariants={answerVariants}
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

export default QuizScreen
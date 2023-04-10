import hiraganaData from '../data/hiragana.json'
import QuizScreen from "../components/QuizScreen"

const QuizHiragana = () => {
 
    return (
        <>
            <QuizScreen alphabet={hiraganaData}/>
        </>
    )
}

export default QuizHiragana
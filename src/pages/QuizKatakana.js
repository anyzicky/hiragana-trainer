import katakanaData from '../data/katakana.json'
import QuizScreen from "../components/QuizScreen"

const QuizKatakana = () => {
 
    return (
        <>
            <QuizScreen alphabet={katakanaData}/>
        </>
    )
}

export default QuizKatakana
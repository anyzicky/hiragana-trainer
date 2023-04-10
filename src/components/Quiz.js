import AnswerVariants from "./AnswerVariants"
import QuizChar from "./QuizChar"
import ScorePanel from "./ScorePanel"

const Quiz = (props) => {
    
    return (
        <>
            <ScorePanel score={props.score} progress={props.progress} total={props.alphabet.length}/>
            <QuizChar char={props.questChar.char} />
            <AnswerVariants variants={props.answerVariants} handlerSelect={props.selectAnswer}/>
        </>
    )
}

export default Quiz
const Quiz = (props) => {
    return (
        <>
            <div className="quiz header">
                <div className="row">
                    <div className="col"><span>Correct: {props.score}</span></div>
                    <div className="col"><span>Progress: {props.progress}/{props.hiraganaData.length}</span></div>
                </div>
            </div>
            <div className="quiz body">
                <div className="row">
                    <div className="col">
                        <div className="panel character-display">
                            <h1>{props.questChar.char}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="quiz footer">
                <div className="btn-group" role="group">
                    {props.answerVariants.map((answer, index) =>
                        <label className="btn btn-dark" key={index}>
                            <input type="radio" className="btn-check" name="answer" value={answer.lang} onChange={props.selectAnswer}/>
                            {answer.lang}
                        </label>
                    )}

                </div>
            </div>

        </>
    )
}

export default Quiz
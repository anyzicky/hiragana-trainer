const QuizChar = (props) => {

    return (
        <div className="quiz body">
            <div className="row">
                <div className="col">
                    <div className="panel character-display">
                        <h1>{props.char}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizChar
const ScorePanel = (props) => {

    return (
        <div className="quiz header">
            <div className="row">
                <div className="col"><span>Correct: {props.score}</span></div>
                <div className="col"><span>Progress: {props.progress}/{props.total}</span></div>
            </div>
        </div>
    )
}

export default ScorePanel
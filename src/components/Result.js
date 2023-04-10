
const Result = (props) => {

    const percentScore = Math.ceil((props.score / props.total) * 100)

    return (
        <>
            <div className="row">
                <h1>Quiz Summary</h1>
            </div>
            <div className="row">
                <h4>Total Score: {props.score}/{props.total}</h4>
                <h4>Percentage Score: {percentScore}%</h4>
                <h4>Total Answered: {props.progress}</h4>
                <h4>Total Not Attempted: {props.total - props.progress}</h4>
            </div>
            
        </>
    )
}

export default Result
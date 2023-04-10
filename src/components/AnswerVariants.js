const AnswerVariants = (props) => {
    return (
        <div className="quiz footer">
            <div className="btn-group" role="group">
                {props.variants.map((answer, index) =>
                    <label className="btn btn-dark" key={index}>
                        <input type="radio" className="btn-check" name="answer" value={answer.lang} onChange={props.handlerSelect}/>
                        {answer.lang}
                    </label>
                )}

            </div>
        </div>
    )
}

export default AnswerVariants
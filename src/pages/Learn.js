import { useNavigate } from 'react-router-dom'
import hiraganaData from '../data/hiragana.json'
import katakanaData from '../data/katakana.json'

const Learn = () => {

    const navigate = useNavigate()

    const array_chunk = (ar, chunkSize) => {
        return [].concat.apply([],
            ar.map(function(elem, i) {
              return i % chunkSize ? [] : [ar.slice(i, i + chunkSize)];
            })
        );
    }

    const hiragana = array_chunk(hiraganaData, 5)
    const katakana = array_chunk(katakanaData, 5)

    return (
        <div className="container">
            <div className="btn-group">
                <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#hiragana">Hiragana</button>
                <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#katakana">Katakana</button>
            </div>
            <div className="collapse" id="hiragana">
                <table className="table learn-table">
                    <tbody>
                        {hiragana.map(chunk =>
                            <tr>
                                {chunk.map(char => 
                                    <td>{char.char}<br/>{char.lang}</td>    
                                )}
                            </tr>    
                        )}
                    </tbody>
                </table>
            </div>
            <div className="collapse" id="katakana">
                <table className="table learn-table">
                    <tbody>
                        {katakana.map(chunk =>
                            <tr>
                                {chunk.map(char => 
                                    <td>{char.char}<br/>{char.lang}</td>    
                                )}
                            </tr>    
                        )}
                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="one columns offset-by-eight">
                    <button className="btn btn-dark" onClick={() => {navigate('/')}}>Exit</button>
                </div>
                <div className="three columns"></div>
            </div>
        </div>
    )
}

export default Learn
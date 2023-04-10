import hiraganaData from '../data/hiragana.json'

const Learn = () => {

    const array_chunk = (ar, chunkSize) => {
        return [].concat.apply([],
            ar.map(function(elem, i) {
              return i % chunkSize ? [] : [ar.slice(i, i + chunkSize)];
            })
        );
    }

    const hiragana = array_chunk(hiraganaData, 5)

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
                        <tr>
                            <td>ア<br />a</td>
                            <td>カ<br />ka</td>
                            <td>サ<br />sa</td>
                            <td>タ<br />ta</td>
                            <td>ナ<br />na</td>
                            <td>ハ<br />ha</td>
                            <td>マ<br />ma</td>
                            <td>ヤ<br />ya</td>
                            <td>ラ<br />ra</td>
                            <td>ワ<br />wa</td>
                            <td></td>
                            <td>ガ<br />ga</td>
                            <td>ザ<br />za</td>
                            <td>ダ<br />da</td>
                            <td>バ<br />ba</td>
                            <td>パ<br />pa</td>
                        </tr>
                        <tr>
                            <td>イ<br />i</td>
                            <td>キ<br />ki</td>
                            <td>シ<br />shi</td>
                            <td>チ<br />chi</td>
                            <td>ニ<br />ni</td>
                            <td>ヒ<br />hi</td>
                            <td>ミ<br />mi</td>
                            <td></td>
                            <td>リ<br />ri</td>
                            <td></td>
                            <td></td>
                            <td>ギ<br />gi</td>
                            <td>ジ<br />ji</td>
                            <td>ヂ<br />ji</td>
                            <td>ビ<br />bi</td>
                            <td>ピ<br />pi</td>
                        </tr>
                        <tr>
                            <td>ウ<br />u</td>
                            <td>ク<br />ku</td>
                            <td>ス<br />su</td>
                            <td>ツ<br />tsu</td>
                            <td>ヌ<br />nu</td>
                            <td>フ<br />fu</td>
                            <td>ム<br />mu</td>
                            <td>ユ<br />yu</td>
                            <td>ル<br />ru</td>
                            <td></td>
                            <td></td>
                            <td>グ<br />gu</td>
                            <td>ズ<br />zu</td>
                            <td>ヅ<br />zu</td>
                            <td>ブ<br />bu</td>
                            <td>プ<br />pu</td>
                        </tr>
                        <tr>
                            <td>エ<br />e</td>
                            <td>ケ<br />ke</td>
                            <td>セ<br />se</td>
                            <td>テ<br />te</td>
                            <td>ネ<br />ne</td>
                            <td>ヘ<br />he</td>
                            <td>メ<br />me</td>
                            <td></td>
                            <td>レ<br />re</td>
                            <td></td>
                            <td></td>
                            <td>ゲ<br />ge</td>
                            <td>ゼ<br />ze</td>
                            <td>デ<br />de</td>
                            <td>ベ<br />be</td>
                            <td>ペ<br />pe</td>
                        </tr>
                        <tr>
                            <td>オ<br />o</td>
                            <td>コ<br />ko</td>
                            <td>ソ<br />so</td>
                            <td>ト<br />to</td>
                            <td>ノ<br />no</td>
                            <td>ホ<br />ho</td>
                            <td>モ<br />mo</td>
                            <td>ヨ<br />yo</td>
                            <td>ロ<br />ro</td>
                            <td>ヲ<br />o</td>
                            <td>ン<br />n</td>
                            <td>ゴ<br />go</td>
                            <td>ゾ<br />zo</td>
                            <td>ド<br />do</td>
                            <td>ボ<br />bo</td>
                            <td>ポ<br />po</td>
                        </tr>
                        <tr>
                            <td>キャ<br />kya</td>
                            <td>シャ<br />sha</td>
                            <td>チャ<br />cha</td>
                            <td>ニャ<br />nya</td>
                            <td>ヒャ<br />hya</td>
                            <td>ミャ<br />mya</td>
                            <td>リャ<br />rya</td>
                            <td>ギャ<br />gya</td>
                            <td>ジャ<br />ja</td>
                            <td>ヂャ<br />ja</td>
                            <td>ビャ<br />bya</td>
                            <td>ピャ<br />pya</td>
                        </tr>
                        <tr>
                            <td>キュ<br />kyu</td>
                            <td>シュ<br />shu</td>
                            <td>チュ<br />chu</td>
                            <td>ニュ<br />nyu</td>
                            <td>ヒュ<br />hyu</td>
                            <td>ミュ<br />myu</td>
                            <td>リュ<br />ryu</td>
                            <td>ギュ<br />gyu</td>
                            <td>ジュ<br />ju</td>
                            <td>ヂュ<br />ju</td>
                            <td>ビュ<br />byu</td>
                            <td>ピュ<br />pyu</td>
                        </tr>
                        <tr>
                            <td>キョ<br />kyo</td>
                            <td>ショ<br />sho</td>
                            <td>チョ<br />cho</td>
                            <td>ニョ<br />nyo</td>
                            <td>ヒョ<br />hyo</td>
                            <td>ミョ<br />myo</td>
                            <td>リョ<br />ryo</td>
                            <td>ギョ<br />gyo</td>
                            <td>ジョ<br />jo</td>
                            <td>ヂョ<br />jo</td>
                            <td>ビョ<br />byo</td>
                            <td>ピョ<br />pyo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Learn
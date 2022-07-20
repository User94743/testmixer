import React, {useEffect, useState} from "react";
import style from "./main.module.css"
import { FaRegFileAlt, FaFileDownload, FaRandom } from "react-icons/fa";
import {GiPerspectiveDiceSixFacesRandom} from "react-icons/gi";
const Main = (props) => {


    let [langDescription, setLangDescription] = useState(props.currentDescription)
    let [disable, setDisable] = useState(true)
    let [result, setResult] = useState('');
    let files = [];
    let [mainArray, setMainArray] = useState([]);
    let [countItems, setCountItems] = useState(0);
    let [resultArray, setResultArray] = useState([]);
    let [nameFileDownload, setNameFileDownload] = useState('');
    let [beforeText, setBeforeText] = useState('');
    let [afterText, setAfterText] = useState('');


    useEffect(() => {
        setLangDescription(props.currentDescription)
    }, [props.currentDescription])

    const onFiles = (e) => {
        let tempArrayOnFile = [];
        setMainArray([]);
        setCountItems(0);

        files = e.target.files;

        if (files.length > 0) {
            setDisable(false);
        }

        for (let i = 0; i < files.length; i++) {
            let reader = new FileReader();
            reader.readAsText(files[i]);

            reader.onload = function () {
                let res = reader.result.split('\r');
                let tempArray = new Array();
                for (let j = 0; j < res.length; j++)  {
                    if (res[j].trim() !== '') {
                        tempArray.push(res[j].replace(/(\r\n|\n|\r)/gm,""));
                        setCountItems(countItems += 1);
                    }
                    console.log(reader.load);
                }
                tempArrayOnFile.push(tempArray)
                setMainArray(tempArrayOnFile)
            };

            reader.onerror = function () {
                console.log(reader.result);
            };

        }

    }

    // ADDING

    let onAddText = () => {

        let tempArrayAddText = [];
        for (let b = 0; b < resultArray.length; b++) {
            tempArrayAddText[b] = beforeText + resultArray[b] + afterText;
        }
        console.log(tempArrayAddText)
        setResult(tempArrayAddText.join('\n'));
    }

    // RESET

    let onReset = () => {
        setResult(resultArray.join('\n'));
        setBeforeText('');
        setAfterText('');
    }

   // LOADING

    const onLoadInTurn = () => {

        let tempOnLoadArray = [];

        console.log(mainArray)
        console.log(countItems)

        for (let p = 0; p < countItems; p++) {
            for (let h = 0; h < mainArray.length; h++) {
                if (mainArray[h][p] !== undefined) {
                    tempOnLoadArray.push(mainArray[h][p])
                }
            }
        }

        setResultArray(tempOnLoadArray);
        let tempRes = tempOnLoadArray.join('\n');
        setResult(tempRes);

        console.log(tempRes);
    }

    const onLoadRandom = () => {

        let tempOnLoadRandomArray = [];

        console.log(mainArray)
        console.log(countItems)

        for (let h = 0; h < mainArray.length; h++) {

            for (let p = 0; p < countItems; p++) {
                if (mainArray[h][p] !== undefined) {
                    tempOnLoadRandomArray.push(mainArray[h][p])
                }
            }
        }

        tempOnLoadRandomArray = tempOnLoadRandomArray.sort(() => Math.random() - 0.5);

        setResultArray(tempOnLoadRandomArray);
        let tempRes = tempOnLoadRandomArray.join('\n');
        setResult(tempRes);

        console.log(tempRes);
    }

    // DOWNLOAD

    const onDownload = () => {

        function download(filename, result) {
            filename = filename === '' ? 'result.txt' : filename + '.txt';
            let element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(result));
            element.setAttribute('download', filename);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }

        download(nameFileDownload, result);

    }

    return (
        <div className="container-lg center">

                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <input onChange={onFiles} name="file" type="file" name="file" id="inputFile" className={style.inputFileStyle} multiple />
                            <label htmlFor="inputFile" className={style.inputFileButton}>
                                <FaRegFileAlt className={style.inputFileIconWrapper} />
                                <span className={style.inputFileButtonText}>{langDescription.buttons.selectFiles}</span>
                            </label>
                        </div>
                        <div className="col-sm">
                            <button disabled={disable} onClick={onLoadInTurn} type="submit" className={disable ? style.inputFileButtonDisable : style.inputFileButton}>
                                <FaRandom className={style.inputFileIconWrapper} />
                                <span>{langDescription.buttons.loadFiles}</span>
                            </button>
                        </div>
                        <div className="col-sm">
                            <button disabled={disable} onClick={onLoadRandom} type="submit" className={disable ? style.inputFileButtonDisable : style.inputFileButton}>
                                <GiPerspectiveDiceSixFacesRandom className={style.inputFileIconWrapper} />
                                <span>{langDescription.buttons.loadRandom}</span>
                            </button>
                        </div>
                    </div>
                </div>

                <br />

            <h3>{langDescription.form.rowsCount + countItems}</h3>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">{langDescription.form.textBefore}</label>
                <input onChange={(e) => {setBeforeText(e.target.value)}} value={beforeText}
                       type="email" className="form-control" id="exampleFormControlInput1" />
                <label htmlFor="exampleFormControlInput2" className="form-label">{langDescription.form.textAfter}</label>
                <input onChange={(e) => {setAfterText(e.target.value)}} value={afterText}
                       type="email" className="form-control" id="exampleFormControlInput2" />
                <div className="mb-3">
                    <br />
                    <div className={style.rowsButton}>
                        <button onClick={onAddText} type="button" className="btn btn-outline-dark">{langDescription.buttons.add}</button>
                        <button onClick={onReset} type="button" className="btn btn-outline-dark">{langDescription.buttons.reset}</button>
                    </div>

                </div>

                <label htmlFor="exampleFormControlInput3" className="form-label">{langDescription.form.nameResultFile}</label>
                <input onChange={(e) => {setNameFileDownload(e.target.value)}}
                type="email" className="form-control" id="exampleFormControlInput3" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{langDescription.form.result}</label>
                <textarea onChange={(e) => {setResult(e.target.value)}}
                className="form-control" value={result} id="exampleFormControlTextarea1" rows="7" />
            </div>

                <br />

                <button disabled={disable} onClick={onDownload} type="submit" className={disable ? style.inputFileButtonDisable : style.inputFileButton}>
                    <FaFileDownload className={style.inputFileIconWrapper} />
                    <span>{langDescription.buttons.downloadFiles}</span>
                </button>

        </div>
    )
}

export default Main;
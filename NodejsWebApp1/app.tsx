declare var require: any



var React = require('react');
var ReactDOM = require('react-dom');



//------------------------------------------------------------
//
//  プログレスバー処理
//
//------------------------------------------------------------
//プログレスバー用npm読込
import styled from "styled-components"
//プログレスバーコンテナスタイル定義
const BarContainer = styled.div`
    width : 500px;
    position : relative;
    height : 20px;
    background: lightgray;
`
//プログレスバーゲージスタイル定義
const BarInnter = styled.div`
    display : block;
    position : relative;
    overflow : hidden;
    height : 100%
    width : 0;
    background-color : darkslateblue;
`
//コンポ―ネント
const Bar = ({ width }) => {
    return (
        < BarContainer >
            <BarInnter style={{ width: `${width}%` }} />
        </BarContainer >
    )
}

//アニメーション用ライブラリ読込
import { Motion, spring } from "react-motion"

export class ProgressBar extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { progress } = nextProps
        return !isNaN(parseInt(progress, 10))//不正な値が来たらスルーする。
    }
    render() {
        const progress = parseInt(this.props.progress, 10)
        return <Motion defaultStyle={{ p: 0 }} style={{ p: spring(progress, { stiffness: 400, damping: 5 }) }}>{
            (value) => {
                return <div>
                    <div>{Math.ceil(value.p)}%</div>
                    <Bar width={value.p} />
                </div>
            }}</Motion>
    }
}

//var ScreenManager = require('./view/page/screenManager');
//
export class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stepNumber: 0,

        };
    }
    render() {
        //var _this = this;
        //return ScreenManager.render();
        //switch (this.state.stepNumber) {
        //    default:
        //    case 0: return <button className="redSquare"    onClick={() => _this.setState({ stepNumber: 1 })} />;
        //    case 1: return <button className="blueSquare"   onClick={() => _this.setState({ stepNumber: 2 })} />;
        //    case 2: return <button className="yellowSquare" onClick={() => _this.setState({ stepNumber: 0 })} />;
        //}

        return <button className={getSquareStyle(this.state.stepNumber)} onClick={getClickEvent(this.state.stepNumber, this)}/>
    }
}
function getSquareStyle(stepNumber) {
    switch (stepNumber) {
        default:
        case 0: return "redSquare";
        case 1: return "blueSquare";
        case 2: return "yellowSquare";
    }
}
function getClickEvent(stepNumber, mainPage) {
    switch (stepNumber) {
        default:
        case 0: return () => mainPage.setState({ stepNumber: 1 });
        case 1: return () => mainPage.setState({ stepNumber: 2 });
        case 2: return () => mainPage.setState({ stepNumber: 0 });
    }
}

ReactDOM.render(<MainPage />, document.getElementById('root'));
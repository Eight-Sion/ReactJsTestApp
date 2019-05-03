declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
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
        var _this = this;
        //return ScreenManager.render();
        switch (this.state.stepNumber) {
            default:
            case 0: return <button className="redSquare"    onClick={() => _this.setState({ stepNumber: 1 })} />;
            case 1: return <button className="blueSquare"   onClick={() => _this.setState({ stepNumber: 2 })} />;
            case 2: return <button className="yellowSquare" onClick={() => _this.setState({ stepNumber: 0 })} />;
        }
    }
}

ReactDOM.render(<MainPage />, document.getElementById('root'));
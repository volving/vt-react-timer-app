var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
    render() {
        var isCounting = Boolean(this.state.isCounting);
        return (
            <Clock name="timer" title="Timer" totalTime={this.state.totalTime}>
                <div className="controllers">

                    {isCounting
                        ? <div className="small-12 medium-4 columns">
                            <button className="success button expanded disabled">Start</button>
                            <button className="alert button expanded" onClick={this.handleClear}>Clear</button>
                        </div>
                        : <div className="small-12 medium-4 columns">
                            <button className="success button expanded " onClick={this.handleStart}>Start</button>
                            <button className="alert button expanded disabled">Clear</button>

                        </div>}
                </div>
            </Clock>
        );
    },
    getInitialState() {
        var total = this.props.totalTime;
        total = total < 0
            ? 0
            : total;
        return {totalTime: total, isCounting: false};
    },
    getDefaultProps() {
        return {totalTime: 0};
    },
    handleStart() {
        if (this.state.isCounting) {
            return;
        }
        var interval = setInterval(() => {
            var tt = this.state.totalTime || 0;
            this.setState({
                totalTime: 1 + tt
            });
        }, 1000);
        this.setState({isCounting: interval});
    },
    handleClear() {
        var ic = this.state.isCounting;
        if (ic) {
            clearInterval(ic);
            this.setState({isCounting: false, totalTime: 0});
        }
        return;
    }
});
module.exports = Timer;

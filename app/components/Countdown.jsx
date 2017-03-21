var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
    render() {
        var isCounting = Boolean(this.state.isCounting);
        return (
            <Clock name="countdown" title="Countdown" totalTime={this.state.totalTime}>
                <div className="controllers">
                    <div className="small-12 medium-4 columns">
                        <input ref="cdTotal" type="number" placeholder="Numbers only" onChange={this.handleChange} onFocus={this.handleFocus('cdTotal')}/>
                    </div>

                    {isCounting
                        ? <div className="small-12 medium-4 columns">
                            <button className="button expanded success disabled">Countdown</button>
                            <button className="button expanded alert" onClick={this.handleClear}>Clear</button>
                        </div>
                        : <div className="small-12 medium-4 columns">
                            <button className={this.state.totalTime > 0
                                ? 'button expanded success'
                                : 'button expanded success disabled'} onClick={this.handleStart}>Countdown</button>
                            <button className="button expanded alert disabled">Clear</button>
                        </div>}
                </div>
            </Clock>
        );
    },
    getDefaultProps() {
        return {totalTime: 0};
    },
    getInitialState() {
        var total = this.props.totalTime;
        total = total > 0
            ? total
            : 0;
        return {totalTime: total, isCounting: false};
    },
    handleChange(e) {
        var val = parseInt(e.target.value || 0);
        if (val > 0) {
            this.setState({totalTime: val});
        }
    },
    handleFocus(ref){
        return () => {
            this.refs[ref].select();
        };
    },
    handleStart() {
        var ic = this.state.isCounting;
        if (ic) {
            return;
        } else {
            this.refs.cdTotal.value = 0;
            var tt = this.state.totalTime;
            ic = setInterval(() => {
                tt = this.state.totalTime;
                if (--tt > 0) {
                    this.setState({totalTime: tt});
                } else {
                    this.setState({isCounting: false});
                    clearInterval(ic);
                }
            }, 1000);

            this.setState({isCounting: ic});

        }

    },
    handleClear() {
        var ic = this.state.isCounting;
        if (ic) {
            clearInterval(ic);
            this.setState({isCounting: false, totalTime: 0});
        }
    }
});

module.exports = Countdown;

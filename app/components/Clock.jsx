var React = require('react');

module.exports = (props) => {
    function formatTime(total) {
        function prefixZero(val) {
            if (val < 10) {
                return `0${val}`;
            } else {
                return val;
            }
        }
        if (!isNaN(total) && typeof total === 'number' && total > 0) {
            total = parseInt(total);
            var min = prefixZero(parseInt(total / 60));
            var sec = prefixZero(total % 60);
            return `${min} : ${sec}`;
            // return min + ' : ' + sec;
        } else {
            return '00 : 00';
        }
    }
    return (
        <div className={props.name}>
            <h1>{props.title}</h1>
            <div className="clock">
                {formatTime(props.totalTime)}
            </div>
            {props.children}
        </div>
    );
};

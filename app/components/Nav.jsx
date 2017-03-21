var React = require('react');
var {IndexLink, Link} = require('react-router');

var Nav = React.createClass({
    render() {
        return (
            <div className="nav top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li>
                            <IndexLink to="/">Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/countdown">Count Down</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li>
                            Created by <a href="//vno.io" target="_blank">VNO</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;

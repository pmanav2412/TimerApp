var React = require('react');

var Clock =React.createClass({

    getDefaultProps: function(){
        totalSeconds: 0;
    },

    propTypes:{
        totalSeconds: React.PropTypes.number
    },

    formateSeconds: function(totalSeconds){
        var seconds = totalSeconds % 60;
        var minutes = totalSeconds / 60;

        if (seconds < 10){
            seconds = '0' + seconds;
        }

        
        if (minutes < 10){
            minutes = '0' + minutes;
        }        
        return Math.floor(minutes) + ':' + Math.floor(seconds);
    },

    render: function(){
        var {totalSeconds} = this.props;
        return(
            <div className="clock">
                    <span className="clock-text">
                        {this.formateSeconds(100)}
                    </span>
            </div>
        );
    }
});

module.exports = Clock;
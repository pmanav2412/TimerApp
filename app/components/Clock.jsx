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
        console.log(seconds < 10);
        console.log(seconds);
        debugger;

        
        if (minutes < 10){
            minutes = '0' + minutes;
        } 
        console.log(minutes < 10);
        debugger;
        console.log(Math.floor(minutes) + ':' + Math.floor(seconds));
        debugger;

        return Math.floor(minutes) + ':' + Math.floor(seconds);
    },

    render: function(){
        var {totalSeconds} = this.props;
        
        debugger;
        console.log("total sexconds = "+ totalSeconds);
        return(
            <div className="clock">
                    <span className="clock-text">
                        {this.formateSeconds(totalSeconds)}
                    </span>
            </div>
        );
    }
});

module.exports = Clock;
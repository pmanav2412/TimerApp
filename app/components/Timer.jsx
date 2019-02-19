var React = require('react');
var Clock = require('Clock');
var Timer = React.createClass({


    render: function(){
        return(
            <div>
                  <h4>Timer.jsx</h4>
                  <Clock totalSeconds={129}/>

            </div>
          
        )
    }
});

module.exports= Timer;
var React = require('react');


//<-------------------------------------------------------------->

var Navigation = React.createClass({

////////////

    render: function(){

        return(
            <div className="top-bar">
                     <div className="top-bar-left">
                            <ul className="menu">
                                <li className="menu-text">React Timer Application</li>
                                <li><a href="#">Two</a></li>
                                <li><a href="#">Three</a></li>
                             </ul>
                     </div> 
                        <div className="top-bar-right">
                            <ul className="menu">
                         <li className="menu-text">Created By <a href="www.google.com">Manav</a></li>
                    </ul>
           
                </div> 
            </div>
    )
    }
        
})

    

module.exports = Navigation;


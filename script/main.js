/**
 * Created by tati on 05.03.16.
 */
var PlayerField = React.createClass({
    render: function(){
        var arr = [];
        for (var i = 0; i < 4; i++){
            arr[i] = <div className="circle" key={i}></div>;
        }
        return (
            <div>
                {arr}
            </div>
        );
    }
});

var HintField = React.createClass({
    render: function(){
        return (
            <div className="hint">
                <div>
                    <div className="little-circle"></div>
                    <div className="little-circle"></div>
                </div>
                <div>
                    <div className="little-circle"></div>
                    <div className="little-circle"></div>
                </div>
            </div>
        );
    }
});

var Row = React.createClass({
    render: function(){
        return (
            <div className="row">
                <PlayerField />
                <HintField />
            </div>
        );
    }
});

var Game = React.createClass({
    render: function(){
    return(
        <div>
            <Row />
        </div>
    );
}
});

ReactDOM.render(<Game />, document.getElementById('gamefield'));
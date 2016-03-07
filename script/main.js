/**
 * Created by tati on 05.03.16.
 */

var ColorPicker = React.createClass({
    render: function (){
        return (
            <div className="color-picker">
                <div color="0"></div>
                <div color="1"></div>
                <div color="2"></div>
                <div color="3"></div>
                <div color="4"></div>
                <div color="5"></div>
            </div>
        );
    }
});

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
                <div className="little-circle"></div>
                <div className="little-circle"></div>
                <div className="little-circle"></div>
                <div className="little-circle"></div>
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
        var rows = [];
        for (var i = 0; i < 12; i++){
            rows.push(<Row key={i}/>);
        }
        return (
            <div>
                {rows}
                <ColorPicker />
            </div>

        );
}
});

ReactDOM.render(<Game />, document.getElementById('gamefield'));
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './style.less';
import CircularNavigation from '../src';
import _ from 'lodash';

const oneData = [1, 2, 3, 4];


window.document.body.addEventListener('click', e => {
    console.log(e.target);
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeOne: true
        };
    }

    handleChange = () => {
        this.setState({
            activeOne: !this.state.activeOne
        });
    };

    handleClick = (type, i) => {
        console.log(type, i);
    };

    render() {
        const {activeOne} = this.state;

        return (
            <div>
                <CircularNavigation
                    active={activeOne}
                    onChange={this.handleChange}
                    style={{
                        position: 'fixed',
                        top: '400px',
                        left: '400px'
                    }}
                    sectors={_.map(oneData, (v, i) => (
                        <div style={{color: 'white'}}
                             onClick={this.handleClick.bind(this, 'one', i)}
                        >{v}</div>
                    ))}
                >
                    <button style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'white',
                        borderRadius: '50%'
                    }}>C
                    </button>
                </CircularNavigation>

                <CircularNavigation
                    active={activeOne}
                    onChange={this.handleChange}
                    style={{
                        position: 'fixed',
                        top: '400px',
                        left: '400px'
                    }}
                    size={150}
                    rotate={20}
                    skew={70}
                    percentage={'52%'}
                    sectors={_.map(oneData, (v, i) => (
                        <div style={{color: 'white'}}
                             onClick={this.handleClick.bind(this, 'one', i)}
                        >{v}</div>
                    ))}
                >
                    <button style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'white',
                        borderRadius: '50%'
                    }}>C
                    </button>
                </CircularNavigation>
            </div>
        );
    }
}

ReactDOM.render(<App/>, window.document.getElementById('appContainer'));

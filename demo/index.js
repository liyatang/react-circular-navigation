import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './style.less';
import CircularNavigation from '../src';

class App extends React.Component {
    render() {
        return (
            <div>
                <CircularNavigation
                    style={{
                        position: 'fixed',
                        top: '400px',
                        left: '400px'
                    }}
                    sectors={[
                        <div style={{color: 'white'}}>1</div>,
                        <div style={{color: 'white'}}>2</div>,
                        <div style={{color: 'white'}}>3</div>,
                        <div style={{color: 'white'}}>4</div>
                    ]}
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

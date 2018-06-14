import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';
import _ from 'lodash';

class CircularNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
    };

    render() {
        const {
            size,
            sectors,
            rotate,
            skew,
            percentage,
            time,
            className,
            children,
            ...rest
        } = this.props;
        const {open} = this.state;

        let transform = `rotate(0deg) skew(${skew}deg)`;
        const transition = `all ${time} ease`;
        const transitionDelay = transition + ` ${time}`;

        return (
            <div {...rest} className={classNames("react-circular-navigation", className, {
                active: open
            })}>
                <div className="react-circular-navigation-btn">
                    <div onClick={this.handleClick} style={{
                        marginTop: '-50%',
                        marginLeft: '-50%'
                    }}>{children}</div>
                </div>
                <div className={classNames("react-circular-navigation-wrapper", {
                    'opened-nav': open
                })} style={{
                    transition: open ? transition : transitionDelay
                }}>
                    <ul>
                        {_.map(sectors, (sector, i) => (
                            <li key={i} style={{
                                width: size + 'px',
                                height: size + 'px',
                                left: -size + 'px',
                                top: -size + 'px',
                                transition: open ? transitionDelay : transition,
                                transform: open ? `rotate(${i * rotate + i * 2}deg) skew(${skew}deg)` : transform
                            }}>
                                <div style={{
                                    width: 2 * size + 'px',
                                    height: 2 * size + 'px',
                                    right: -size + 'px',
                                    bottom: -size + 'px',
                                    background: `radial-gradient(transparent ${percentage}, black ${percentage})`,
                                    transform: `skew(-${skew}deg) rotate(-${90 - rotate / 2}deg) scale(1)`
                                }}>{sector}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

CircularNavigation.propTypes = {
    size: PropTypes.number.isRequired,
    sectors: PropTypes.array.isRequired,
    rotate: PropTypes.number,
    skew: PropTypes.number,
    percentage: PropTypes.string,
    time: PropTypes.string
};

CircularNavigation.defaultProps = {
    size: 100,
    rotate: 30,
    skew: 60,
    percentage: '45%',
    time: '0.3s'
};

export default CircularNavigation;
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';
import _ from 'lodash';

class CircularNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    handleClick = (sector, i) => {
        this.setState({
            activeIndex: i
        });

        this.props.onClick(sector, i);
    };

    handleChange = () => {
        this.setState({
            activeIndex: 0
        });
        this.props.onChange();
    };

    render() {
        const {
            active,
            size,
            sectors,
            rotate,
            skew,
            percentage,
            time,
            sectorBackgroundColor,
            className,
            children,
            onClick, // eslint-disable-line
            ...rest
        } = this.props;
        const {
            activeIndex
        } = this.state;

        let transform = `rotate(0deg) skew(${skew}deg)`;
        const transition = `all ${time} ease`;
        const transitionDelay = transition + ` ${time}`;

        return (
            <div {...rest} className={classNames("react-circular-navigation", className, {
                active
            })}>

                <div className="react-circular-navigation-btn">
                    <div onClick={this.handleChange} style={{
                        marginTop: '-50%',
                        marginLeft: '-50%'
                    }}>{children}</div>
                </div>
                <div style={{
                    position: 'absolute',
                    width: 2 * size + 'px',
                    height: 2 * size + 'px',
                    marginTop: -size + 'px',
                    marginLeft: -size + 'px',
                    borderRadius: '50%',
                    overflow: 'hidden'
                }}>
                    <div className={classNames("react-circular-navigation-wrapper")} style={{
                        transition: active ? transition : transitionDelay,
                        position: 'absolute',
                        top: size + 'px',
                        left: size + 'px'
                    }}>
                        <ul>
                            {_.map(sectors, (sector, i) => (
                                <li key={i} style={{
                                    width: size + 'px',
                                    height: size + 'px',
                                    left: -size + 'px',
                                    top: -size + 'px',
                                    transition: active ? transitionDelay : transition,
                                    transform: active ? `rotate(${(i - activeIndex) * rotate + (i - activeIndex) * 2}deg) skew(${skew}deg)` : transform
                                }}>
                                    <div
                                        style={{
                                            width: 2 * size + 'px',
                                            height: 2 * size + 'px',
                                            right: -size + 'px',
                                            bottom: -size + 'px',
                                            background: `radial-gradient(transparent ${percentage}, ${sectorBackgroundColor} ${percentage})`,
                                            transform: `skew(-${skew}deg) rotate(-${90 - rotate / 2}deg) scale(1)`
                                        }}
                                        onClick={this.handleClick.bind(this, sector, i)}
                                    >{sector}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

CircularNavigation.propTypes = {
    active: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
    sectors: PropTypes.array.isRequired,
    sectorBackgroundColor: PropTypes.string,
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
    sectorBackgroundColor: 'black',
    time: '0.3s'
};

export default CircularNavigation;
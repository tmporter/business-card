import React from 'react';
import styled, { keyframes } from 'styled-components';

class TextScroller extends React.Component {
    state = {
        currentItem: 0,
        intervalId: ''
    }

    componentDidMount() {
        const { speed, children } = this.props;

        const intervalId = setInterval(() => {
            const { currentItem } = this.state;
            const itemCount = children.length;
            this.setState({ currentItem: (currentItem + 1) % itemCount })
        }, speed || 2000);

        this.setState({ intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        const { currentItem } = this.state;
        const { children } = this.props;

        return (
            <TextScrollerStyle>
                <TextScrollerInnerStyle top={-50 * currentItem}>
                    {children.map((child, i) => (
                        <TextScrollerItem key={i}>
                            {child}
                        </TextScrollerItem>
                    ))}
                </TextScrollerInnerStyle>
            </TextScrollerStyle>
        );
    }
}

TextScroller.defaultProps = {
    height: 30
}

const TextScrollerInnerStyle = styled.div`
    padding: 0;
    transition: top 0.5s;
    position: relative;
    top: ${props => props.top}px;
    left: 0;
    text-align: center;
`;

const TextScrollerItem = styled.div`
    height: 50px;
    opacity: 0.7;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid orange; */
`;

const TextScrollerStyle = styled.div`
    overflow: hidden;
    /* border: 1px solid red; */
    vertical-align: bottom;
    height: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    width: 200px;
`;

export default TextScroller;
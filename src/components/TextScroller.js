import React from 'react';
import styled from 'styled-components';

class TextScroller extends React.Component {
    state = {
        currentItem: 0,
        intervalId: ''
    }

    componentDidMount() {
        const { scrollSpeed } = this.props;

        const intervalId = setInterval(() => {
            const { currentItem } = this.state;
            const itemCount = this.props.items.length;
            this.setState({ currentItem: (currentItem + 1) % itemCount })
        }, scrollSpeed || 2000);

        this.setState({ intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        const { currentItem } = this.state;
        const { height, items } = this.props;

        return (
            <TextScrollerStyle height={height}>
                <TextScrollerInnerStyle marginTop={-1 * height * currentItem}>
                    {items.map((item, i) => (
                        <TextScrollerItem key={i}>{item}</TextScrollerItem>
                    ))}
                </TextScrollerInnerStyle>
            </TextScrollerStyle>
        );
    }
}

const TextScrollerInnerStyle = styled.div`
    transition: margin-top 0.5s;
    text-align: center;
    margin-top: ${props => props.marginTop}px;
`;

const TextScrollerStyle = styled.div`
    box-sizing: border-box;
    overflow: hidden;
    text-align: left;
    vertical-align: bottom;
    height: ${props => props.height}px;
`;

const TextScrollerItem = styled.span`
    display: block;
`;

export default TextScroller;
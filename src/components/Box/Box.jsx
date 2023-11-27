import React, { forwardRef } from 'react';
import styled, {css} from "styled-components";

const formatCssSizeValue = value => {
    if (typeof value === 'number') {
        return `${value}px`;
    }
    return value;
};

const BoxWrapper = styled.div(({theme, width, height, ...props}) => {

   return css`
        background: ${theme.ui.wrapper.bg};
        width: ${formatCssSizeValue(width)};
        height: ${formatCssSizeValue(height)};
   `
})

const Box = forwardRef(({ width, height, children, as, ...props }, ref) => {
    const validElements = ['div', 'section', 'aside'];
    const wrapper = as && validElements.includes(as) ? as : 'div';

    return (
    <BoxWrapper 
        ref={ref} 
        width={width} 
        height={height}
        as={wrapper}
        {...props}
    >
        {children}
    </BoxWrapper>
    )
})

export {Box}
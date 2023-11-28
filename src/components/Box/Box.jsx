import React, { forwardRef } from 'react';
import styled, {css} from "styled-components";

const formatCssSizeValue = value => {
    if (typeof value === 'number') {
        return `${value}px`;
    }
    return value;
};

const BoxWrapper = styled.div(({theme, width, height, boxShadow}) => {

   return css`
        background: ${theme.ui.wrapper.bg};
        width: ${formatCssSizeValue(width)};
        height: ${formatCssSizeValue(height)};

        ${boxShadow && theme.ui.shadows[boxShadow]
           ? `box-shadow: ${theme.ui.shadows[boxShadow]};`
           : 'box-shadow: none;'
    }
`})

const Box = forwardRef(({ width, height, children, as, boxShadow, ...BoxProps }, ref) => {
    const validElements = ['div', 'section', 'aside'];
    const wrapper = as && validElements.includes(as) ? as : 'div';

    return (
    <BoxWrapper 
        ref={ref} 
        width={width} 
        height={height}
        boxShadow={boxShadow}
        as={wrapper}
        {...BoxProps}
    >
        {children}
    </BoxWrapper>
    )
})

export {Box}
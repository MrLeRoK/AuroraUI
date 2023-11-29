import styled, { css } from "styled-components";

export const formatCssSizeValue = (value) => {
    if (typeof value === "number") {
        return `${value}px`;
    }
    return value;
};

export const BoxWrapper = styled.div(({ theme, width, height, boxshadow, bgColor }) => {

    return css`
    position: relative;
    background: ${bgColor};
    width: ${formatCssSizeValue(width)};
    height: ${formatCssSizeValue(height)};
    

    ${boxshadow && theme.ui.shadows[boxshadow]
            ? `box-shadow: ${theme.ui.shadows[boxshadow]};`
            : "box-shadow: none;"}
  `;
});
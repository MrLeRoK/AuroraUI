import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

const formatCssSizeValue = (value) => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
};

const BoxWrapper = styled.div(({ theme, width, height, boxshadow, bgColor}) => {

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

const Box = forwardRef(
  ({ className, width, height, children, as, boxshadow, bgColor, ...BoxProps }, ref) => {
    const validElements = ["div", "section", "aside"];
    const wrapper = as && validElements.includes(as) ? as : "div";

    return (
      <StyleSheetManager
        shouldForwardProp={(propName) =>
          isPropValid(propName) && propName !== "boxshadow"
        }
      >
        <BoxWrapper
          ref={ref}
          bgColor={bgColor}
          className={className}
          width={width}
          height={height}
          boxshadow={boxshadow}
          as={wrapper}
          {...BoxProps}
        >
          {children}
        </BoxWrapper>
      </StyleSheetManager>
    );
  },
);

export { Box };

import React, { forwardRef } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { BoxWrapper } from "./Box.styles";

const Box = forwardRef(
  ({ className, width, height, children, as, boxshadow, bgColor="#ffff", ...BoxProps }, ref) => {
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

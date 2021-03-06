import * as React from "react";
import { Point } from "./types/Point";
import { ElementProps } from "./types/ElementProps";

export type PositionAbsoluteProps = {
    position: Point;
    boxRef?: React.Ref<HTMLDivElement>;
} & ElementProps<HTMLDivElement>;

export const PositionAbsolute: React.SFC<PositionAbsoluteProps> = props => {
    const { children, boxRef, style, position, ...rest } = props;

    const boxStyle: React.CSSProperties = {
        ...style,
        position: "absolute",
        left: position.x,
        top: position.y,
    };

    return (
        <div {...rest} ref={boxRef} style={boxStyle}>
            {children}
        </div>
    );
};

import React, {
  ComponentPropsWithoutRef,
  createElement,
  forwardRef,
  PropsWithChildren,
} from "react";
import { clsx, fixProps } from "@/lib/utils";

const keys = {
  className: "",
  col: false,
  flex1: false,
  itemCenter: false,
  itemEnd: false,
  justCenter: false,
  justEnd: false,
  justBetween: false,
};

type BoxProps<T extends keyof HTMLElementTagNameMap> =
  ComponentPropsWithoutRef<T> &
    PropsWithChildren<
      { as?: T } & {
        [key in keyof typeof keys]?: (typeof keys)[key];
      }
    >;

export const Box = forwardRef(
  <T extends keyof HTMLElementTagNameMap = "div">(
    props: BoxProps<T>,
    ref: React.Ref<HTMLElementTagNameMap[T]>
  ) => {
    return createElement(props.as || "div", {
      ...fixProps({ ...props }, keys),
      className: clsx(
        "flex",
        props.col && "flex-col",
        props.flex1 && "flex-1",
        props.itemCenter && "items-center",
        props.itemEnd && "items-end",
        props.justCenter && "justify-center",
        props.justEnd && "justify-end",
        props.justBetween && "justify-between",

        props.className
      ),
      ref,
      // @ts-ignore
      as: undefined,
    });
  }
);

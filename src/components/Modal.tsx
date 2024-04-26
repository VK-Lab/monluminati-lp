import React from "react";
import cn from "classnames";
import { createPortal } from "react-dom";
const Modal = ({
  className = "",
  maxWidth = "max-w-xl",
  children,
}: {
  className?: string;
  maxWidth?: string;
  children: React.ReactNode;
}) => {
  return createPortal(
    <div className="backdrop-blur fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-25 py-10 flex items-center z-[100]">
      <div
        className={cn(
          "modal max-h-full-2 overflow-y-auto-2 w-full",
          maxWidth,
          className
        )}
      >
        <div className="w-full">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

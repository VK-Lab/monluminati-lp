import cn from "classnames";
import React, { useCallback, useEffect,useLayoutEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  className = "",
  maxWidth = "max-w-xl",
  children
}: {
  className?: string;
  maxWidth?: string;
  children: React.ReactNode;
}) => {
  const onUpdateBodyElement = useCallback(() => {
    const body = document.querySelector('body');

    if (!body?.classList?.contains("overflow-y-hidden")) {
      body?.classList.add('overflow-y-hidden');
      return;
    }
  }, []);

  useLayoutEffect(() => {
    onUpdateBodyElement();
  }, [onUpdateBodyElement]);

  useEffect(() => {
    return () => {
      const body = document.querySelector('body');
      body?.classList.remove('overflow-y-hidden');
    }
  }, [])

  return createPortal(
    <div
      className="fixed left-0 top-0 z-[1055] -hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none backdrop-blur"
      //className="backdrop-blur fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-25 py-10 flex items-center z-[100]"
    >
      <div
        className={cn(
          "pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]",
          // "pointer-events-none relative w-auto translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]",
          // "modal max-h-full-2 overflow-y-auto-2 w-full",
          maxWidth,
          className
        )}
      >
        <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-clip-padding text-current shadow-4 outline-none bg-surface-dark bg-gray-800">
          {children}
        </div>
        {/* <div className="w-full">{children}</div> */}
      </div>
    </div>,
    document.body
  );
};

export default Modal;

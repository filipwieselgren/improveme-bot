import { useEffect, useRef, useState } from "react";

interface BoxProps {
  children: React.ReactNode;
  scroll: boolean;
}

const ChatWrapper = (props: BoxProps) => {
  const scrollHereRef = useRef<any>(null);

  useEffect(() => {
    scrollHereRef.current.scrollIntoView({ behavior: "smooth" });
  }, [props.scroll]);
  return (
    <>
      <div className="chat-wrapper">
        {props.children}
        <div ref={scrollHereRef}></div>
      </div>
    </>
  );
};

export default ChatWrapper;

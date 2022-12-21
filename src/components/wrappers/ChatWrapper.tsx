interface BoxProps {
  children: React.ReactNode;
}

const ChatWrapper = (props: BoxProps) => {
  return (
    <>
      <div className="chat-wrapper">{props.children}</div>
    </>
  );
};

export default ChatWrapper;

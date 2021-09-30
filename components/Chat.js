import Input from './Input';
import Message from './Message';
import User from './User';

function Chat() {
  return (
    <div className="flex-1 ">
      <User />
      <Message />
      <Input />
    </div>
  );
}

export default Chat;

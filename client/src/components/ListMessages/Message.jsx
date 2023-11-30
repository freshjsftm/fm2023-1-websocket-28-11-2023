import React from 'react';

const Message = ({ msg }) => {
  return <article>{msg.content} (user name)</article>;
};

export default Message;

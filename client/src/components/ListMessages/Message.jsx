import React from 'react';

const Message = ({ msg }) => {
  return <article>{JSON.stringify(msg)}</article>;
};

export default Message;

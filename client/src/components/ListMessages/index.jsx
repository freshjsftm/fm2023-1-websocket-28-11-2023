import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChat } from '../../store/chatSlice';
import Message from './Message';

const ListMessages = () => {
  const { messages, error, isFetching } = useSelector((store) => store.chat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChat()); // eslint-disable-next-line
  }, []);
  const showList = (msg) => <Message key={msg._id} msg={msg} />;
  return (
    <section>
      <h2>List messages</h2>
      {isFetching && <h3>Loading...</h3>}
      {error && <h3>Error!!!</h3>}
      {messages.length === 0 ? <h3>Nothing...</h3> : messages.map(showList)}
    </section>
  );
};

export default ListMessages;

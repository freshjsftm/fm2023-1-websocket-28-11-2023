import axios from 'axios';
import io from 'socket.io-client';
import store from '../store';
import CONSTANTS from '../constants';
import { addMessage, errMessage } from '../store/chatSlice';

const { WEBSOCKET_EVENTS, BASE_URL } = CONSTANTS;

const httpClient = axios.create({
  baseURL: `http://${BASE_URL}`,
});

const socket = io(`ws://${BASE_URL}`);

export const getAllMessages = () => httpClient.get('/');
export const createUser = (values) => httpClient.post('/users', values);

export const createMessage = (message) =>
  socket.emit(WEBSOCKET_EVENTS.NEW_MESSAGE, message);

socket.on(WEBSOCKET_EVENTS.NEW_MESSAGE, (message) => {
  store.dispatch(addMessage(message));
});
socket.on(WEBSOCKET_EVENTS.ERR_MESSAGE, (error) => {
  store.dispatch(errMessage(error));
});

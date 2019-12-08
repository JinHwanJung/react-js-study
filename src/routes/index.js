import User from './user';
import Chat from './chat';
import More from './more';


export default [
    { path: "/", component: User },
    { path: "/chat", component: Chat },
    { path: "/more", component: More }
];

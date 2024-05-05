import { ChatEngine } from 'react-chat-engine';
import  './App.css';
import ChatFeed from './components/ChatFeed';
import SignUp from './components/SignUp';
const App = () =>{
   if (!localStorage.getItem('username')) return <SignUp />;
  return (
    <ChatEngine 
    height = "100vh"
    projectID = "bd4439fc-4fc8-43d4-b388-74f86f448bdb"
    userName = {localStorage.getItem("username")}
    userSecret = {localStorage.getItem("password")}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
   />
  )
}
export default App;
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App(props) {
  if (!localStorage.getItem("username")) {
    return <LoginForm></LoginForm>;
  } else {
    return (
      <ChatEngine
        height="100vh"
        projectID="2bef5817-df65-4c82-bef9-fdba0fa0faf7"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => (
          <ChatFeed {...chatAppProps}></ChatFeed>
        )}
      ></ChatEngine>
    );
  }
}

export default App;

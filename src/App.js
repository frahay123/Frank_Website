import {useEffect} from 'react';
import './App.css';

function App() {

  const google = window.google; 
 

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential)

  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "1057309345994-7dvul6i7s4istr6fn5bksnho75i3gf69.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
    google.accounts.id.renderButton(
      document.getElementById("sign-in-div"),
      {theme: "outline", size: "large"}
    )
  },[])
  return (
    <div className="App">
      <div id = "sign-in-div"></div>
      
    </div>
  );
}

export default App;

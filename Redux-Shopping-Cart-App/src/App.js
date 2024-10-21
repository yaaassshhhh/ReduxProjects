import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

let firstRender =  true ;
function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification)
  const loginStatus   = useSelector((state)=> state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  useEffect(()=>{
    if(firstRender){
      firstRender = false;
      return;
    }
    const sendRequest  = async () =>{
      //set state as sending request
      dispatch(uiActions.showNotification({
        open : true,
        message : 'Sending cart data to database',
        type : 'warning'
      }))
      const res = await fetch("https://redux-https-238c1-default-rtdb.asia-southeast1.firebasedatabase.app/cart-Items.json",{
        method : 'PUT',
        body : JSON.stringify(cart)
      })
      const data = res.json();
      //set state as request sent and success
      dispatch(uiActions.showNotification({
        open : true,
        message : 'cart data successfully sent to database',
        type : 'success'
      }))
    } 
  
    sendRequest().catch((error) =>{
      //set state as request sent and failed
      dispatch(uiActions.showNotification({
        open : true,
        message : 'Sending request failed',
        type : 'error'
      }))

    });
  }, [cart]);
  return (
    <div className="App">
      {notification && <Notification type = {notification.type} message={notification.message} />}
      {loginStatus ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;

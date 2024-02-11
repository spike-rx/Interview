
import React, { useEffect, useState } from 'react';
import * as signalR from "@microsoft/signalr";
import './client.css'
import {useLocation} from "react-router-dom";
// https://localhost:44382/messageHub
const MessageClient = () => {
    const moment = require('moment');
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("")
    const [history, setHistory] = useState([])
    const location = useLocation();


    useEffect( () => {
        const {loginName} = location.state
        const fetchData = async () => {
            try {
                const response = await fetch(`https://localhost:44382/Message/${loginName}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setHistory(jsonData)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData()



        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:44382/messageHub") // SignalR hub URL
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);


    useEffect(() => {
        if (connection) {
            connection.start().catch(err => console.error(err));

            connection.on("messageReceived", (name, message, dateTime) => {
                setMessages(messages => [...messages, {name, message, dateTime} ]);
            });
        }

    }, [connection]);


    const handleSubmit = async () => {
        if (connection) {
            try {
                const currentTime = new Date();
                const dateTime = moment(currentTime).format('YYYY-MM-DD HH:mm:ss');
                await connection.send("newMessage", name, message, dateTime);

            } catch (error) {
                console.error(error);
            }
        }
    }


    return (
        <div>
            <h1>Message Board</h1>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button>History Message</button>
            <input
                placeholder="Compose your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></input>
            <button type="submit" onClick={handleSubmit}>Send</button>
            <div className="scrollable-window">
                <ul>
                    {[messages.map((msg, index) => (
                        <li key={index}>
                            <div className="message">
                                <p><strong>Username: {msg.name}</strong> Time:{msg.dateTime}</p>
                                <p>Message: {msg.message}</p>
                            </div>
                        </li>

                    ))]}
                </ul>
            </div>
            <div className="scrollable-window">
                <h3>History Message</h3>
                <ul>
                    {[history.map((msg, index) => (
                        <li key={index}>
                            <div className="message">
                                <p><strong>Username: {msg.name}</strong> Time:{msg.dateTime}</p>
                                <p>Message: {msg.message}</p>
                            </div>
                        </li>

                    ))]}
                </ul>
            </div>
        </div>
    );
};

export default MessageClient;
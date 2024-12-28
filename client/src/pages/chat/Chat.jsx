import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Chat.css';
import users from '../../data/users';
import conversations from '../../data/conversations';
import sendmessageIcon from '../../assets/send_with_cat_palm.svg';

function Chat({ loggedInUser }) {
  const navigate = useNavigate();
  const messageEndRef = useRef(null);
  const [searchText, setSearchText] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [userConversations, setUserConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  useEffect(() => {
    // Ensure user logged-In
    if (!loggedInUser) return navigate('/');

    // Update User Conversations
    setUserConversations(
      conversations.filter((c) => c.participants.some((id) => id === loggedInUser.id))
    );
  }, [loggedInUser]);

  // Make last message visible
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [userConversations]);

  // Make last messages visble when new conversation selected
  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [selectedConversation]);

  function handleChatListItemSlection(conversation) {
    setSelectedConversation(conversation);
    setSelectedUser(users.find((user) => user.id === conversation.participants[1]));
  }

  function handleSendMessage() {
    // Ensure message is Not empty
    if (newMessage.trim() === '') return;

    // Update message
    setUserConversations(
      userConversations.map((c) => {
        if (c.id === selectedConversation.id) {
          c.messages.push({ userId: loggedInUser.id, text: newMessage });
        }

        return c;
      })
    );

    setNewMessage(''); // Empty current message for further usage
  }

  return (
    <div className="chat-container">
      <div className="chat-list-container">
        <h2>Chats</h2>
        <input
          className="search-box"
          type="text"
          placeholder="Search or Start new coversation"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <div className="chat-list">
          {userConversations.map((conversation, index) => {
            const targetUser = users.find((user) => user.id === conversation.participants[1]);
            const lastMessage = conversation.messages.slice(-1)[0];

            return (
              <div
                className={`chat-list-item ${selectedUser?.id === targetUser.id && 'selected'}`}
                key={index}
                onClick={() => {
                  handleChatListItemSlection(conversation);
                }}
              >
                <div className="item-head">
                  <img className="avater" src={targetUser.dpUrl} />
                </div>
                <div className="item-body">
                  <h3 className="user-name">{targetUser.name}</h3>
                  <p className="last-message">
                    {lastMessage.userId === loggedInUser.id
                      ? `You: ${lastMessage.text}`
                      : lastMessage.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="chat-content-container">
        {selectedConversation ? (
          <>
            <div className="chat-participant-container">
              <div className="participant-avatar-wrapper">
                <img
                  className="participant-avatar"
                  src="/src/assets/images/cats/Cyber_Cat.png"
                  alt="avatar"
                />
              </div>
              <div className="participant-info">
                <div>
                  <h3>{selectedUser.name}</h3>
                  <p className="user-type">A {selectedUser.type.name}</p>
                </div>
              </div>
            </div>
            <div className="message-container">
              {selectedConversation.messages.map((message, index) => (
                <div
                  className={`message ${message.userId === loggedInUser.id ? 'my-message' : ''} `}
                  key={index}
                >
                  {message.text}
                </div>
              ))}
              <div ref={messageEndRef} />
            </div>
            <div className="message-input-container">
              <input
                className="message-input"
                placeholder="Type Message"
                value={newMessage}
                onChange={(e) => {
                  setNewMessage(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="send-message-btn"
                onClick={() => {
                  handleSendMessage();
                }}
              >
                <image href={sendmessageIcon} width="100%" height="100%" />
              </svg>
            </div>
          </>
        ) : (
          <div className="placeholder-container">
            {' '}
            <h2>Please Select A Conversation</h2>{' '}
          </div>
        )}
      </div>
      <div className="chat-details-container">
        {selectedConversation ? (
          <>
            <div className="about-user-container">
              <h2>About User</h2>
              <div className="about-user-item">
                <h4>Name: </h4>
                <p>{selectedUser.name}</p>
              </div>
              <div className="about-user-item">
                <h4>Type: </h4>
                <p>{selectedUser.type.name}</p>
              </div>
              <div className="about-user-item">
                <h4>Personality: </h4>
                <p>{selectedUser.type.personality}</p>
              </div>
              <div className="about-user-item">
                <h4>joined: </h4>
                <p> Jan 2025 </p>
              </div>
              <div className="about-user-item">
                <h4>Likes: </h4>
                <p>Traveling, Nature, Movies </p>
              </div>
              <div className="about-user-item">
                <h4>Current Mood: </h4>
                <p>Playful </p>
              </div>
              <div className="about-user-item">
                <h4>Hobbies: </h4>
                <p>Music, games </p>
              </div>
              <div className="about-user-item">
                <h4>Favorite Food: </h4>
                <p>Biryani </p>
              </div>
            </div>
            <div className="shared-files-container">
              <h2>Shared Files</h2>

              <h3 className="shared-files-message">0 Shared Files</h3>
            </div>
          </>
        ) : (
          <div className="placeholder-container">
            {' '}
            <h4>Please Select A Conversation</h4>{' '}
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;

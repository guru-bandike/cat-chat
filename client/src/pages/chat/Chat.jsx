import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuPlus } from 'react-icons/lu';
import { TiArrowBack } from 'react-icons/ti';

import './Chat.css';
import users from '../../data/users';
import conversations from '../../data/conversations';
import sendmessageIcon from '../../assets/send_with_cat_palm.svg';
import toast from 'react-hot-toast';

function Chat({ loggedInUser }) {
  const navigate = useNavigate();
  const messageEndRef = useRef(null);
  const [isConversationOpened, setIsConversationOpened] = useState(false);
  const [isChatDetailsOpened, setIsChatDetailsOpened] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [userConversations, setUserConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [ShowNewUsers, setShowNewUsers] = useState(false);

  const filteredActiveConversations = userConversations.filter(
    (c) =>
      users
        .find((u) => u.id == c.participants[1]) // Get current user
        .name.toLowerCase()
        .includes(searchText.toLowerCase()) // Ensure search name included
  );

  const filteredNewUsers = users.filter((u) =>
    // Ensure users dont have active conversatons and search name inclued
    userConversations.every(
      (c) => c.participants[1] !== u.id && u.name.toLowerCase().includes(searchText.toLowerCase())
    )
  );

  useEffect(() => {
    // Ensure user logged-In
    if (!loggedInUser) return navigate('/');

    toast.success(`Wellcome ${loggedInUser.name}`);

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

  function handleNavBack() {
    if (isChatDetailsOpened) return setIsChatDetailsOpened(false);
    if (isConversationOpened) return setIsConversationOpened(false);
  }

  function handleChatListItemSlection(conversation) {
    setSelectedConversation(conversation);
    setSelectedUser(users.find((user) => user.id === conversation.participants[1]));
    setSearchText('');
    setIsConversationOpened(true);
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

  function handleShowNewUsers() {
    setShowNewUsers((prevState) => !prevState);
    setSearchText('');
  }

  function handleAddConversation(newUser) {
    const newConversation = {
      id: userConversations.length + 1,
      participants: [1, newUser.id],
      messages: [],
    };
    // Create new conversation
    setUserConversations((prevConversations) => [...prevConversations, newConversation]);

    setSearchText('');
    setSelectedUser(newUser);
    setShowNewUsers(false);
    setIsConversationOpened(true);
    setSelectedConversation(newConversation);
    toast.success('New Conversation Added!');
  }

  return (
    <div className="chat-container">
      <div
        className={`chat-list-container ${
          !isConversationOpened && !isChatDetailsOpened ? 'opened' : ''
        }`}
      >
        <h2>Chats</h2>
        <div className="search-box-container">
          <input
            className="search-box"
            type="text"
            placeholder="Search Conversation"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <div className="show-new-users-btn" onClick={handleShowNewUsers}>
            <LuPlus width="100%" height="100%" color="#31a354" />
          </div>
        </div>
        <div className="chat-list">
          {!ShowNewUsers &&
            filteredActiveConversations.map((conversation, index) => {
              const participant = users.find((user) => user.id === conversation.participants[1]);
              const lastMessage = conversation.messages.slice(-1)[0];

              return (
                <div
                  className={`chat-list-item ${selectedUser?.id === participant.id && 'selected'}`}
                  key={index}
                  onClick={() => {
                    handleChatListItemSlection(conversation);
                  }}
                >
                  <div className="item-head">
                    <img className="avater" src={participant.dpUrl} />
                  </div>
                  <div className="item-body">
                    <h3 className="user-name">{participant.name}</h3>
                    <p className="last-message">
                      {lastMessage &&
                        (lastMessage.userId === loggedInUser.id
                          ? `You: ${lastMessage.text}`
                          : lastMessage.text)}
                    </p>
                  </div>
                </div>
              );
            })}
          {ShowNewUsers &&
            filteredNewUsers.map((newUser, index) => {
              return (
                <div
                  className={`chat-list-item`}
                  key={index}
                  onClick={() => {
                    handleAddConversation(newUser);
                  }}
                >
                  <div className="item-head">
                    <img className="avater" src={newUser.dpUrl} />
                  </div>
                  <div className="item-body">
                    <h3 className="user-name">{newUser.name}</h3>
                    <p className="last-message">{`A ${newUser.type.name}`}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div
        className={`chat-content-container ${
          isConversationOpened && !isChatDetailsOpened ? 'opened' : ''
        }`}
      >
        {selectedConversation ? (
          <>
            <div
              className="chat-participant-container"
              onClick={() => {
                setIsChatDetailsOpened(true);
              }}
            >
              <div className="participant-avatar-wrapper">
                <img className="participant-avatar" src={selectedUser.dpUrl} alt="avatar" />
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
      <div className={`chat-details-container ${isChatDetailsOpened ? 'opened' : ''}`}>
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
      <button className="nav-back-btn" onClick={handleNavBack}>
        <TiArrowBack width="100%" height="100%" color="#31a354" size="100%" />
      </button>
    </div>
  );
}

export default Chat;

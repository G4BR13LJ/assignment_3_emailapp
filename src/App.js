import logo from './logo.svg';
import './App.css';
import EmailList from "./components/emaillist/emaillist.component";
import SearchBar from "./components/searchbar/searchbar.component";
import SelectedEmail from "./components/selectedemail/selectedemail.component";
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {

  const [content, setContent] = useState([]);

  const [searchInput, setSearchInput] = useState("")

  const [filteredContent, setFilteredContent] = useState([]);

  const [selectedEmailId, setSelectedEmailId] = useState(null);


  useEffect(() => {
    const fetchContent = async () => {
      const response = await axios.get('https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json',);
      setContent(response.data);
    };
    fetchContent();
  }, []);

  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
      filtered = content;
    } else {
      filtered = content.filter(content => content.subject.toLowerCase().includes(searchInput.toLowerCase()));
    }
    setFilteredContent(filtered);
  }, [content, searchInput]);
      

  const handleInput = e => {
    setSearchInput(e.target.value);
  };

  const handleEmailClick = (emailId) => {
    const updatedContent = content.map(email => ({
      ...email,
      active: email.id === emailId,
      read: email.id === emailId || email.read,
    }));
    setContent(updatedContent);
    setSelectedEmailId(emailId);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };  

  return (
    <div className="App">
      <h1>Email App</h1>
      <SearchBar placeholder="Search Email Subject" handleInput={handleInput} />
      <div className="app-container">
        <EmailList content={filteredContent} onEmailClick={handleEmailClick} selectedEmailId={selectedEmailId} />
        <SelectedEmail
          selectedEmail={content.find(email => email.id === selectedEmailId)}
          onUnmount={() => setSelectedEmailId(null)}/>
      </div>
    </div>
  );
}

export default App;

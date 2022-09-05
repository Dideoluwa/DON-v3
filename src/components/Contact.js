import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import styles from './Contact.module.css'
import axios from 'axios'
import RubberBand from 'react-reveal/RubberBand';
import Bounce from 'react-reveal/Bounce';


function Contact() {
  let [firstName, setFirstName] = useState('')
  let [formIsValid, setFormIsValid] = useState(false)
  let [messages, setMessages] = useState('')
  let [success, setSuccess] = useState('')
  let [isLoading, setIsLoading] = useState(false)
  let [subject, setSubject] = useState('')
  let [email, setEmail] = useState('')


  useEffect(() => {
    if (firstName.trim().length >= 1 && messages.trim().length >= 1 && subject.trim().length >= 1 && email.includes('@') && email.includes('.com')) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }, [firstName, messages, subject, email])
  let formSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    axios
      .post("https://getform.io/f/8920f32d-51e2-48ea-8c49-e8038017df6b", {
        name: firstName,
        email: email,
        subject: subject,
        message: messages
      })
      .then(function (response) {
        if (response.status === 200) {
          setFirstName('')
          setEmail('')
          setMessages('')
          setSubject('')
          setIsLoading(false)
          setSuccess("Your message has been sent successfully.");
        } else {
          setSuccess("Some error occured, Try again later");
        }
      })
      .catch(error => console.log(error))
  }

  let FirstNameChangeHandler = (e) => {
    setFirstName(e.target.value)
  }

  let EmailChangeHandler = (e) => {
    setEmail(e.target.value)
  }
  let subjectChangeHandler = (e) => {
    setSubject(e.target.value)
  }
  let messageChangeHandler = (e) => {
    setMessages(e.target.value)
  }
  return (
    <div>
      <NavBar />
      <div className={styles.body}>
        <div className={styles.body_child}>
          <h1>CONTACT</h1>
        </div>
        <div className={styles.body_inner}>
          <div className={styles.form}>
            <h1>Feel free to send a message...😉 </h1>
            <Bounce>
              <form onSubmit={formSubmitHandler}>
                <div className={styles.checkoutBody_inner_name}>
                  <div className={styles.checkoutBody_inner_name_inner}>
                    <label>Name</label>
                    <input
                      name="name"
                      type='text'
                      value={firstName}
                      onChange={FirstNameChangeHandler}
                    />
                  </div>
                  <div className={styles.checkoutBody_inner_name_inner}>
                    <label>Email</label>
                    <input
                      name="Email"
                      type='email'
                      value={email}
                      onChange={EmailChangeHandler}
                    />
                  </div>
                </div>
                <div>
                  <label>Subject</label>
                  <input
                    name="Subject"
                    type='text'
                    value={subject}
                    onChange={subjectChangeHandler}
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    name="message"
                    type='text'
                    value={messages}
                    onChange={messageChangeHandler}
                  />
                </div>
                <button
                  type='submit'
                  className={styles.button}
                  disabled={!formIsValid}>
                  Send message</button>
                {isLoading && <h3>Sending message...</h3>}
                <div className={styles.message}>{success ? <h3>{success}</h3> : null}</div>
              </form>
            </Bounce>
          </div>
          <div className={styles.contactInfo}>
            <RubberBand>
              <div className={styles.contactInfo_list}>
                <div className={styles.svg_wrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill='white'><path d="M20 21.193l-.003.807h-19.993l-.004-.833c-.009-2.224.088-3.495 2.647-4.086 2.805-.647 5.573-1.227 4.242-3.682-3.943-7.275-1.123-11.399 3.111-11.399 4.153 0 7.043 3.971 3.11 11.398-1.292 2.44 1.375 3.02 4.242 3.682 2.57.594 2.657 1.873 2.648 4.113zm4-17.193h-7v2h7v-2zm0 4h-7v2h7v-2zm0 4h-7v2h7v-2z" /></svg>
                </div>
                <div className={styles.contactInfo_listName}>
                  <h4>Name:</h4>
                  <p>Darasimi Oni</p>
                </div>
              </div>
              <div className={styles.contactInfo_list}>
                <div className={styles.svg_wrapper}>
                  <a href='mailto:darasimidideoluwa@gmail.com' rel="noreferrer" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill='white'><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" /></svg>
                  </a>
                </div>
                <div className={styles.contactInfo_listName}>
                  <h4>Email:</h4>
                  <p><a href='mailto:darasimidideoluwa@gmail.com' rel="noreferrer" target='_blank'>darasimidideoluwa@gmail.com</a></p>
                </div>
              </div>
              <div className={styles.contactInfo_list}>
                <div className={styles.svg_wrapper}>
                  <a href='https://twitter.com/theDarasimi' rel="noreferrer" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill='white'><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  </a>
                </div>
                <div className={styles.contactInfo_listName}>
                  <h4>Twitter:</h4>
                  <p><a href='https://twitter.com/theDarasimi' rel="noreferrer" target='_blank'>@theDarasimi</a></p>
                </div>
              </div>
              <div className={styles.contactInfo_list}>
                <div className={styles.svg_wrapper}>
                  <a href='https://www.linkedin.com/in/darasimi-oni-169032236' rel="noreferrer" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill='white'><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                </div>
                <div className={styles.contactInfo_listName}>
                  <h4>LinkedIn:</h4>
                  <p><a href='https://www.linkedin.com/in/darasimi-oni-169032236' rel="noreferrer" target='_blank'>Darasimi Oni</a></p>
                </div>
              </div>
              <div className={styles.contactInfo_list}>
                <div className={styles.svg_wrapper}>
                  <a href='https://github.com/Dideoluwa' rel="noreferrer" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill='white'><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg>
                  </a>
                </div>
                <div className={styles.contactInfo_listName}>
                  <h4>GitHub:</h4>
                  <p><a href='https://github.com/Dideoluwa' rel="noreferrer" target='_blank'>Dideoluwa</a></p>
                </div>
              </div>
              <div className={styles.contactInfo_list}>
                <div className={styles.svg_wrapper}>
                  <a href='https://www.instagram.com/thedarasimi_/' rel="noreferrer" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill='white'><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></svg>
                  </a>
                </div>
                <div className={styles.contactInfo_listName}>
                  <h4>Instagram:</h4>
                  <p><a href='https://www.instagram.com/thedarasimi_/' rel="noreferrer" target='_blank'>@thedarasimi_</a></p>
                </div>
              </div>
            </RubberBand>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
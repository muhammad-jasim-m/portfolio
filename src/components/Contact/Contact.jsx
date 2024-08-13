import React, { useContext, useState } from "react";
import "./Contact.css";
import { db } from "../Firebase/Api/Api"; // Import Firestore
import { addDoc, collection } from "firebase/firestore";
import { themeContext } from "../../Context";
import Swal from "sweetalert2"; // Import SweetAlert2

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please fill in all the required fields!",
        confirmButtonColor: darkMode ? "#575757" : "#3085d6",
      });
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        message: message,
        timestamp: new Date(),
      });

      Swal.fire({
        icon: "success",
        title: "Sent Successfully!",
        text: "Thank you for contacting me.",
        confirmButtonColor: darkMode ? "#575757" : "#3085d6",
      });

      setDone(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error adding document: ", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
        confirmButtonColor: darkMode ? "#575757" : "#d33",
      });
    }
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;

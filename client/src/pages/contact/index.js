import React from "react";
import Alert from "@mui/material/Alert";
import "./index.css";

const Contact = () => {
  const [contactData, setContactData] = React.useState({
    name: "",
    email: "",
    comment: "",
  });
  const [showAlert, setShowAlert] = React.useState(false);

  const submitContactRequest = (e) => {
    e.preventDefault();
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      window.location.href = "/";
    }, [3000]);
  };

  return (
    <div>
      <div className="contactHeader header">Contact</div>
      this is where you can find a form to send us an email. We are very
      friendly and value your input a lot maybe. Here are our operating hours,
      but not our phone number because that's stupid. Email forms work best.
      Maybe one day we will have a phone service for peopel to call, but who's
      that fancy from the getout? Not me for sure for sure
      {showAlert && <Alert severity="success">Thanks for your input!</Alert>}
      <form className="contactFormContainer">
        <div className="contactInputContainer">
          <label htmlFor="contactName">Name</label>
          <input
            type="text"
            className="contactInput"
            id="contactName"
            value={contactData.name}
            onChange={(e) =>
              setContactData({ ...contactData, name: e.target.value })
            }
          />
        </div>

        <div className="contactInputContainer">
          <label htmlFor="contactEmail">Email</label>
          <input
            type="text"
            className="contactInput"
            id="contactEmail"
            value={contactData.email}
            onChange={(e) =>
              setContactData({ ...contactData, email: e.target.value })
            }
          />
        </div>

        <div className="contactInputContainer">
          <label htmlFor="contactComment">Comment</label>
          <textarea
            className="contactInput"
            id="contactComment"
            value={contactData.comment}
            onChange={(e) =>
              setContactData({ ...contactData, comment: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="contactSubmit"
          onClick={(e) => submitContactRequest(e)}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

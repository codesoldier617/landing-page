import React, { useState } from "react";
import emailjs from "emailjs-com";
import './DemoForm.css';

const DemoForm = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [currentRoleOther, setCurrentRoleOther] = useState(""); // State for Current Role Other
  const [improvement, setImprovement] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(""); // State for error messages

  // Mapping of option values to corresponding text for currentRole
  const currentRoleTextMap = {
    owner: "Owner",
    operator: "Operator",
    consultant: "Consultant",
    other: "Other"
  };

  // Mapping of option values to corresponding text for improvement
  const improvementTextMap = {
    skills: "You are looking to improve your QTX sales skills.",
    knowledge: "You want to improve QTX operation effectiveness.",
    network: "You aim to have accurate QTX reports and insights."
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the relevant text based on the selected currentRole
    const currentRoleText = currentRole === "other" ? currentRoleOther : currentRoleTextMap[currentRole] || "";

    // Get the relevant text based on the selected improvement option
    const improvementText = improvementTextMap[improvement] || "";

    const templateParams = {
      name,
      email,
      currentRole: currentRoleText, // Send relevant text instead of option value
      improvement: improvementText, // Send relevant text instead of option value
    };

    emailjs.send("service_7d9y0bc", "template_lnypps8", templateParams, "tjngQHh4b0DTHOdSr")
      .then((response) => {
        console.log("Email sent successfully:", response);
        setMessageSent(true);
        setError(""); // Clear error message if successful
        // Reset form fields after successful submission
        setName("");
        setEmail("");
        setCurrentRole("");
        setCurrentRoleOther("");
        setImprovement("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setError("There was an error sending your message. Please try again."); // Set error message
      });
  };

  return (
    <div className="bs01">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="trw">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="currentRole">What is your current role:</label>
          <select
            id="currentRole"
            value={currentRole}
            onChange={(e) => {
              setCurrentRole(e.target.value);
              if (e.target.value !== "other") {
                setCurrentRoleOther(""); // Clear the otherRole field if not "Other"
              }
            }}
          >
            <option value="">Select a role</option>
            <option value="owner">Owner</option>
            <option value="operator">Operator</option>
            <option value="consultant">Consultant</option>
            <option value="other">Other</option>
          </select>
        </div>
        {currentRole === "other" && (
          <div className="form-group">
            <label htmlFor="currentRoleOther">Current role Other:</label>
            <input
              type="text"
              id="currentRoleOther"
              value={currentRoleOther}
              onChange={(e) => setCurrentRoleOther(e.target.value)}
              placeholder="Other Role"
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="improvement">What are you looking to improve by using QTX:</label>
          <select
            id="improvement"
            value={improvement}
            onChange={(e) => setImprovement(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="skills">Make better QTX sales</option>
            <option value="knowledge">Improve QTX operation effectiveness</option>
            <option value="network">Have accurate QTX reports and insights</option>
          </select>
        </div>
        <div className="subbtn">
          <button type="submit" className="sb">Submit</button>
        </div>
      </form>
      {messageSent && <p className="scmsg">Thank you for your submission!</p>}
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
};

export default DemoForm;

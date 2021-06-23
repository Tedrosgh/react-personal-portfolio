import { useState } from "react";
// import { ImSpinner3 } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaSpinner } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const startingState = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };
  const [startState, setStartState] = useState(startingState);
  const [isSubmitted, setisSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setStartState({ ...startState, [name]: value });
  };
  const handleInputChange = (evt) => {
    if (evt.target.type === "checkbox")
      setStartState({ ...startState, [evt.target.name]: evt.target.checked });
    else setStartState({ ...startState, [evt.target.name]: evt.target.value });
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mleabejq", {
        method: "POST",
        body: JSON.stringify(startState),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataset = await response.json();
      if (dataset.ok) setisSubmitted(true);
      setTimeout(() => {
        setisSubmitted(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {currentPage === 1 && (
          <>
            <div className="firstform">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                onChange={handleChange}
                value={startState.firstname}
              />
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={handleChange}
                value={startState.lastname}
              />
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={startState.email}
              />
              <label htmlFor="message">message</label>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="please feel free to write your question, comment, idea etc."
                onChange={handleChange}
                value={startState.message}
              />
              <button onClick={() => setCurrentPage(currentPage + 1)}>
                next
              </button>
            </div>
          </>
        )}

        {currentPage === 2 && (
          <>
            <div className="secondform">
              <div className="controllingdata">
                <h2>control once before you submit your data</h2>

                <ul>
                  <li>First Name: {startState.firstname}</li>
                  <li>Last Name: {startState.lastname}</li>
                  <li>email: {startState.email}</li>
                  <li>message: {startState.message}</li>
                </ul>
              </div>
              <button onClick={() => setCurrentPage(currentPage - 1)}>
                previous page
              </button>
              <h3>
                if everything is correct, please submit
                <h1 className="spin">
                  <FontAwesomeIcon icon={faGithub} spin />
                </h1>
              </h3>
              <div className="buttons">
                <button type="submit">submit</button>
              </div>
            </div>
          </>
        )}
        {isSubmitted && (
          <p className="alert">Your form has been successfully submitted</p>
        )}
      </form>
    </>
  );
};

export default Contact;

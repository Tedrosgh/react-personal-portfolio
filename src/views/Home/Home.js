import { NavLink } from "react-router-dom";
import tedros3 from "../../images/tedros3.svg";
const Home = () => {
  return (
    <div className="d-flex justify-content-evenly m-5 flex-grow-1 home">
      <div className="border border-0 d-flex flex-column flex-grow-1 justify-content-center align-items-center"></div>
      <NavLink path to="/contact">
        <div className="d-flex flex-column">
          <img src={tedros3} className="img-fluid rounded-pill" alt="tedros1" />
          <button className="btn btn-primary">Contact me</button>
        </div>
      </NavLink>

      <div className="border border-0 d-flex flex-column justify-content-around align-items-stretch float profile_about">
        {/* <h1>Web developer</h1>
        <h2>UI/UX developer</h2> */}
        <div>
          <h2>UI/UX developer</h2>
          <button>
            <NavLink exact to="/profile">
              About me
            </NavLink>
          </button>
          <p>
            My name is Tedros Ghebremichael. I have visited a one year course in
            DCI via online. Before the course I have basic knowledge of Pasca,
            sql essenials and python.
          </p>
        </div>
        <div>
          <h2>Services to provide</h2>
          <button>
            <NavLink exact to="/service">
              service to provide
            </NavLink>
          </button>
          <p>
            During the course I have gained a lot of knowledge with practical
            experience. At present I can understand almost every code. I have
            been introduced to a lot of libraries, which some of them are used
            in this project as well.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;

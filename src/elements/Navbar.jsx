import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <ul>
        <li className="list active">
          <a href="#">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text">Home</span>
          </a>
        </li>

        <li className="list">
          <a href="#">
            <span className="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span className="text">Profile</span>
          </a>
        </li>

        <li className="list">
          <a href="#">
            <span className="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span className="text">Messages</span>
          </a>
        </li>

        <li className="list">
          <a href="#">
            <span className="icon">
              <ion-icon name="camera-outline"></ion-icon>
            </span>
            <span className="text">Photos</span>
          </a>
        </li>

        <li className="list">
          <a href="#">
            <span className="icon">
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span className="text">Settings</span>
          </a>
        </li>
        <div className="indicator"></div>
      </ul>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  width: 400px;
  height: 70px;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  ul {
    display: flex;
    width: 350px;
  }

  ul li {
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
  }

  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
  }

  .icon {
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s;
    color: var(--clr);
  }

  ul li.active a .icon {
    transform: translateY(-32px);
  }

  ul li a .text {
    position: absolute;
    color: var(--clr);
    font-weight: 400;
    font-size: 0.75em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(20px);
  }

  ul li.active a .text {
    opacity: 1;
    transform: translateY(10px);
  }

  .indicator {
    position: absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    background: #29fd53;
    border-radius: 50%;
    border: 6px solid var(--clr);
    transition: 0.5s;
  }

  .indicator::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0px -10px 0 0 var(--clr);
  }

  .indicator::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0px -10px 0 0 var(--clr);
  }
`;

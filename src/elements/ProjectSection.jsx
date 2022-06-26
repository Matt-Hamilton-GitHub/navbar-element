import { useState } from "react";
import styled from "styled-components";
import prjsDb from "../db/projects";
import Card from "./Card";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const ProjectSection = () => {
  const [selectedCard, setSelectedCart] = useState();
  const [currentId, setCurrentId] = useState(0);

  const swipeItem = (prop) => {
    if (prop === "inc") {
      if (currentId < prjsDb.length - 3) setCurrentId(currentId + 1);
      else setCurrentId(0);
    } else {
      if (currentId === 0) setCurrentId(prjsDb.length - 3);
      else setCurrentId(currentId - 1);
    }
  };
  return (
    <Wrapper>
      <div className="svg-icon" onClick={() => swipeItem("dec")}>
        <GrFormPrevious size={70} />
      </div>
      <div className="project-cards-section">
        {prjsDb.slice(currentId, currentId + 3).map((item) => {
          const { id, name, job, image, text } = item;
          return (
            <div
              className={id === currentId + 2 ? "card main " : "card"}
              key={id}
            >
              <Card item={item} />
            </div>
          );
        })}
      </div>
      <div className="svg-icon" onClick={() => swipeItem("inc")}>
        <MdOutlineNavigateNext size={70} />
      </div>
    </Wrapper>
  );
};

export default ProjectSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin: 25px 10px;
  min-height: 300px;
  min-width: 100vw;
  transition: all 3s ease-in;

  .project-cards-section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    margin: 25px 10px;
    min-height: 300px;
  }
  .svg-icon {
    display: flex;
    position: relative;
    flex-direction: column;
    min-height: 100%;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    color: white;
  }
  .card {
    transform: scale(1);
    transition: all 0.7s ease-in;
    min-width: 200px;
    min-height: 350px;
    background: #293462;
    margin: 35px;
    border-radius: 20px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }

  .main {
    transform: scale(1.2);
    transition: all 0.5s ease-in;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, #354259 0px -2px 0px inset;
  }
`;

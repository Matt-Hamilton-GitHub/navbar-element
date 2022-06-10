import { useState } from "react";
import styled from "styled-components";
import prjsDb from "../db/projects";
import Card from "./Card";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const ProjectSection = () => {
  const [selectedCard, setSelectedCart] = useState();

  return (
    <Wrapper>
      <div className="svg-icon">
        <GrFormPrevious size={70} />
      </div>
      <div className="project-cards-section">
        {prjsDb.map((item) => {
          const { id, title } = item;
          return (
            <div className={id === 1 ? "card main" : "card"} key={id}>
              <Card />
            </div>
          );
        })}
      </div>
      <div className="svg-icon">
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
    flex-direction: column;
    min-height: 100%;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    color: white;
  }
  .card {
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
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, #354259 0px -2px 0px inset;
  }
`;

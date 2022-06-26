import styled from "styled-components";

const Card = ({ item }) => {
  const { id, name, job, image, text } = item;
  return (
    <Wrapper>
      <div className="title-div">
        <h1>{name}</h1>
      </div>

      <div className="img-div">
        <img src={image} alt={name} />
      </div>

      <div className="desc-div">
        <p>{text}</p>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .title-div {
    background: #6d8b74;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .img-div {
  }
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .desc-div {
    padding: 5px;
    user-select: none;
  }
`;

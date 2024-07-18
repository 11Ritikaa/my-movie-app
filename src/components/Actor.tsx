import styled from "styled-components";
//styles start
const Wrapper = styled.div`
    color: var(--white);
    background: var(--darkGrey);
    border-radius: 20px;
    padding: 5px;
    text-align: center;

    h3{
        margin: 10px 0 0 0;
    }
    p {
        margin: 5px 0;
    }

`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
`;


//Types
type Props = {
    name: string;
    character: string;
    imageUrl: string;
}

const Actor: React.FC<Props> = ({name, character, imageUrl}) => {
  return (
    <Wrapper>
        <Image src={imageUrl} alt='actor-thumb' />
            <h3>{name}</h3>
            <p>{character}</p>
    </Wrapper>
  )
}

export default Actor
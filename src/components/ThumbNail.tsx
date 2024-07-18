import styled from "styled-components";
import { Link } from "react-router-dom";
//styles start
const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.4s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5s;
    display: block;
    &:hover {
        opacity: 0.8;
        transform: scale(1.1);
    }

    @keyframes animateThumb{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;
//styles end

//Types
type Props ={
    image: string;
    movieId?: number;
    clickable: boolean;
}

const ThumbNail: React.FC<Props> = ({image, movieId, clickable}) => {
  return (
    <div>
        {clickable ?
            <Link to={`/${movieId}`}>
                <Image src={image} alt="movie Thumb"/>
            </Link>
            : <Image src={image} alt="movie Thumb"/>
        }
        
    </div>
  )
}

export default ThumbNail
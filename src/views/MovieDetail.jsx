import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import styled from "styled-components";
import {MovieState} from "../data/movieState.js";

import { motion } from "framer-motion";
import { pageAnimation } from "../assets/animation/animation.js";


const Award = ({title, description}) => {
    return(
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    )
}

const MovieDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname)

    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.find((stateMovie) => stateMovie.url === location.pathname);
        setMovie(currentMovie);
    }, [movies, location.pathname])

    return (
        <>
            {movie && (
                <StyledDetails
                    exit="exit"
                    variants={pageAnimation}
                    initial="hidden"
                    animate="show"
                >
                    <StyledHeadline>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie"/>
                    </StyledHeadline>
                    <StyledAwards>
                        {movie.awards.map((award, index) => (
                            <Award
                                key={award.title + index}
                                title={award.title}
                                description={award.description}
                            />
                        ))}
                    </StyledAwards>
                    <StyledImageDisplay>
                        <img src={movie.secondaryImg} alt="movie"/>
                    </StyledImageDisplay>
                </StyledDetails>
            )}
        </>
    )
}

const StyledDetails = styled(motion.div)`
  color:white;
`;

const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`


const StyledAward = styled.div`
  padding: 5rem;
  h3{
    font-size: 2rem;
  }
  .line{
    width: 100%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p{
    padding: 2rem 0;
  }
`;
export default MovieDetail;

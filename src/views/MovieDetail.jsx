import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import styled from "styled-components";
import {MovieData} from "../data/movieData.js";

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
    const location = useLocation();

    const [movies, setMovies] = useState(MovieData);
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
  h2{
   text-align: center;
    font-size: 2.5rem;
    margin: 2rem 0;
  }
  img{
    width: 100%;
    max-height: 600px;
    object-fit: cover;
  }
  @media (max-width: 700px){
    h2{
      font-size: 1.9rem;
    }
  }
`;

const StyledAwards = styled.div`
  display: flex;
  margin: 3rem 2rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1150px){
    flex-wrap: wrap;
  }
`;

const StyledImageDisplay = styled.div`
  img{
    width: 100%;
    max-height: 600px;
    object-fit: cover;
  }
`


const StyledAward = styled.div`
  padding: 2rem;
  text-align: center;
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

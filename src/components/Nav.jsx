import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import {scrollTop} from "../assets/utils/scroll.js";
import {navData} from "../data/navData.js";
import {motion} from "framer-motion";

const Nav = () => {
    const {pathname} = useLocation();
    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/" onClick={scrollTop}>Charda</Link>
            </h1>
            <ul>
                {
                    navData.map((item, index) => {
                        return (<li key={item+index}>
                            <Link to={item.to} onClick={scrollTop}>{item.description}</Link>
                            <Line
                                transition={{
                                    duration: 0.75
                                }}
                                initial={{
                                    width: pathname === item.to ? "100%" : "0%"
                                }}
                                animate={{width: pathname === item.to ? "100%" : "0%"}}
                            />
                        </li>)
                    })
                }
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      position: relative;
      &:not(:first-child){
        margin-left: 25px;
      }
    }
  }

  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -60%;
`

export default Nav

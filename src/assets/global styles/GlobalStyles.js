import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  }
  *::-webkit-scrollbar {
    width: 6px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #23d997;
    border-radius: 20px;
    border: transparent;
  }
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html{
      scroll-behavior: smooth;
    }
    
    a{
      text-decoration: none;
    }
    
    body{
      background: #1b1b1b;
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
    }
    
    button, .button{
      font-weight: bold;
      font-size: 1.1rem;
      cursor: pointer;
      padding: 1rem 2rem;
      border: 3px solid #23d997;
      background: transparent;
      color: white;
      transition: all 0.5s ease;
      font-family: 'Inter', sans-serif;
      &:hover{
        background-color: #23d997;
        color: white;
      }
    }
    
    h2{
      font-weight: lighter;
      font-size: 3rem;
    }
    
    h3{
      color: white;
    }
    
    h4{
      font-weight: bold;
      font-size: 1.7rem;
    }
    
    a{
      font-size: 1.1rem;
    }
  @media (max-width: 768px){
    a{
      font-size: 0.8rem;
    }
  }
    
    span{
      font-weight: bold;
      color: #23d997;
    }
    
    p{
      padding: 3rem 0rem;
      color: #ccc;
      font-size: 1.4rem;
      line-height: 150%;
    }


`;

export default GlobalStyles;

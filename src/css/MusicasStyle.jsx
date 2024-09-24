import styled from "styled-components";
import Color from '../constants/Colors'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;
  padding: 20px;
  margin-top: 2rem;
  width: 100%;
  text-align: center;
  height:74vh;

.animate-card{
  animation: animate-cards 1s ease-in-out;
}

@keyframes animate-cards{
  0% {
    transform: translateX(-500px); 
    opacity: 0; 
  }
  100% {
    transform: translateX(0); 
    opacity: 1; 
  }
}

.card {
  animation: animate-cards 2s ease-in-out;
}

`

export const StyledWrapper = styled.div`
  .card {
  width: 190px;
  height: 254px;
  padding: .8em;
  background: #f5f5f5;
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.card-img {
  background-color: ${Color.black};
  height: 40%;
  width: 100%;
  border-radius: .5rem;
  transition: .3s ease;
}

.card-info {
  padding-top: 10%;
}

svg {
  width: 20px;
  height: 20px;
}

.card-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #ddd;
}


.text-title {
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.5;
}

.text-body {
  font-size: .9em;
  padding-bottom: 10px;
}


.card-button {
  border: 1px solid ${Color.blue};
  display: flex;
  padding: .3em;
  cursor: pointer;
  border-radius: 50px;
  transition: .3s ease-in-out;
}


.card-img:hover {
  transform: translateY(-25%);
  box-shadow: ${Color.blue} 0px 8px 16px -8px;
}

.card-button:hover {
  border: 1px solid ${Color.gray};
  background-color: ${Color.gray};
}


`;
export default StyledWrapper
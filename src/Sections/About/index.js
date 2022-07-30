import styled from "styled-components";
import metaverse from "../../assets/metaverse.png";

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;
const About = () => {
  return (
    <AboutSection id="about">
      <Main>
        <div>
          {/* <Title>About Us</Title> */}
          <img src={metaverse} alt="About" />
        </div>
      </Main>
    </AboutSection>
  );
};

export default About;

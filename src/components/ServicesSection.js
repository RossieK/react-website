import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImg } from '../styles';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
    const [element, controls] = useScroll();

    return (
        <StyledServices variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <StyledDescription>
                <h2>High <span>quality</span> services</h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img src={clock} alt="Clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={teamwork} alt="Team work" />
                            <h3>Team work</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={diaphragm} alt="Diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={money} alt="Money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImg>
                <img src={home2} alt="Camera" />
            </StyledImg>
        </StyledServices>
    );
};

const StyledServices = styled(StyledAbout)`
h2{
    padding-bottom:5rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`;

const StyledCards = styled.div`
display:flex;
flex-wrap:wrap;
@media (max-width:1300px){
       justify-content:center;
    }
`;

const StyledCard = styled.div`
flex-basis: 15rem;
.icon{
    display:flex;
    align-items:center;
    h3{
        margin-left:1rem;
        background:white;
        color:black;
        padding:1rem;
    }
}`

export default ServicesSection;
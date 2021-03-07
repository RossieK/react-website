import home1 from '../img/home1.png';
import { StyledAbout, StyledDescription, StyledImg, StyledHide } from '../styles';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>dreams</span> come</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true.</h2>
                    </StyledHide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have a professional team with amazing skills.</p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImg>
                <img src={home1} alt="Guy with a camera" />
            </StyledImg>
        </StyledAbout>
    );
};

export default AboutSection;
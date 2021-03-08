import home1 from '../img/home1.png';
import { StyledAbout, StyledDescription, StyledImg, StyledHide } from '../styles';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div className="title">
                    <StyledHide>
                        <motion.h2>We work to make</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2>your <span>dreams</span> come</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2>true.</motion.h2>
                    </StyledHide>
                </motion.div>
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
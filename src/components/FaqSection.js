import styled from 'styled-components';
import { StyledAbout } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
    return (
        <StyledFaq>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem, corporis quo harum eveniet id vitae odit non sapiente tenetur?</p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem, corporis quo harum eveniet id vitae odit non sapiente tenetur?</p>
                    </div>
                </Toggle>
                <Toggle title="Different Payments Methods?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem, corporis quo harum eveniet id vitae odit non sapiente tenetur?</p>
                    </div>
                </Toggle>
                <Toggle title="What product do you offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem, corporis quo harum eveniet id vitae odit non sapiente tenetur?</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </StyledFaq>
    );
};

const StyledFaq = styled(StyledAbout)`
display:block;
span{
    display:block;
}
h2{
    padding-bottom:2rem;
    font-weight:lighter;
}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin:2rem 0rem;
    width:100%;
}
.question{
    padding:3rem 0rem;
    cursor:pointer;
}
.answer{
    padding:2rem 0rem;
    p{
        padding:1rem 0rem;
    }
}
`;

export default FaqSection;
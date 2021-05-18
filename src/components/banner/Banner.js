import {Container} from './Banner.styles';

import InfoBar from '../infoBar/InfoBar';
import TextBox from '../textBox/TextBox';
import HighlightButton from '../buttons/HighlightButton';

function Banner() {
    return (
        <Container>
            <InfoBar/>
            <TextBox 
                title={"Conectando doadores e causas"}
                subtitle={"Encontre suporte financeiro de uma forma flexível e prática."}
                main={true}
            />
            <HighlightButton 
                text={"Quero doar"} 
                position={"button"}
                primary={true}
            />
        </Container>
    )
}

export default Banner

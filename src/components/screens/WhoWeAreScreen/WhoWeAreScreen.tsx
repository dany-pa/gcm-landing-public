import TwitterIcon from '../../../images/whoWeAre/twitter.svg';
import { Wrapper, Title, Text } from '../../ui';
import { WHO_WE_ARE_SCREEN_ID } from '../../../const/urls';
import {
    nameStyle,
    personImgStyle,
    personStyle,
    personsWrapperStyle,
    personText,
    personTextStyle,
    sectionStyle,
    titlePersonStyle,
    titleStyle,
    twitterIconStyle,
    wrapperStyle,
} from './styles';
import { PERSONS } from './const';

export const WhoWeAreScreen = () => {
    return (
        <section
            css={sectionStyle}
            id={WHO_WE_ARE_SCREEN_ID}
        >
            <Wrapper style={wrapperStyle}>
                <Title style={titleStyle}>Who we are?</Title>
                <div css={personsWrapperStyle}>
                    {PERSONS.map((person) => {
                        return (
                            <div
                                key={person.id}
                                css={personStyle}
                                className="person"
                            >
                                <img
                                    src={person.img}
                                    css={personImgStyle}
                                />

                                <div css={personText}>
                                    <div
                                        css={titlePersonStyle}
                                        className="titlePerson"
                                    >
                                        <Text style={nameStyle}>
                                            <strong>{person.name}</strong>
                                        </Text>
                                        <Text>{person.position}</Text>
                                        {person.twitter && (
                                            <a
                                                href={person.twitter}
                                                target="_blank"
                                                rel="noreferrer"
                                                css={twitterIconStyle}
                                            >
                                                <img src={TwitterIcon} />
                                            </a>
                                        )}
                                    </div>
                                    <Text
                                        type="secondary"
                                        style={personTextStyle}
                                    >
                                        {person.text}
                                    </Text>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Wrapper>
        </section>
    );
};

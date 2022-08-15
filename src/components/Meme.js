import { getImgHead, getSentence, isScreenMobile } from "../utils/utils";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const sentenceEmpty = {
    top: "",
    bottom: ""
};

const TopText = styled.h3`
    position: absolute;
    margin: auto;
    left: 0;
    right:0;
    top: 2.5%;
    color: white;
    overflow: wrap;
    z-index: 1;
    font-size: 150%; 
    font-weight: bold;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-family: system-ui;
    @media only screen and (min-width: 1000px) {
        font-size: 200%; 
      }
`;

const BottomText = styled.h3`
    font-family: system-ui;
    position: absolute;
    margin: auto;
    bottom: 2.5%;
    left: 0;
    right: 0;
    font-weight: bold;
    color: white;
    z-index: 1;
    font-size: 150%; 
    text-transform: capitalize;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    overflow: wrap;

    @media only screen and (min-width: 1000px) {
        font-size: 200%; 
      }
`;

const MemeContainer = styled.div`
    width: min-content;
    height: auto;
    border-radius: 25px;
    position: relative;
    margin: auto;
    text-align: center;
    max-height: 100vh;
    margin: 8px;
`;

const NewMemeButton = styled.button`
    border-radius: 16px;
    color: white;
    border: none;
    background-color: orange;
    font-size: 12px;
    cursor: hover;
    flex: 0 0 10%;
    margin: 8px;
    width: 25px;
    height: 50px;

    @media only screen and (min-width: 1000px) {
        font-size: 40px;
        width: 300px;
        height: 100px;
      }
`;

const Container = styled.div`
    @media only screen and (min-width: 1000px) {
        display: flex
    }
`;

const StyledImg = styled.img`
    max-width: 100vh;
    border-radius: 8px;
    border: 1px solid black;
`;

const MobileNewMemeButton = styled.button`
    bottom: 0;
    position: absolute;
    width: 96%;
    margin: 8px;
    height: 40px;
    cursor: pointer;
    border-radius: 8px;
    color: white;
    border: none;
    font-size: 24px;
    background-color: #ed8a3e;
    font-weight: 600;
    font-family: system-ui;
`;

const Spinner = styled.div`
    border: 4px solid #f3f3f3; /* Light grey */
    border-top: 4px solid black; /* Blue */
    border-radius: 50%;
    width: 32px;
    height: 32px;
    animation: spin 2s linear infinite;
    text-align: center;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
`;

const SpinnerBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: auto;
`;

const Meme = (onClick) => {
    const [image, setImage] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [sentence, setSentence] = useState(sentenceEmpty);
    const [imgDims, setImgDims] = useState(null);
    const isMobile = isScreenMobile();

    const getMeme = useCallback(() => {
        document.getElementById("imgurl").src = "";
        const getUrl = async () => {
            setLoaded(false);
            const url = await getImgHead();
            console.log("url is: " + url);
            setImage(url);
        };
        const getWords = async () => {
            const sent = await getSentence();
            setSentence(sent);
        }
        getWords();
        getUrl();
    }, []);

    useEffect(() => {
        getMeme();
    }, [])

    useEffect(() => {
        const img = new Image();
        img.onload = function() {
            if (this.width < 1000 && this.height < 1000 && this.width > 250 && this.height > 250) {
                document.getElementById("imgurl").src = image;
                setImgDims({width: this.width, height: this.height});
                setLoaded(true);
            } else {
                getMeme();
            }
        };
        img.src = image;
    }, image)

    return (
        <>
            <Container>
                {!isMobile ? (
                    <NewMemeButton onClick={getMeme}>New Meme</NewMemeButton>
                ) : (
                    <MobileNewMemeButton onClick={getMeme}>New Meme</MobileNewMemeButton>
                )}
                <MemeContainer>
                    <StyledImg width={window.innerWidth * (isMobile ? .95 : .8)} src='' id="imgurl" />
                    {!loaded ? (
                        <SpinnerBox>
                            <Spinner/>
                        </SpinnerBox>
                    ) : (
                        <>
                        <TopText>{sentence.top}</TopText>
                        <BottomText>{sentence.bottom}</BottomText>
                        </>
                    )}
                </MemeContainer>
            </Container>

        </>
    )
};
    
export default Meme;
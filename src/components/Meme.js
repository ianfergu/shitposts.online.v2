import { getImgHead, getSentence } from "../utils/utils";
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
    font-size: 200%; 
    font-weight: bold;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-family: system-ui;
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
    font-size: 200%; 
    text-transform: capitalize;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    overflow: wrap;
`;

const MemeContainer = styled.div`
    width: min-content;
    height: auto;
    border-radius: 25px;
    position: relative;
    margin: auto;
    text-align: center;
`;

const NewMemeButton = styled.button`
    width: 300px;
    height: 100px;
    border-radius: 16px;
    color: white;
    border: none;
    background-color: orange;
    font-size: 30px;
    cursor: hover;
    flex: 0 0 10%;
    margin: 16px;
`;

const Container = styled.div`
    display: flex;
`;

const Meme = (onClick) => {
    const [image, setImage] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [sentence, setSentence] = useState(sentenceEmpty);
    const [imgDims, setImgDims] = useState(null);

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
                <NewMemeButton onClick={getMeme}>New Meme</NewMemeButton>
                <MemeContainer>
                    <img src='' id="imgurl" />
                    {!loaded ? (
                        <h2>Loading...</h2>
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
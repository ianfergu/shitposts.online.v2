import { createGlobalStyle } from "styled-components";

export const Cabin = createGlobalStyle`
@font-face {
    font-family: 'Cabin';
    src: url(/Cabin/static/Cabin/Cabin-Bold.ttf);
    src: url(/Cabin/static/Cabin/Cabin-BoldItalic.ttf);
    src: url(/Cabin/static/Cabin/Cabin-Italic.ttf);
    src: url(/Cabin/static/Cabin/Cabin-Medium.ttf);
    src: url(/Cabin/static/Cabin/Cabin-MediumItalic.ttf);
    src: url(/Cabin/static/Cabin/Cabin-Regular.ttf);
    src: url(/Cabin/static/Cabin/Cabin-SemiBold.ttf);
    src: url(/Cabin/static/Cabin/Cabin-SemiBoldItalic.ttf);
}

body {
    font-family: Cabin;
}

h1 {
  font-size: 32px;
  margin: 0;

  @media only screen and (min-width: 1000px) {
    font-size: 40px;
  }
}

h2 {
    font-size: 16px;
    margin: 0;
    @media only screen and (min-width: 1000px) {
      font-size: 32px;
    }
  }

  /* top text */
.toptext {
	position: absolute;
	margin: auto;
	left: 0;
	right:0;
	top: 2.5%;
	color: white;
    overflow: wrap;
	z-index: 1;
	font-size: 300%; 
    font-weight: bold;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-family: system-ui;
}
/* bottom text */
.bottomtext{
    font-family: system-ui;
	position: absolute;
	margin: auto;
	bottom: 2.5%;
	left: 0;
	right: 0;
    font-weight: bold;
  color: white;
  z-index: 1;
  font-size: 300%; 
  text-transform: capitalize;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  overflow: wrap;
}

.memeimage{
  width: 99%;
  height: auto;
  border-radius: 25px;
  position: relative;
  margin: auto;
  text-align: center;
}
`;
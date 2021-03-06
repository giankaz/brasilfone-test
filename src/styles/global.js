import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

html, body, .App {
  background-color: var(--grey1);
}

:root {
  --grey1 : #fafaf7;
  --grey2 : #3D454C; 
  --red   : #E60B1E;   
  --blue  : #3D8ED9; 
  --blue1 : #2A5178;
  --blue2 : #123D68;
  --black : #000000;
  --white : #FFFFFF;
}


/* reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

button {
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

a {
  text-decoration: none;
  color: var(--blue1);
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}

input[type=number] {
  -moz-appearance: textfield;
}
`
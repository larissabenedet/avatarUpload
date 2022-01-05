import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
	--gray05: #677489;
	--gray06: #495567;
	--dark: #3D485F;
	--red: #C64D32;
}
 
 a {
	text-decoration: none;
}

ol, ul {
	list-style: none;
}

html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, a, em, img, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, article, footer, header, nav, section, main {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
	font-family: 'Inter', sans-serif;
	color: var(--gray05);
	box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6, p, a, ul {
	font-size: 1em;
	font-weight: normal;
	color: var(--gray06);
}

p {
	color: var(--gray05);
	font-weight: normal;
	font-size: 0.875rem;
	line-height: 1.563rem;
}

div.reactEasyCrop_Container {
    position: relative;
	width: 114px;
	height: 114px;
}
div.reactEasyCrop_CropArea {
	color: #F2F5F8;
}
`

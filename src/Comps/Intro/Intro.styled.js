import styled from 'styled-components'

export const Container = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap');
    width: 65%;
    margin:30px 0px 30px 10%;
	font-family: 'Sawarabi Mincho', serif;
	font-size: 40px;
	color: white;
	text-align: center;
	${({size})    =>    size.lapL      &&                `font-size: 36px;
	                                                      width:65%;`}
	${({size})    =>    size.lapM      &&                `font-size: 36px;
	                                                      width:65%;`}
	${({size})    =>    size.lapS      &&                `width:80%;
                                                          margin-left:6%;
                                                          font-size: 36px;`}
    ${({size})    =>    size.mobL      &&                `width:85%;
                                                          margin-left: 4%;
                                                          font-size: 32px;
                                                          margin-top:40px;`}
    ${props => (props.size.mobM || props.size.mobS)  &&  `width:90%;
                                                          margin-top:40px;
                                                          margin-left: 2.5%;
                                                          font-size: 26px;`}
    `
export const Text = styled.section`
    margin-top:10px;
    margin-left: 5%;
    text-indent:40px;
   ${({size}) => !size.lapXL && `margin-left:4%;`}
   ${props => (props.size.mobM || props.size.mobS) && `text-indent:0px;`}
`

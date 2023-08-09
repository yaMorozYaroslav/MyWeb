import styled from 'styled-components'

export const Container = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap');
    width: 70%;
    margin:30px 0px 30px 10%;
	font-family: 'Sawarabi Mincho', serif;
	font-size: 40px;
	color: white;
	text-align: center;
	${({size})    =>    size.lapS       &&               `width:80%;
                                                          margin-left:6%;
                                                          font-size: 34px;`}
    ${({size})    =>    size.mobL       &&               `width:90%;
                                                          margin-left: 0%;
                                                          font-size: 34px;
                                                          margin-top:40px;`}
    ${props => (props.size.mobM || props.size.mobS)  &&  `width:92%;
                                                          margin-top:40px;
                                                          margin-left: 0%;
                                                          font-size: 31px;`}
    `
export const Text = styled.section`
    margin-top:5px;
    margin-left: 5%;
    text-indent:40px;
   ${({size}) => !size.lapXL && `margin-left:0%`}
   ${({size}) => (size.mobM || size.mobS) && `text-indent:0px;`}
`

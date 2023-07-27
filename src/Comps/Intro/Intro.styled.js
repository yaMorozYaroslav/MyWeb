import styled from 'styled-components'

export const Container = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap');
    width: 70%;
    margin:30px 0px 30px 14%;
	font-family: 'Sawarabi Mincho', serif;
	font-size: 35px;
	color: white;
	text-align: center;
	${({size}) => size.lapS && `width:80%;
                                margin-left:8%;
                                font-size:30px;`}
	
    ${({size}) => size.mobM &&              `width:94%;
                                             margin-top:40px;
                                             margin-left: 2.5%;
                                             font-size: 22px;`}
    `

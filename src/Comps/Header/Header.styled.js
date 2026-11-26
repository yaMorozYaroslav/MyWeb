import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const city = new URL('/header/city.jpg', import.meta.url).href

// The header remains in document flow so it never covers navigation or page content.
export const Container = styled.header`
  box-sizing: border-box;
  display: flex;
  position: sticky;
  top: 0;
  flex: 0 0 80px;
  width: 100%;
  height: 80px;
  z-index: 30;
  overflow: hidden;
  background: black;
`

export const First = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex: 0 0 55%;
  min-width: 0;
  color: white;
  border: 3px solid black;
  background: url(${city}) 10px center / cover no-repeat;

  @media (max-width: 850px) { flex-basis: 70%; }
  @media (max-width: 450px) { flex-basis: 100%; }
`

export const Text = styled.h1`
  margin: 0 0 0 20px;
  font-family: 'Sorts Mill Goudy', serif;
  font-size: clamp(24px, 3.1vw, 42px);
  line-height: 1.1;
  white-space: nowrap;
  letter-spacing: -.035em;

  & > span { color: #85c2ff; }

  @media (max-width: 450px) { margin-left: 10px; font-size: clamp(21px, 6.7vw, 30px); }
`

export const FontIcon = styled(FontAwesomeIcon)`
  flex: 0 0 auto;
  margin: 0 10px;
  font-size: clamp(32px, 4vw, 55px);
`

export const Second = styled.img`
  box-sizing: border-box;
  display: block;
  flex: 1 1 45%;
  min-width: 0;
  width: 0;
  height: 100%;
  border: 3px solid black;
  object-fit: cover;
  /* Keep the cloud photo's pale lower area out of the visible header. */
  object-position: center top;

  @media (max-width: 450px) { display: none; }
`

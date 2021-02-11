import styled from 'styled-components';

export const LoaderOverlay = styled.div`
  height: 432px;
  width: 930px;
  margin: 0 auto;
  margin-left: 35px;
  display: ${props => props.loading === 'true' ? 'block' : 'none'};
  align-items: center;
  position: absolute;
  z-index: 9999;
  top: 69px;
  background: rgba(0,0,0,0.7);
`

export const LoaderContainer = styled.div`
  position: relative;
  top: 170px;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`
import styled from 'styled-components';
import PropTypes from 'prop-types';
import XButton from '../../assets/icons/iconx.png';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:1000;
`;

const ModalContainer = styled.div`
  width: 600px;
  height: 568px;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  display: inline-block;
`;

const CloseIcon = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  margin-top:10px;
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  border: none;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ExerciseVideo = styled.div`
  width: 500px;
  height: 400px;
  background-color: #DFDFDF;
  border: 1px solid #ABABAB;
  border-radius: 10px;
  margin-left: 30px;
`;

export const TheraExerciseModal = ({ onClose }) => {

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Title>가이드 영상</Title>
        <CloseIcon src={XButton} alt="Close" onClick={onClose} />
        <Divider />
        <ExerciseVideo/>
      </ModalContainer>
    </Overlay>
  );
}

TheraExerciseModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default TheraExerciseModal;
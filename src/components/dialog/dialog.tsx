import { Box, Modal, styled } from '@mui/material';
import React from 'react';

interface Props {
  openModal: boolean;
  handleCloseModal: (event: any, reason: 'backdropClick' | 'escapeKeyDown') => void;
  children?: string | React.ReactElement;
}

function Dialog(props: Props) {
  const style = {
    position: 'absolute',
    p: '60px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    overflowY: 'auto',
  };
  return (
    <ModalWrapper
      open={props.openModal}
      onClose={props.handleCloseModal}
      aria-labelledby='Download postcard'
      aria-describedby='Download postcard'
      data-testid='download-postcard-modal'
    >
      <Box sx={style}>{props.children}</Box>
    </ModalWrapper>
  );
}

const ModalWrapper = styled(Modal)`
  backdrop-filter: blur(80px);
  -webkit-backdrop-filter: blur(80px);
`;

export default Dialog;

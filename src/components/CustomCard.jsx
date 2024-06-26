import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const CustomCard = styled(Card)({
  borderRadius: '8px',
  backgroundColor: '#F6F6F6',
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  boxShadow: 'none',
  height: '200px', 
});

const ImageBox = styled(Box)(({ image }) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left',
  width: '109px', 
  height: '134px', 
  flex: '0 0 auto',
  marginRight: '16px',
}));

const ContentBox = styled(CardContent)({
  flex: '1 1 auto',
});

const CustomCardComponent = ({ title, text, image }) => {
  return (
    <CustomCard>
      <ImageBox image={image} />
      <ContentBox>
        <Typography  component="div" style={{ fontFamily: 'Montserrat', fontSize:'16px', color:'#777777', fontWeight:'600'}}>
          {title}
        </Typography>
        <Typography   style={{ fontFamily: 'Montserrat', fontSize:'12px', color:'#777777',  fontWeight:'400'}}>
          {text}
        </Typography>
      </ContentBox>
    </CustomCard>
  );
};

export default CustomCardComponent;

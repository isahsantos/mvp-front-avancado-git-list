import React from 'react';
import CustomCardComponent from '../components/CustomCard';
import anotherImage from '../assets/images/filter-banner.svg'; // Ajuste o caminho conforme necessário
import { Container } from '@mui/material';

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <CustomCardComponent 
        title="Encontre o portifólio do candidato desjado" 
        text="De maneira simples, sem toda a complexidade do github, acesse as informações do candidato que você escolheu " 
        image={anotherImage}
      />
    </Container>
  );
};

export default Home;

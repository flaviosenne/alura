import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../components/data/dados_iniciais.json'
import BainerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div style = {{background: '#141414'}}>
      <Menu />

      <BainerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={'O que é front-End? Trabalhando na area de TI'}
      />

      <Carousel 
      ignoreFirstVideo
       category = {dadosIniciais.categorias[0]}/>

      <Carousel
      category ={dadosIniciais.categorias[1]} />     

      <Carousel
      category ={dadosIniciais.categorias[2]} />     
      <Carousel
      category ={dadosIniciais.categorias[3]} />     
      <Carousel
      category ={dadosIniciais.categorias[4]} />     
      <Carousel
      category ={dadosIniciais.categorias[5]} />  

      <Footer/>    
    </div>
  );
}

export default Home;

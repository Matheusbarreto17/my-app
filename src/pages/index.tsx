import Head from "next/head";
import estilos from '@/styles/Home.module.css';
import { title } from "process";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers";

export default function Home() {
  return (
      
    <div className={estilos.container_principal}>

      <header>
        <p>React JS</p>
      </header>

      <main className={estilos.conteudo_principal}>

      <div className={estilos.container_topo}>
        <h1>
        React JS
        </h1>
        <p>Biblioteca JavaScript para criar SPAs</p>
        <a href='https://react.dev/' target="_blank">Site Oficial</a>
        </div>

      <section className={estilos.container_texto}>
        <h1>Requistos</h1>
        <p>Veja abaixo os requisitos minímos para aprender React JS</p>
        <div className={estilos.container_cards}> 
          <div>
            <h3>HTML</h3>
            <p>Aprender a estruturar os elememtos da página com HTML</p>
          </div>
          <div>
            <h3>CSS</h3>
            <p>Aprender a estilizar os elementos da página com CSS</p>
          </div>
          <div>
            <h3>Java Script</h3>
            <p>Aprender a linguagem utilzada pelo React JS, o Javascript</p>
          </div>
        </div>
        </section>
        </main>
        
        <footer>
          <p>Curso de introdução de React JS</p>
        </footer>
      </div>
  );
};
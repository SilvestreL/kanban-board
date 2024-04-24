import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o projeto: <span> Quadro Kanban</span>
      </h2>
      <p>
      Um projeto criado em React no front-end e Firebase no back-end que funciona como um quadro Kanban permite aos usuários criar, mover e gerenciar tarefas em colunas visuais para organização de fluxo de trabalho e gestão de projetos.
      </p>

    </div>
  );
};

export default About;

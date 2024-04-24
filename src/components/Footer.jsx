import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© 2024 Kanban Board. Todos os direitos reservados.</p>
        <p>Versão do aplicativo: 1.0.3</p>
      </div>
      <div className={styles.links}>
        <a href="/termos-de-servico">Termos de Serviço</a>
        <a href="/politica-de-privacidade">Política de Privacidade</a>
        <a href="/suporte">Suporte</a>
      </div>
      <div className={styles.socialMedia}>
        {/* Links para redes sociais */}
        <a href="http://facebook.com">Facebook</a>
        <a href="http://twitter.com">Twitter</a>
        <a href="http://instagram.com/lucassilvestrem">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;

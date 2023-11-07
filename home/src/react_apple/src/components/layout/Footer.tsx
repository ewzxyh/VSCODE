import styles from "./Footer.module.css";
import React from "react";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.warn}>
          * Available later this year on iPhone 15 Pro.<br />
          Testing conducted by Apple in May 2023 using preproduction Apple Vision Pro units and software. Testing consisted of full battery discharge while performing each of the following tasks: video playback, internet browsing, spatial video capture, and FaceTime. Video playback tested in conjunction with an Environment, using 2D movie content purchased from the Apple TV app. Internet browsing tested using 20 popular websites. FaceTime tested between two Apple Vision Pro units with Personas enabled. Tested with Wi-Fi associated to a network. Battery life depends on device settings, usage, network, environmental conditions, and many other factors. Battery tests are conducted using specific Apple Vision Pro units; actual results may vary.<br />
          Valid prescription required. Not all prescriptions are supported. Vision correction accessories are sold separately.<br />
          © 2023 TAKE-TWO INTERACTIVE SOFTWARE INC. All Rights Reserved.<br />
          © 2023 NBA Properties, Inc. All Rights Reserved. Officially Licensed Product of the National Basketball Association.<br />
          A subscription may be required for some services. Not all content may be available in all areas.<br />
          Everything Everywhere All At Once © 2022 A24 Distribution, LLC. All rights reserved.<br />
          Avatar: The Way of Water © 2022 20th Century Studios and TSG Entertainment Finance LLC.<br />
          Users must be 13 years or older.<br />
          Available early next year on apple.com and at Apple retail stores in the U.S.<br />
          This device has not been authorized as required by the rules of the Federal Communications Commission. This device is not, and may not be, offered for sale or lease, or sold or leased, until authorization is obtained.<br />
        </div>
        <div className={styles.lineStyle}></div>
        <div className={styles.footer_links}>
          <div className="row">
            <div className="links-wrapper-1 col-sm-12 col-md list-unstyled d-inline-block pr-5">
              <h3>Descobrir e Comprar</h3>
              <ul>
                <li>
                  <a href="#">Loja</a>
                </li>
                <li>
                  <a href="#">Mac</a>
                </li>
                <li>
                  <a href="#">iPad</a>
                </li>
                <li>
                  <a href="#">iPhone</a>
                </li>
                <li>
                  <a href="#">Watch</a>
                </li>
                <li>
                  <a href="#">AirPods</a>
                </li>
                <li>
                  <a href="#">TV e Casa</a>
                </li>
                <li>
                  <a href="#">AirTag</a>
                </li>
                <li>
                  <a href="#">Acessórios</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-2 col-sm-12 col-md list-unstyled d-inline-block pr-5">
              <h3>Entretenimento</h3>
              <ul>
                <li>
                  <a href="#">Apple One</a>
                </li>
                <li>
                  <a href="#">Apple TV+</a>
                </li>
                <li>
                  <a href="#">Apple Music</a>
                </li>
                <li>
                  <a href="#">Apple Arcade</a>
                </li>
                <li>
                  <a href="#">Apple Fitness+</a>
                </li>
                <li>
                  <a href="#">Apple Podcasts</a>
                </li>
                <li>
                  <a href="#">Apple Books</a>
                </li>
                <li>
                  <a href="#">Apple Store</a>
                </li>
              </ul>
              <h3>Sua conta</h3>
              <ul>
                <li>
                  <a href="#">Gerenciar seu Apple ID</a>
                </li>
                <li>
                  <a href="#">Conta da Apple Store</a>
                </li>
                <li>
                  <a href="#">iCloud.com</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-3 col-sm-12 col-md list-unstyled d-inline-block pr-5">
              <h3>Apple Store</h3>
              <ul>
                <li>
                  <a href="#">Encontre uma loja</a>
                </li>
                <li>
                  <a href="#">Genius Bar</a>
                </li>
                <li>
                  <a href="#">Today at Apple</a>
                </li>
                <li>
                  <a href="#">Apple Camp</a>
                </li>
                <li>
                  <a href="#">Apple Store App</a>
                </li>
                <li>
                  <a href="#">Financiamento</a>
                </li>
                <li>
                  <a href="#">Programa de Reciclagem da Apple</a>
                </li>
                <li>
                  <a href="#">Status do seu pedido</a>
                </li>
                <li>
                  <a href="#">Ajuda para comprar</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-4 col-sm-12 col-md list-unstyled d-inline-block pr-5">
              <h3>Para empresas</h3>
              <ul>
                <li>
                  <a href="#">Apple e negócios</a>
                </li>
                <li>
                  <a href="#">Comprar para a sua empresa</a>
                </li>
              </ul>
              <h3>Para a Educação</h3>
              <ul>
                <li>
                  <a href="#">Apple e Educação</a>
                </li>
                <li>
                  <a href="#">Comprar para Educação Básica</a>
                </li>
                <li>
                  <a href="#">Comprar para Faculdade</a>
                </li>
              </ul>
              <h3>Para a Saúde</h3>
              <ul>
                <li>
                  <a href="#">Apple e a Saúde</a>
                </li>
                <li>
                  <a href="#">Saúde no Apple Watch</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-5 col-sm-12 col-md list-unstyled d-inline-block pr-5">
              <h3>Valores da Apple</h3>
              <ul>
                <li>
                  <a href="#">Acessibilidade</a>
                </li>
                <li>
                  <a href="#">Educação</a>
                </li>
                <li>
                  <a href="#">Meio Ambiente</a>
                </li>
                <li>
                  <a href="#">Privacidade</a>
                </li>
                <li>
                  <a href="#">Responsabilidade dos fornecedores</a>
                </li>
              </ul>
              <h3>Sobre a Apple</h3>
              <ul>
                <li>
                  <a href="#">Newsroom</a>
                </li>
                <li>
                  <a href="#">Liderança da Apple</a>
                </li>
                <li>
                  <a href="#">Oportunidades de Carreira</a>
                </li>
                <li>
                  <a href="#">Investidores</a>
                </li>
                <li>
                  <a href="#">Ética e Compliance</a>
                </li>
                <li>
                  <a href="#">Eventos</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_line}>
            Outras formas de comprar: <a href="#">encontre uma Apple Store</a> ou{" "}
            <a href="#">revendedor Apple</a> na sua região. Ou ligue para 0800-761-0867. Rua Leopoldo Couto de Magalhães Jr., 700, 7º andar, Itaim Bibi. São Paulo, SP. CEP: 04542-000.
          </div>
          <div className="copyright-wrapper row mt-10">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright © 2023 Apple Inc. Todos os direitos reservados. Apple Computer Brasil Ltda. CNPJ: 00.623.904/0003-35          </div>
            <div className={styles.footer_links_terms}>
              <div className="col-sm-12 order-3 col-lg-6 order-lg-2">
                <ul>
                  <li>
                    <a href="#">Política de Privacidade</a>
                  </li>
                  <li>
                    <a href="#">Política de vendas</a>
                  </li>
                  <li>
                    <a href="#">Avisos legais</a>
                  </li>
                  <li>
                    <a href="#">Mapas do site</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
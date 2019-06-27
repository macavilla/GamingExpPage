import React from "react"

import Layout from "../components/layout"

//images
import badge from "../img/badge-i5.png"
import frequency from "../img/icon-freq.png"
import cores from "../img/icon-4-cores.png"
import threads from "../img/icon-threads.png"
import cache from "../img/icon-cache.png"
import locked from "../img/icon-locked.png"
import art from "../img/arte-casual.png"
//animation
import AnimationCasual from "../components/animationCasual"
// import AnimationCompetitive from "../components/animationCompetitive"
// import AnimationExtreme from "../components/animationExtreme"

export default () => (
  <Layout>
    <div className="wrapper casual">
      <section className="intro">
        <div className="headlines-wrapper">
          <h2>CASUAL</h2>
          <p>
            Tenha a vantagem com um processador Intel® Core™ i5, para uma
            experiência de jogo emocionante.
          </p>
        </div>

        <div className="processor-info">
          <div className="badges">
            <img src={badge} alt="Intel Core i5 8th Gen" />
          </div>
          <p>
            PROCESSADOR <br />
            INTEL® CORE™ i5
            <span className="blue">SÉRIE H</span>
          </p>
        </div>

        <div className="btn-wrapper">
          <a href="#" className="main-btn">
            Ver Produtos >
          </a>
        </div>
      </section>
      <section className="performance">
        <div className="bullets-wrapper">
          <h2>
            Performance de desktop, <br /> agora em um notebook.
          </h2>
          <ul>
            <li>
              Aproveite seus jogos favoritos com maior fluidez e sem
              travamentos.
            </li>

            <li>Jogue e transmita ao mesmo tempo.</li>

            <li>
              Longa duração da bateria com processadores eficientes em termos de
              energia.
            </li>
          </ul>
        </div>
        <div className="specs-wrapper">
          <table className="comparison">
            <caption>
              <span>i5-8400H</span>
              <img src={badge} alt="Intel Core i5 8th Gen" />
            </caption>
            <tbody>
              <tr className="row">
                <td className="left">
                  <div className="data-wrapper">
                    <p>
                      FREQUÊNCIA
                      <span className="blue">(BASE/MAX)</span>
                    </p>
                  </div>
                </td>
                <td className="right">
                  <div className="data-wrapper">
                    <div className="icon">
                      <img
                        className="frequency"
                        src={frequency}
                        alt="Frequency icon"
                      />
                    </div>

                    <p>
                      2.5 GHZ <br />
                      4.2 GHZ
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="row">
                <td className="left">
                  <div className="data-wrapper">
                    <p>CORES</p>
                  </div>
                </td>
                <td className="right">
                  <div className="data-wrapper">
                    <div className="icon">
                      <img className="cores" src={cores} alt="4 cores icon" />
                    </div>

                    <p>4</p>
                  </div>
                </td>
              </tr>
              <tr className="row">
                <td className="left">
                  <div className="data-wrapper">
                    <p>THREADS</p>
                  </div>
                </td>
                <td className="right">
                  <div className="data-wrapper">
                    <div className="icon">
                      <img
                        className="threads"
                        src={threads}
                        alt="4 cores icon"
                      />
                    </div>

                    <p>8</p>
                  </div>
                </td>
              </tr>
              <tr className="row">
                <td className="left">
                  <div className="data-wrapper">
                    <p>CACHE</p>
                  </div>
                </td>
                <td className="right">
                  <div className="data-wrapper">
                    <div className="icon">
                      <img className="cache" src={cache} alt="Cache icon" />
                    </div>

                    <p>
                      8 MB
                      <span className="smaller">SMART CACHE</span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="row">
                <td className="left">
                  <div className="data-wrapper">
                    <p>DESBLOQUEADO</p>
                  </div>
                </td>
                <td className="right">
                  <div className="data-wrapper">
                    <div className="icon">
                      <img className="locked" src={locked} alt="Cache icon" />
                    </div>

                    <p>NÃO</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="animation">
        <div className="animation-component-wrapper">
          <AnimationCasual />
        </div>
        {/* <div className="animation-component-wrapper"><AnimationCompetitive /></div>*/}
        {/* <div className="animation-component-wrapper"><AnimationExtreme /></div>*/}
      </section>
      <section className="art">
        <div className="art-wrapper">
          <img src={art} alt="Laptop y naves espaciales" />
        </div>
        <div className="btn-wrapper">
          <a href="#" className="main-btn">
            Ver Produtos >
          </a>
        </div>
      </section>
      <footer>
        <p className="legal">
          Os resultados do parâmetro de comparação (ou estimado) relatados acima
          podem precisar de revisão, quando testes adicionais forem realizados.
          Os resultados dependem das configurações da plataforma e de cargas de
          trabalho específicas utilizadas no teste e podem não ser aplicáveis a
          componentes, sistemas de computador ou cargas de trabalho de
          determinado usuário. Os resultados não são necessariamente
          representativos de outros parâmetros de comparação, e os resultados de
          outros parâmetros de comparação podem apresentar maior ou menor
          impacto decorrente das atenuações. <br />
          Os softwares e as cargas de trabalho utilizados nos testes de
          desempenho podem ter sido otimizados para o desempenho em
          processadores Intel®. Testes de desempenho, como SYSmark* e
          MobileMark*, são medidos usando sistemas específicos de computação,
          componentes, software, operações e funções. Qualquer mudança a
          qualquer um destes fatores pode fazer com que os resultados variem.
          Você deve consultar outras informações e testes de desempenho para
          poder avaliar por completo suas opções de compra, incluindo o
          desempenho daquele produto quando combinado a outros. Para mais
          informações, visite http://www.intel.com/benchmarks. <br />
          1. Frequência máxima do processador com a tecnologia Intel® Turbo
          Boost 2.0. <br />
          2. As características e benefícios das tecnologias Intel® dependem das
          configurações do sistema e podem precisar de hardware habilitado,
          software ou serviços de ativação. O desempenho pode variar dependendo
          das configurações do sistema. Nenhum sistema é absolutamente seguro.
          Verifique com seu fabricante ou revendedor, ou saiba mais
          em intel.com. <br />
          3-4. Performance results are based on testing as of [03/12/2018 and
          05/07/2018] and may not reflect all publicly available security
          updates. See configuration disclosure for details. No product can be
          absolutely secure. <br />
          Sistemas medidos: Intel® Core™ i7 8750H Processor, PL1=45W TDP, 6C12T,
          Turbo up to 4.2GHz on Pre-production OEM System, Graphics: NVIDIA GTX
          1070, Memory: 2x4GB DDR4, Storage: 256GB Intel® 760P SSD (PCIe), OS:
          Windows* 10 RS3 Build 1709, MCU 0x84 vs. Intel® Core™ i7 4720HQ
          Processor, PL1=47W TDP, 4C8T, Turbo up to 3.6GHz on ASUS System,
          Graphics: NVIDIA 960M, Memory: 2x4GB DDR4, Storage: HDD, OS: Windows*
          10 RS3 Build 1709, MCU 0x24. <br />
          3. Medido por uma Carga de trabalho de FPS em jogos, em um Intel®
          Core™ i7 8750H vs. Intel® Core™ i7 4720HQ. <br />
          4. Medido por uma Carga de trabalho de Mega-tasking em um Intel® Core™
          i7 8750H vs. Intel® Core™ i7 4720HQ.  <br />
          5. Altering clock frequency or voltage may damage or reduce the useful
          life of the processor and other system components and may reduce
          system stability and performance. Product warranties may not apply if
          the processor is operated beyond its specifications. Check with the
          manufacturers of system and components for additional details. <br />
          6. Performance results are based on testing as of March 9, 2018 and
          may not reflect all publicly available security updates. See
          configuration disclosure for details. No product can be absolutely
          secure. <br />
          As measured by Megatasking Workload Intel® Core™ i7+ 8700K Processor,
          PL1=95W TDP, 6C12T, Turbo up to 4.7GHz, Motherboard: ASUS Prime Z370A,
          Graphics: NVIDIA GTX 1080Ti, Memory: 2x4GB DDR4, Storage: 1TB Western
          Digital WD1003F2EX 7200RPM + 32GB Intel® Optane™ memory, OS: Windows*
          10 RS3 Build 1709, BIOS Version 609 with MCU 0x84. <br />
          Performance may vary by game title. Consult other sources of
          information to evaluate performance as you consider your purchase.{" "}
          <br />
          © 2019 Intel Corporation. Intel, o logo Intel, Intel Core e Intel
          Inside são marcas registradas da Intel Corporation nos Estados Unidos
          e/ou outros países. *Outros nomes e marcas podem ser de propriedade de
          terceiros. <br />
        </p>
      </footer>
    </div>
  </Layout>
)

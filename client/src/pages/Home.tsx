/*
 * Design reminder — referência Protocolo 369:
 * presell editorial minimalista, coluna única, fundo branco, Poppins,
 * leitura centralizada, imagem documental, destaques amarelo/vermelho
 * e um único CTA verde como foco de conversão.
 */

const CTA_HREF =
  "https://bio.foconodia.store/preclick?clickid=6a96fcc8e760aed3ef188118&rtkck=1788287107";

export default function Home() {
  return (
    <main className="page-shell" aria-labelledby="page-title">
      <section className="intro-section" aria-label="Seleção para o Protocolo 369">
        <h1 id="page-title">PARABÉNS, VOCÊ FOI SELECIONADO!</h1>

        <figure className="presell-visual">
          <img
            src="https://media.atomicatmedia.net/u/ULU8Te7wSudmR9r06rffEyJuiqd2/Pictures/naBaBb9575840.jpeg?quality=84"
            alt="Nikola Tesla ao lado de documentos históricos e do número 369"
            width="1600"
            height="890"
            loading="eager"
            fetchPriority="high"
          />
        </figure>
      </section>

      <section className="story-section" aria-label="Mensagem da seleção">
        <div className="story-copy">
          <p>
            <strong>Isso é um sinal do Universo para você!</strong>
          </p>

          <p>
            Nikola Tesla decodificou um código capaz de conectar qualquer pessoa à fonte inesgotável de prosperidade e abundância.
          </p>

          <p>
            <strong>Esse segredo foi mantido em silêncio por mais de 100 anos.</strong>
          </p>

          <p>
            Documentos foram arquivados, nomes poderosos tentaram apagar tudo... Mas agora, pela primeira vez, <strong className="name-highlight">Hiroshi Takeda</strong> revela tudo em uma live exclusiva.
          </p>

          <p>
            Mas tenho um aviso: <strong className="warning-highlight">Clique no botão abaixo somente se estiver pronto</strong>, pois o que vai ser revelado nesta live tem o poder de transformar qualquer ser humano em um verdadeiro imã de riqueza.
          </p>

          <p>Tem certeza que está pronto para isso?</p>
        </div>
      </section>

      <section className="cta-section" aria-label="Acesso à live">
        <a className="cta-link" href={CTA_HREF}>
          Sim, quero assistir a live
        </a>
      </section>
    </main>
  );
}

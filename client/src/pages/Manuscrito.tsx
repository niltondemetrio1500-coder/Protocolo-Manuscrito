import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Design reminder — variante da presell Protocolo 369:
 * mesma composição editorial minimalista, coluna única, fundo branco,
 * tipografia Poppins, imagem de produto em destaque e CTA verde único.
 */

const CTA_HREF = "https://manuscrito-indol.vercel.app/vsl.html";
const HERO_IMAGE = "/manus-storage/manuscrito-sagrado_0d5e249c.png";

export default function Manuscrito() {
  useEffect(() => {
    const scriptId = "google-analytics-gtag";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-E6PSY8S4C5";
      document.head.appendChild(script);
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", "G-E6PSY8S4C5");
  }, []);

  return (
    <main className="page-shell" aria-labelledby="page-title">
      <section className="intro-section" aria-label="Seleção para o Protocolo 369">
        <h1 id="page-title">PARABÉNS, VOCÊ FOI SELECIONADO!</h1>

        <figure className="presell-visual presell-visual--product">
          <img
            src={HERO_IMAGE}
            alt="Manuscrito Sagrado e materiais de orientação espiritual apresentados em capas douradas"
            width="800"
            height="800"
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
            Um manuscrito raro reúne palavras que iluminam caminhos, revelam novos horizontes e transformam destinos.
          </p>

          <p>
            <strong>Esse conhecimento foi guardado em silêncio por gerações.</strong>
          </p>

          <p>
            Agora, pela primeira vez, você poderá conhecer os ensinamentos do <strong className="name-highlight">Manuscrito Sagrado</strong> em uma apresentação exclusiva.
          </p>

          <p>
            Mas tenho um aviso: <strong className="warning-highlight">Clique no botão abaixo somente se estiver pronto</strong>, pois o que será revelado pode transformar a forma como você enxerga prosperidade e abundância.
          </p>

          <p>Tem certeza que está pronto para isso?</p>
        </div>
      </section>

      <section className="cta-section" aria-label="Acesso ao conteúdo">
        <a className="cta-link" href={CTA_HREF}>
          Sim, quero conhecer o manuscrito
        </a>
      </section>
    </main>
  );
}

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Design reminder — página Manuscrito Sagrado:
 * composição editorial minimalista, coluna única, fundo branco,
 * tipografia Poppins, imagem informativa em destaque e CTA verde único.
 */

const CTA_HREF = "https://manuscrito-indol.vercel.app/vsl.html";
const HERO_IMAGE = "https://raw.githubusercontent.com/niltondemetrio1500-coder/Protocolo-Manuscrito/main/assets/manuscrito-sagrado.webp";

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
      <section className="intro-section" aria-label="Apresentação do Manuscrito Sagrado">
        <h1 id="page-title">CONHEÇA O MANUSCRITO SAGRADO</h1>

        <figure className="presell-visual presell-visual--product">
          <img
            src={HERO_IMAGE}
            alt="Imagem ilustrativa do Manuscrito Sagrado e de materiais apresentados em capas douradas"
            width="800"
            height="800"
            loading="eager"
            fetchPriority="high"
          />
        </figure>
      </section>

      <section className="story-section" aria-label="Informações sobre o conteúdo">
        <div className="story-copy">
          <p>
            <strong>Uma apresentação sobre o Manuscrito Sagrado</strong>
          </p>

          <p>
            Esta página apresenta uma seleção de materiais reunidos sob o nome Manuscrito Sagrado.
          </p>

          <p>
            <strong>Conheça a proposta e os materiais apresentados.</strong>
          </p>

          <p>
            Veja informações adicionais sobre o <strong className="name-highlight">Manuscrito Sagrado</strong> na apresentação disponível no próximo passo.
          </p>

          <p>
            Para continuar, <strong className="warning-highlight">clique no botão abaixo</strong> e acesse a apresentação completa.
          </p>

          <p>Deseja conhecer mais detalhes?</p>
        </div>
      </section>

      <section className="cta-section" aria-label="Acesso ao conteúdo">
        <a className="cta-link" href={CTA_HREF}>
          Quero conhecer o conteúdo
        </a>
      </section>
    </main>
  );
}

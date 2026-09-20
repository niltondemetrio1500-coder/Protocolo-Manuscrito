import { useEffect } from "react";

const CTA_HREF = "https://protocolo369-b49hylzq.manus.space/";
const COMPANY_NAME = "ADRIANA CARLOS FERREIRA SOCIEDADE INDIVIDUAL DE ADVOCACIA";
const CNPJ = "51.233.264/0001-26";
const CONTACT_EMAIL = "andremonteiro@gmail.com";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

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
    <main className="reference-page">
      <section className="reference-hero" aria-labelledby="page-title">
        <h1 id="page-title">Clique aqui para assistir de forma gratuita.</h1>
        <a className="reference-cta" href={CTA_HREF}>
          Quero assistir
        </a>
      </section>

      <footer className="reference-footer">
        <p>{COMPANY_NAME} - CNPJ: {CNPJ} - E-mail: {CONTACT_EMAIL}</p>
        <nav aria-label="Links legais">
          <a href="/termos">Termos de Uso</a>
          <span aria-hidden="true"> | </span>
          <a href="/politica-de-privacidade">Política de Privacidade</a>
        </nav>
      </footer>
    </main>
  );
}

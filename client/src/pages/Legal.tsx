import { Link } from "wouter";

const COMPANY_NAME = "ADRIANA CARLOS FERREIRA SOCIEDADE INDIVIDUAL DE ADVOCACIA";
const CNPJ = "51.233.264/0001-26";
const CONTACT_EMAIL = "andremonteiro@gmail.com";

function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="legal-page">
      <article className="legal-card">
        <Link href="/" className="legal-back">← Voltar para a página inicial</Link>
        <p className="legal-eyebrow">{COMPANY_NAME}</p>
        <h1>{title}</h1>
        <p className="legal-updated">Última atualização: 20 de setembro de 2026</p>
        {children}
        <div className="legal-footer">
          <p><strong>CNPJ:</strong> {CNPJ}</p>
          <p><strong>Contato:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        </div>
      </article>
    </main>
  );
}

export function Terms() {
  return (
    <LegalLayout title="Termos de Uso">
      <h2>1. Aceitação</h2>
      <p>Ao acessar este site, você declara que leu e compreendeu estes Termos de Uso. Caso não concorde com alguma disposição, interrompa a navegação.</p>

      <h2>2. Finalidade do site</h2>
      <p>Este site apresenta informações sobre o conteúdo denominado Manuscrito Sagrado e disponibiliza um botão de acesso a uma apresentação hospedada em ambiente externo. O conteúdo é disponibilizado para fins informativos.</p>

      <h2>3. Uso adequado</h2>
      <p>Você concorda em utilizar o site de forma lícita, sem tentar comprometer seu funcionamento, acessar áreas não autorizadas, praticar fraude ou violar direitos de terceiros.</p>

      <h2>4. Links externos</h2>
      <p>O site pode direcionar você para páginas de terceiros. Esses ambientes possuem suas próprias regras, políticas e responsabilidades. Recomendamos que você leia os documentos apresentados no destino antes de prosseguir.</p>

      <h2>5. Propriedade intelectual</h2>
      <p>Textos, elementos visuais, marcas e demais materiais deste site são protegidos pela legislação aplicável. A reprodução ou utilização comercial sem autorização prévia não é permitida.</p>

      <h2>6. Disponibilidade</h2>
      <p>Buscamos manter o site disponível e atualizado, mas não garantimos funcionamento ininterrupto, ausência de erros ou disponibilidade permanente de páginas externas.</p>

      <h2>7. Alterações</h2>
      <p>Estes termos podem ser atualizados para refletir mudanças no site ou na legislação. A versão vigente será sempre a publicada nesta página.</p>

      <h2>8. Contato</h2>
      <p>Em caso de dúvidas sobre estes termos, escreva para <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    </LegalLayout>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Política de Privacidade">
      <h2>1. Compromisso com a privacidade</h2>
      <p>Esta Política explica, de forma transparente, como tratamos informações durante a navegação neste site, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), quando aplicável.</p>

      <h2>2. Dados tratados</h2>
      <p>Podemos tratar dados técnicos e de navegação, como endereço IP, tipo de dispositivo, navegador, páginas acessadas, data e horário de acesso e informações aproximadas de origem. Não solicitamos, nesta página, dados pessoais sensíveis nem informações de pagamento.</p>

      <h2>3. Finalidades e base legal</h2>
      <p>Os dados podem ser utilizados para disponibilizar e proteger o site, compreender seu desempenho, medir audiência e melhorar a experiência de navegação. Quando utilizamos ferramentas de análise, o tratamento se fundamenta no legítimo interesse ou no consentimento, conforme a configuração aplicável e a legislação.</p>

      <h2>4. Google Analytics</h2>
      <p>Este site utiliza Google Analytics para obter métricas de acesso e desempenho. A ferramenta pode utilizar cookies e tecnologias semelhantes. Para mais informações, consulte as políticas do Google e as configurações de privacidade do seu navegador.</p>

      <h2>5. Cookies</h2>
      <p>Cookies podem ser utilizados para funcionamento, segurança, medição de audiência e preferências. Você pode bloquear ou excluir cookies nas configurações do navegador, embora isso possa afetar alguns recursos.</p>

      <h2>6. Compartilhamento e links externos</h2>
      <p>Podemos utilizar fornecedores de tecnologia necessários à operação do site e direcionar você para serviços externos. Não vendemos seus dados pessoais. Terceiros podem tratar dados de acordo com suas próprias políticas.</p>

      <h2>7. Retenção e segurança</h2>
      <p>Conservamos informações pelo tempo necessário às finalidades descritas ou ao cumprimento de obrigações legais. Adotamos medidas razoáveis de segurança, mas nenhum serviço conectado à internet é completamente livre de riscos.</p>

      <h2>8. Direitos do titular</h2>
      <p>Nos limites da legislação, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, eliminação, portabilidade e informações sobre compartilhamento. Para exercer seus direitos, envie uma solicitação para <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>

      <h2>9. Atualizações e contato</h2>
      <p>Esta política pode ser atualizada. A versão vigente será publicada nesta página. Para dúvidas sobre privacidade, entre em contato pelo e-mail informado acima.</p>
    </LegalLayout>
  );
}

export default Terms;

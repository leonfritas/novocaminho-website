
export const WhatsAppButton = (props) => {
  return (
    <a
      href="https://wa.me/5592984092632?text=Ol%C3%A1!%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <picture>
        <source media="(max-width: 69px)" srcSet="/img/wppicon.jpg" />          
        <img className="wppicon" src="/img/wppicon.jpg" alt="Icone whatsapp" />
      </picture>
    </a>

  );
};

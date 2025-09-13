export const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <picture>
          <source media="(max-width: 768px)" srcSet="/img/intro-bg-responsivo.jpg" />
          <source media="(min-width: 769px)" srcSet="/img/intro-bg.jpg" />
          <img className="banner" src="/img/intro-bg.jpg" alt="Banner" />
        </picture>
      </div>
    </header>
  );
};

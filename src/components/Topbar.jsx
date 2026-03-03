export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <p className="topbar-text" data-i18n="topbar.text">✨ Cupos disponibles este mes</p>
        <a className="topbar-link magnetic" href="#contacto" data-i18n="topbar.link">Hablemos</a>
      </div>
    </div>
  );
}
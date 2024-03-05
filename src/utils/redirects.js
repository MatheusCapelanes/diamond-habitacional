export function redirects() {
  return {
    seoCheck(currentRoute) {
      switch (currentRoute) {
        case "/residencialsafira-projeto":
          window.location.replace("/projetos/residencial-safira");
          break;
        case "/residencial-topazio":
          window.location.replace("/projetos/residencial-topazio");
          break;
        case "/acompanhe-a-obra":
          window.location.replace("/noticias");
          break;
        case "/residencialsafira-obras":
          window.location.href = "/noticias";
          break;
        case "/residencialtopazio-obras": 
          window.location.href = "/noticias";
          break;
        default:
          break;
      }
    }
  }
}

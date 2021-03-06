import { defineConfig } from "vitepress";

let guideSidebar = [
  {
    text: "Equipo",
    collapsible: true,
    items: [
      { text: "Hardware", link: "/equipo/hardware" },
      {
        text: "Instalación del SO encriptado",
        link: "/equipo/sistema-encriptado",
      },
      {
        text: "Configuración del router y dominio",
        link: "/equipo/router-dominio",
      },
      {
        text: "Gestión remota con SSH",
        link: "/equipo/gestion-remota",
      },
      { text: "Nginx y docker", link: "/equipo/nginx-docker" },
    ],
  },
  {
    text: "Servicios",
    collapsible: true,
    items: [
      { text: "Minecraft con AMP", link: "/servicios/minecraft" },
      {
        text: "Dozzle - Visualizador de logs",
        link: "/servicios/dozzle",
      },
      { text: "Homarr - Dashboard", link: "/servicios/homarr" },
      { text: "Uptime Kuma - Status", link: "/servicios/uptime-kuma" },
      { text: "Authentik - Autenticación", link: "/servicios/authentik" },
      {
        text: "Nextcloud - Almacenamiento",
        link: "/servicios/nextcloud",
      },
      { text: "Gitea - Servicio git", link: "/servicios/gogs" },
    ],
  },
];

export default defineConfig({
  title: "Servidor mamadísimo",
  description: "Guía del servidor.",
  lang: "es-ES",
  base: "/server/",
  lastUpdated: true,
  // markdown: {
  //   theme: "solarized-dark",
  // },
  themeConfig: {
    lastUpdatedText: "Actualizado por última vez",
    nav: [
      { text: "Inicio", link: "/", activeMatch: "" },
      {
        text: "Guía del servidor",
        link: "/equipo/hardware",
        activeMatch: "/(equipo|servicios)/",
      },
      {
        text: "Archivos de configuración",
        link: "https://github.com/ComicIvans/server",
      },
    ],
    socialLinks: [{ icon: "discord", link: "https://discord.gg/YdnmG5v8" }],
    sidebar: {
      "/equipo/": guideSidebar,
      "/servicios/": guideSidebar,
    },
    footer: {
      message: "Distribuido bajo la licencia CC BY.",
      copyright:
        "Copyright © 2022-presente Lucas de Uña Ocampo e Iván Salido Cobo",
    },
  },
});

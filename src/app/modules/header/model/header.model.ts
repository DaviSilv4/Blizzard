export interface HeaderModel{
  logo: string;
  navigationMenu: NavigationHeaderModel;
  criarConta: ButtonHeader;
  login: ButtonHeader;
}

export interface NavigationHeaderModel{
  jogos: MenuModel;
  esportes: MenuModel;
  loja: string;
  noticias: string;
  suporte: string;
}

export interface MenuModel{
  nameNavigation: string;
  iconJogo?: string;
}

export interface ButtonHeader{
  description: string;
  iconButton?: string;
}

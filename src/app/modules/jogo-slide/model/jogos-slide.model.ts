export interface JogosSlideModel{
  listGames: listGamesModel[];
  title: string;
  paragraph: string;
  buttonDiscription: string;
  backgorundImage: string;
  containerImageGame: PlayGameModel;
}

export interface listGamesModel{
 imageGames: string;
 active: boolean;
}

export interface PlayGameModel{
  logoGames: string;
  imageGames: string;
  videoGames: string;
}

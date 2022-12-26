export interface JogosSlideModel{
  listGames: listGamesModel[];
  title: string;
  paragraph: string;
  buttonDiscription: string;
}

export interface listGamesModel{
 imageGames: string;
 active: boolean;
}

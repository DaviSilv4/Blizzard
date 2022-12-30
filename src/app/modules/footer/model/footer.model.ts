export interface FooterModel{
  logo: string;
  subtitle: string;
  info: InfooModel[];
  button: ButtonFooterModel;
  mobile: MobileFooterModel;
  image: ImageFooterModel;
}

export interface InfooModel{
  icon: string;
  description: string;
}

export interface ButtonFooterModel{
  imageButton: string;
  buttonDescription: string;
}

export interface MobileFooterModel{
  imageMobile: string;
  mobileDescription: string;
}

export interface ImageFooterModel{
  backgroundImage: string;
  imageContainer: string;
}

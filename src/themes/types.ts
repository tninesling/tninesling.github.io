export interface Theme {
  breakpoints: Array<string>;
  colors: ColorPalette;
  fonts: {
    body: string;
    heading: string;
  };
  text: {
    heading: {
      fontFamily: string;
    };
    body: {
      fontFamily: string;
      color: string;
    };
  };
}

export interface ColorPalette {
  deskColor: string;
  footerBackgroundColor: string;
  hancockHighlight: string;
  hancockShadow: string;
  hancockShadowDark: string;
  moonColor: string;
  primaryBackgroundColor: string;
  prudentialHighlight: string;
  prudentialShadow: string;
  secondaryBackgroundColor: string;
  skyColor: string;
  textColor: string;
  wallColor: string;
}

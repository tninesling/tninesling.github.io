export interface Theme {
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
  footerBackgroundColor: string;
  hancockHighlight: string;
  hancockShadow: string;
  hancockShadowDark: string;
  primaryBackgroundColor: string;
  prudentialHighlight: string;
  prudentialShadow: string;
  secondaryBackgroundColor: string;
  skyColor: string;
  textColor: string;
  wallColor: string;
}

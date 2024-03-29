import { extendTheme, useMediaQuery } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#fbe9e7",
      100: "#ffccbc",
      200: "#ffab91",
      300: "#ff8a65",
      400: "#ff6f42",
      500: "#ff5621",
      600: "#f6501d",
      700: "#e84918",
      800: "#da4114",
      900: "#c1340a",
    },
  },
  fonts: {
    heading: `"Merriweather", sans-serif`,
    // heading: `"Poppins", sans-serif`,
    body: `"Poppins", sans-serif`,
    // body: `"Inter", sans-serif`,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      "html, body": {
        color: props.colorMode === "dark" ? "white" : "gray.800",
        fontSize: 16,
      },
      html: {
        scrollBehavior: "smooth",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "full",
      },
      sizes: {
        md: {
          fontSize: "md",
          px: 10,
          minH: "50px",
          minW: "50px",
        },
      },
    },
  },
});

export default theme;

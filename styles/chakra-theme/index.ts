import { extendTheme } from "@chakra-ui/react";
import { Raleway, Abril_Fatface } from "@next/font/google";

const abril = Abril_Fatface({ weight: ["400"], subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        ...abril.style,
      },
    },
    Text: {
      baseStyle: {
        ...raleway.style,
      },
    },
    Button: {
      baseStyle: {
        ...raleway.style,
      },
      variants: {
        purple: {
          backgroundColor: "#5226ba",
          boxShadow: "0 4px 14px 0 rgb(81 47 184 / 39%)",
          color: "white",
        },
      },
    },
  },
});

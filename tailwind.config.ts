import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Primary Neon Colors
        neonGreen: "#39FF14",
        neonPink: "#FF3F8E",
        neonBlue: "#00FFFF",
        neonPurple: "#A700FF",
        neonYellow: "#F4FF00",
        neonOrange: "#FF6F00",

        // Background Colors
        darkBackground: "#121212", // Overall dark background
        darkCard: "#29282f", // Card background
        darkSurface: "#403f45", // Surface color for components
        darkAccent: "#8c8c90", // Accented areas

        // Text Colors
        darkText: "#E94560", // Light text color for dark mode
        mutedText: "#B0B0B0", // Muted text color
        linkText: "#39FF14", // Link text color
        headingText: "#FFFFFF", // Headings

        // Border Colors
        borderLight: "#B0B0B0", // Light border color
        borderDark: "#3D3D3D", // Dark border color
        neonBorder: "#FF3F8E", // Neon border color

        // Hover Colors
        hoverNeonGreen: "#28B800", // Darker green for hover
        hoverNeonPink: "#FF1A6D", // Darker pink for hover
        hoverNeonBlue: "#00B3B3", // Darker blue for hover
        hoverNeonPurple: "#c038ff", // Darker purple for hover

        // Status Colors
        success: "#00FF7F", // Success messages
        error: "#FF4500", // Error messages
        warning: "#FFD700", // Warning messages
        info: "#1E90FF", // Info messages

        // Shades
        darkShade1: "#121212", // Dark shade 1
        darkShade2: "#1A1A1A", // Dark shade 2
        darkShade3: "#232323", // Dark shade 3
        lightShade1: "#F5F5F5", // Light shade 1
        lightShade2: "#E0E0E0", // Light shade 2

        // Accent Colors
        accent1: "#FF4500", // Accent color 1
        accent2: "#32CD32", // Accent color 2
        accent3: "#FF69B4", // Accent color 3

        // Neutral Colors
        neutralLight: "#F5F5F5", // Light neutral
        neutralDark: "#303030", // Dark neutral
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "0",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(-25%)" },
          "50%": { transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        bounce: "bounce 1s infinite",
        pulse: "pulse 2s infinite",
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        slideIn: "slideIn 0.5s ease-in-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    nextui(),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;

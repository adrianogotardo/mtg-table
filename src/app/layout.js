import { Inter } from "next/font/google";
import "./css/reset.css";
import "./css/globals.css";
import StyledComponentsRegistry from './lib/registry';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MTG Table",
  description: "Virtual table to playtest Magic: The Gathering decks with your friends online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

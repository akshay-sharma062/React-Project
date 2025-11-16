import Providers from "./store/Providers"

export const metadata = {
  title: "Todo App",
  description: "Redux Toolkit Todo App",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

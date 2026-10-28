import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Checkpoint 6 - FIAP",
  description: "Checkpoint 6 - FIAP",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-br from-green-200 to-blue-500 p-8 flex items-center justify-center flex-col">
          <header className="text-center text-gray-800">
            <h1 className="text-4xl font-bold mb-4">Pokémon TCG Explorer</h1>
            <p className="text-lg">Descubra cartas e detalhes de Pokémon</p>
          </header>
          
          <main className="mt-8">
            {children}
          </main>
          
          <footer className="text-center mt-12 text-gray-600">
            <p>Júlio César Iwata - RM XXXXX © 2026 Pokémon TCG Explorer</p>
          </footer>
        </div>
      </body>
    </html>
  )
}

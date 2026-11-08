import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata={title:{default:'Banco de Receita Sustentável',template:'%s | Banco de Receita Sustentável'},description:'Receitas brasileiras para aproveitar melhor os ingredientes e reduzir o desperdício em casa.',icons:{icon:'/favicon.svg'}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}

import type { Config } from 'tailwindcss'
const config: Config = { content: ['./src/**/*.{ts,tsx}'], theme: { extend: { colors: { orange: { brand: '#F97316', dark: '#EA580C', soft: '#FDBA74' }, cream: '#FFF7ED', leaf: '#4D7C0F', ink: '#292524' }, fontFamily: { sans: ['var(--font-inter)', 'Arial', 'sans-serif'], display: ['var(--font-fraunces)', 'Georgia', 'serif'] }, boxShadow: { warm: '0 16px 40px rgba(124, 45, 18, .09)' } } }, plugins: [] }
export default config

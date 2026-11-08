import data from '@/data/receitas.json'
import type { Receita, Categoria } from '@/types/receita'
export const receitas = data as Receita[]
export const categorias: Categoria[] = ['Café da manhã','Almoço','Jantar','Lanches','Sobremesas']
export function getReceita(slug:string){ return receitas.find(r=>r.slug===slug) }

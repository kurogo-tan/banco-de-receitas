export type Categoria = 'Café da manhã' | 'Almoço' | 'Jantar' | 'Lanches' | 'Sobremesas'
export type Receita = { slug:string; titulo:string; descricao:string; categoria:Categoria; tempo:number; porcoes:number; imagem:string; alt:string; ingredientes:{quantidade:string; nome:string}[]; preparo:string[]; dica:string; reaproveita:string[] }

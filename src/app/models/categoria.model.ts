export interface Categoria {
    idCategoria: string;
    nomeCategoria: string;
    descricaoCategoria: string;
    subcategorias: SubCategoria[];
}

export interface SubCategoria {
    idSubCategoria: string;
    nomeSubcategoria: string;
    descricaoSubcategoria: string;
}

export enum CategoriaEnum {
    Tecnologia = 1,
    ServicosGerais = 2,
    Lanches = 3,
    Transporte = 4,
    Vendas = 5,
    Barbearias = 6,
    Tudo = 7
}
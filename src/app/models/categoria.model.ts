export interface Categoria {
    categoriaEnum: CategoriaEnum;
    nome: string;
    descricao: string;
    subcategorias: Subcategoria[];
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

export interface Subcategoria {
    subCategoriaEnum: number;
    nome: string;
    descricao: string;
}
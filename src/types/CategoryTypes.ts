export interface ISubCategories {
  id: number;
  name: string;
  // products: IProducts[]; // todo
}

export interface ICategoriesOld {
  id: number;
  name: string;
  subCategories: ISubCategories[];
}

export interface ISuperCategories {
  id: number;
  name: string;
  categories: ICategoriesOld[];
}

export interface ISuperCategory {
  id: string;
  ru: string;
}

export interface ISubCategory {
  id: string;
  parent_id: string;
  ru: string;
}

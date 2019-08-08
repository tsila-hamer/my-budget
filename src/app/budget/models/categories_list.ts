import { ICategory } from './category';

export class CategoriesList {
	categories_list: {categories: ICategory[]};

	constructor(private categoriesList?: ICategory[]) {
        this.categories_list = categoriesList ?
        {
         categories: categoriesList
        }
        : {
          categories: []
        } 
	}

	get categories(): ICategory[] {
		return this.categories_list['categories'];
	}
	
}
import {ICategoriesRepository} from "../../repositories/implementations/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {
    }

    execute({name, description}: IRequest): void {
        const categpruAlreadyExists = this.categoriesRepository.findByName(name);

        if(categpruAlreadyExists) {
            throw new Error("Category already exists!");
        }

        this.categoriesRepository.create({name, description});
    }
}

export {CreateCategoryUseCase}
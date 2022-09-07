import {Router} from "express";
import {CategoriesRepository} from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
    const {name, description} = req.body;
    const categpruAlreadyExists = categoriesRepository.findByName(name);

    if(categpruAlreadyExists) {
        return res.status(400).json({error: "Category Already exists!"});
    }

    categoriesRepository.create({name, description});
    return res.status(201).send();
});

categoriesRoutes.get('/', (req, res) => {
    const all = categoriesRepository.list();

    return res.status(201).json(all);
});

export {categoriesRoutes};
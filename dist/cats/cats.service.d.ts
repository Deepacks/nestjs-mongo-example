import { Model } from 'mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
export declare class CatsService {
    private catModel;
    constructor(catModel: Model<CatDocument>);
    create(CreateCatDto: CreateCatDto): Promise<Cat>;
    findAll(): Promise<Cat[]>;
}

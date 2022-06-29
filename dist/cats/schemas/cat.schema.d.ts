import Document from 'mongoose';
export declare type CatDocument = Cat & Document;
export declare class Cat {
    name: string;
    age: number;
    breed: string;
}
export declare const CatSchema: Document.Schema<Cat, Document.Model<Cat, any, any, any, any>, {}, {}, any, {}, "type", Cat>;

import { Prop, Schema, SchemaFactory, PropOptions } from '@nestjs/mongoose';
import Document from 'mongoose';

export type CatDocument = Cat & Document;

const propsOptions: PropOptions = { required: true };

@Schema()
export class Cat {
  @Prop(propsOptions)
  name: string;

  @Prop(propsOptions)
  age: number;

  @Prop(propsOptions)
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

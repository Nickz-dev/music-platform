import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as moongoose from 'mongoose';
import { Track } from './track.schema';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {

    @Prop()
    username: string;

    @Prop()
    text: string;

    //Сохранение ссылки на объект
    @Prop({type: [{type: moongoose.Schema.Types.ObjectId, ref: 'Track'}]})
    track: Track;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
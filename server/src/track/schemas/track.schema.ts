import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as moongoose from 'mongoose';

export type TrackDocument = Track & Document;

@Schema()
export class Track {

    @Prop()
    name: string;

    @Prop()
    artist: string;

    @Prop()
    text: string;

    @Prop()
    listens: number;

    @Prop()
    picture: string;

    @Prop()
    audio: string;
    // сохранение ссылки на массив
    @Prop({type: [{type: moongoose.Schema.Types.ObjectId, ref: 'Comment' }]})
    comments: Comment[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);
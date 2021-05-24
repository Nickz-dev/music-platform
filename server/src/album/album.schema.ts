import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as moongoose from 'mongoose';
import { Track } from 'src/track/schemas/track.schema';

export type AlbumDocument = Album & Document;

@Schema()
export class Album {

    @Prop()
    name: string;

    @Prop()
    author: string;

    @Prop()
    text: string;

    @Prop()
    listens: number;

    @Prop()
    picture: string;

    // сохранение ссылки на массив
    @Prop({type: [{type: moongoose.Schema.Types.ObjectId, ref: 'Track' }]})
    track: Track[]
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
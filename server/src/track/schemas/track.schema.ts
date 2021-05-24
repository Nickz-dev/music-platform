import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as moongoose from 'mongoose';

export type TrackDocument = Track & Document;

@Schema()
export class Track {
    @Prop()
    id: number;

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

    @Prop({type: [{type: moongoose.Schema.Types.ObjectId, ref: 'Comment' }]})
    comment: Comment[]
}

export const TrackSchema = SchemaFactory.createForClass(Track);
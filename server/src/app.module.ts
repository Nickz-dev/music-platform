import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AlbumModule } from "./album/album.module";
import {TrackModule} from "./track/track.module";


@Module({
  imports: [
      MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.cgoen.mongodb.net/music-platform?retryWrites=true&w=majority'),
      AlbumModule,
      TrackModule
  ]
})

export class AppModule {}
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {Album, AlbumDocument} from "./album.schema";
import {CreateAlbumDto} from "./dto/create-album.dto";

@Injectable()

export class AlbumService {
    constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>) {
    }

    async create(dto: CreateAlbumDto): Promise<Album> {
        const album = await this.albumModel.create({...dto, listens: 0})
        return album;
    }

    async getAll() : Promise<Album[]> {
        const albums = await this.albumModel.find()
        return albums;
    }


    async getOne(id: ObjectId) : Promise<Album> {
        const album = await this.albumModel.findById(id)
        return album;
    }

    async delete(id: ObjectId) : Promise<ObjectId> {
        const album = await  this.albumModel.findByIdAndDelete(id)
        return album._id;
    }
}
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
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

    // Страница детального описания альбома
    async getOne() {

    }

    async delete() {

    }
}
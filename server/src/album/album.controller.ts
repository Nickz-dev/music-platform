import {Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { AlbumService } from "./album.service";
import { CreateAlbumDto } from "./dto/create-album.dto";


@Controller('/album')
export class AlbumController {
    constructor(private albumService: AlbumService) { }


    @Post()
    create(@Body() dto: CreateAlbumDto) {
        return this.albumService.create(dto)
    }
    @Get()
    getAll() {
        return this.albumService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.albumService.getOne(id)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.albumService.delete(id)
    }

}
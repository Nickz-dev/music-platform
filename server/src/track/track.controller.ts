import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import { ObjectId } from "mongoose";
import { CreateTrackDto } from "./dto/create-track.dto";
import { TrackService } from "./track.service";


@Controller('/tracks')

export class TrackController {
    constructor(private trackService: TrackService) {  }

    @Post()
    //dto получаем из тела запроса
    create(@Body() dto: CreateTrackDto) {
        return this.trackService.create(dto)
    }
    @Get()
    getAll() {
        return this.trackService.getAll()
    }

    // Страница детального описания трека
    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.trackService.getOne(id)
    }

    delete() {

    }
}
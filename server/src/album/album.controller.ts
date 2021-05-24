import { Controller, Get } from "@nestjs/common";


@Controller('/album')
export class AlbumController {

    create() {

    }
    @Get()
    getAll() {
        return 'TEST'
    }

    // Страница детального описания альбома
    getOne() {

    }

    delete() {

    }

}
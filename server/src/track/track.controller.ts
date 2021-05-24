import {Controller, Get} from "@nestjs/common";


@Controller('/tracks')

export class TrackController {

    create() {

    }
    @Get()
    getAll() {
        return 'WORK'
    }

    // Страница детального описания трека
    getOne() {

    }

    delete() {

    }
}
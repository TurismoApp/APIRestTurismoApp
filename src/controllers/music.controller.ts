import { Controller, Get } from "@nestjs/common";
import { MusicService } from "src/services/getMusic.service";

@Controller('Music')
export class MusicController {
    constructor(
        private musicService: MusicService
    ) {}

    @Get('Canciones')
    async getTopCanciones() {
        return this.musicService.getTopCanciones();
    }

    @Get('Albumes')
    async getTopAlbumes() {
        return this.musicService.getTopAlbumes();
    }

    @Get('Artistas')
    async getTopArtistas() {
        return this.musicService.getTopArtistas();
    }
} 
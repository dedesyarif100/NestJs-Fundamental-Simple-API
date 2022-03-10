import { Body, Controller, Delete, Get, Param, Post, Put, Query, Render, Request, UseGuards } from '@nestjs/common';
import { FilekitaService } from './filekita.service';
import { FilekitaDTO } from './filekita.dto';
// import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('filekita')
export class FilekitaController {
    constructor(
        private authService: AuthService,
        private FilekitaService: FilekitaService,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('jsondata')
    async lihatOutput(@Query() query) {
        let page = query.page;
        let limit = 10;
        let offset = page * 10;
        offset = offset - limit;
        return { data: await this.FilekitaService.showAll(page, limit, offset) };
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    @Render('filekita/index')
    root() {
        // return 'TEST 123';
        return { message: 'Hai sang juara!', title: 'Index Filekita' };
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    membuatRecord(@Body() data: FilekitaDTO) {        
        return this.FilekitaService.create(data);
    }

    // @Get('service')
    // lihatSemua() {
    //     return this.FilekitaService.lihatSemua();
    // }
    
    // @Get(':id')
    // lihatDetail(@Param('id') id: string): string {
    //     return `ini controller detail ${id}`;
    // }

    @Get(':id')
    lihatDetail(@Param('id') id: string) {
        return this.FilekitaService.lihatPerRecord(id);
    }

    @Put(':id')
    updateDetail(@Param('id') id: string, @Body() data: Partial<FilekitaDTO> ) {
        return this.FilekitaService.update(id, data);
    }

    @Delete(':id')
    menghapusRecord(@Param('id') id: string) {
        return this.FilekitaService.hapusData(id);
    }
}
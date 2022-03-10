import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) {}

    @Get()
    lihatOutput(): string {
        return 'ini controller user';
    }

    @Get('service')
    lihatSemua() {
        return this.UsersService.lihatSemua();
    }
}
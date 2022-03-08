import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    lihatSemua() {
        return "ini di user service";
    }
}
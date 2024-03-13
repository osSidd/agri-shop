import { Controller, Get, HttpCode, Param, Post, Query, Redirect, Req } from "@nestjs/common";

@Controller('user')
export class UserController{
    @Get('/')
    getAllUsers():string{
        return 'Get all users'
    }

    // @Get('/:id')
    // getAUser(@Param('id') id: string, @Query('name') name: string){
    //     return `${id} ${name}`
    // }

    @Get('ab*cd')
    @Redirect('https://github.com/osSidd')
    getany(){
        return 'matches any'
    }

    @Post('/')
    @HttpCode(404)
    createUser():string{
        return 'new user created'
    }
}
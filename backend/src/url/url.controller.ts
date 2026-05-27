import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Res,
    Query

} from '@nestjs/common' ;

import {UrlService} from './url.service';
import type { Response} from 'express' 

@Controller()
export class UrlController {
    constructor(private  readonly urlService: UrlService ) {}

    @Post('shorten')
    async shorten(@Body('longUrl') longUrl:string){
        const url=  await this.urlService.createShortUrl(longUrl);

        return  url ;
    }


    @Get('urls')
    async getAllUrls(){
        const urls =  await this.urlService.getAllUrls();
        return urls ;
    }

    @Get('check')
    async checkUrl(@Query('url') url:string)
    {
        const isValid = await this.urlService.checkUrl(url);
        return {valid:isValid}
    }
    
    @Get(':shortCode')
    async redirect(@Param('shortCode') shortCode:string ,  @Res() res:Response)
    {
        const url = await this.urlService.getOriginalUrl(shortCode);
        return res.redirect(url.longUrl)

    }

    

    
}
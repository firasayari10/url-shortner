import {Injectable, NotFoundException} from '@nestjs/common' ;
import { PrismaService}  from '../prisma/prisma.service' ;


@Injectable()
export class UrlService {
    constructor( private readonly prisma: PrismaService) {}

    private generateShortCode():string {
        return Math.random().toString(36).substring(2,8);
    }

    async createShortUrl( longUrl : string) 
    {
        const shortCode = this.generateShortCode();
        const url = await this.prisma.url.create(
            {
                data: {longUrl , shortCode} 
            }
        );
        return url ;
    }

    async getOriginalUrl(shortCode: string)
    {
        const url =  await this.prisma.url.findUnique(
            {
                where :{shortCode}
            }
        );

        if(!url)
             {
                throw new NotFoundException('url non existant !')
             }

        return url ;
    }


    async getAllUrls() {
        const urls = await this.prisma.url.findMany(
            {
                orderBy:{
                    createdAt:'desc'
                }
            }
        );
        return urls ;
    }


    async checkUrl(url: string ):Promise<boolean>{
        try{
            const response = await fetch (url,{method:'HEAD'})
            return response.ok;
        }catch
        {
            return false ;
        }
    }
}

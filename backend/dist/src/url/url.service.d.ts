import { PrismaService } from '../prisma/prisma.service';
export declare class UrlService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private generateShortCode;
    createShortUrl(longUrl: string): Promise<{
        id: string;
        longUrl: string;
        shortCode: string;
        createdAt: Date;
    }>;
    getOriginalUrl(shortCode: string): Promise<{
        id: string;
        longUrl: string;
        shortCode: string;
        createdAt: Date;
    }>;
    getAllUrls(): Promise<{
        id: string;
        longUrl: string;
        shortCode: string;
        createdAt: Date;
    }[]>;
    checkUrl(url: string): Promise<boolean>;
}

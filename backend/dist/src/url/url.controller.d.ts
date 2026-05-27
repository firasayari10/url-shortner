import { UrlService } from './url.service';
import type { Response } from 'express';
export declare class UrlController {
    private readonly urlService;
    constructor(urlService: UrlService);
    shorten(longUrl: string): Promise<{
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
    checkUrl(url: string): Promise<{
        valid: boolean;
    }>;
    redirect(shortCode: string, res: Response): Promise<void>;
}

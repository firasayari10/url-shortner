import {Test , TestingModule} from '@nestjs/testing' ;
import {UrlService} from './url.service' ;
import {PrismaService} from '../prisma/prisma.service' ;
import {NotFoundException} from '@nestjs/common';

const mockprisma = {
    url:{
        create: jest.fn(),
        findUnique :jest.fn(),
        findMany: jest.fn(),

    
    }
}

describe('UrlService', ()=>{
    let service: UrlService;

    beforeEach(async()=>{
        const module: TestingModule = await Test.createTestingModule(
            {
                providers:[
                    UrlService,
                    {
                        provide:PrismaService,useValue:mockprisma
                    }
                ],
            }
        ).compile();

        service = module.get<UrlService>(UrlService) ;

    });
    it('should create a short url', async () => {
    const fakeUrl = { id: '1', longUrl: 'https://google.com', shortCode: 'abc123' };
    mockprisma.url.create.mockResolvedValue(fakeUrl);

    const result = await service.createShortUrl('https://google.com');

    expect(result.longUrl).toBe('https://google.com');
    expect(result.shortCode).toBe('abc123');
  });

  it('should return the original url when given a valid short code', async () => {
    const fakeUrl = { id: '1', longUrl: 'https://google.com', shortCode: 'abc123' };
    mockprisma.url.findUnique.mockResolvedValue(fakeUrl);

    const result = await service.getOriginalUrl('abc123');

    expect(result.longUrl).toBe('https://google.com');
  });

  it('should throw an error if the short code does not exist', async () => {
    mockprisma.url.findUnique.mockResolvedValue(null);

    await expect(service.getOriginalUrl('xyz')).rejects.toThrow(NotFoundException);
  });

  it('should return a list of all urls', async () => {
    const fakeUrls = [
      { id: '1', longUrl: 'https://google.com', shortCode: 'abc123' },
      { id: '2', longUrl: 'https://github.com', shortCode: 'def456' },
    ];
    mockprisma.url.findMany.mockResolvedValue(fakeUrls);

    const result = await service.getAllUrls();

    expect(result.length).toBe(2);
  });

   
})
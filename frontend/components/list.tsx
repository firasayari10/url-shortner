'use client';

import {
    useEffect,
    useState

} from 'react';

import {
    Table ,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow

} from "@/components/ui/table" ;

interface Url {
    id: string ;
    longUrl:string ;
    shortCode:string ;
    createdAt:string ;

}

interface ListProps {
        refresh : boolean ;
}

export default function UrlList({refresh}:ListProps)
{
    const [urls,setUrls] = useState<Url[]>([]);

    useEffect(()=>{
        fetch('http://localhost:3001/urls')
        .then((res)=>res.json())
        .then((data)=>setUrls(data));

    },[refresh]);



    if(urls.length ===0){
        return (
            <p className='text-sm text-muted-foreground '>
                Encore pas d&apos url raccourcie ! essayer de raccourcir un url avant 
            </p>
        )
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>
                        Url original 
                    </TableHead>
                    <TableHead>
                        Url court 
                    </TableHead>
                    <TableHead>
                        Url cree
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                    {
                        urls.map((url)=>(
                            <TableRow key={url.id}>
                                <TableCell className="max-w-xs truncate">
                                    {url.longUrl}

                                </TableCell>
                                <TableCell
                                  >
                                    <a href={`http://localhost:3001/${url.shortCode}`}
                                    target='_blank'
                                    className='text-primary underline'>

                                        {url.shortCode}
                                    </a>
                                    
                                </TableCell>
                                <TableCell className="text-muted-foreground text-sm">
                                    {new Date(url.createdAt).toLocaleDateString()}
                                    

                                </TableCell>
                            </TableRow>
                        ))
                    }
            </TableBody>
        </Table>
    )


}
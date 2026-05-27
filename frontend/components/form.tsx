'use client';


import { useState} from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button'



interface FormProps {
    onShortned: () => void ;
}


export default function UrlForm({ onShortned}:FormProps)
{
    const[longUrl , setLongUrl] = useState('');
    const [result , setResult] = useState('');
    const [loading , setLoading ]=useState(false);
    async function handleSubmit()
    {
        if(!longUrl) return ;
        setLoading(true);


        const results=  await fetch('http://localhost:3001/shorten' , 
            {
                method:'POST',
                headers:{'Content-Type' : 'application/json'},
                body : JSON.stringify({longUrl})
            }
        );

        const data =  await results.json();

        setResult(`http://localhost:3001/${data.shortCode}`);

        setLongUrl('');
        setLoading(false);
        onShortned();
       
    }


    return (
        <div className='flex flex-col gap-4'>
            <div className='flex gap-2'>
                <Input  
                placeholder='Coller votre URL ici !' 
                value={longUrl}
                onChange={(e)=>setLongUrl(e.target.value)}/>

                <Button onClick={handleSubmit} disabled={loading}>
                    {loading ? ' raccourcissement ' : 'raccourcir '}

                </Button>


            </div>

            {
                result && (
                    <p className="text-sm text-muted-foreground">
                        Short URL : {''}
                        <a href={result} target='_blank' className="text-primary underline">
                            {result}

                        </a>

                    </p>
                )
            }
        </div>
    )
}
'use client';

import React, { useEffect } from 'react';
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
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [checking ,setChecking] = useState(false);

    useEffect(()=>{
        if(!longUrl )
        {
            return;
        }


        const timeout= setTimeout( async () => {
            setChecking(true);
            const  res= await fetch(`http://localhost:3001/check?url=${encodeURIComponent(longUrl)}`);
            const data = await res.json();
            setIsValid(data.valid);
            setChecking(false);


            
        }, 500);

        return ()=> clearTimeout(timeout);
    },[longUrl])

    async function handleSubmit()
    {
        if(!longUrl || !isValid) return ;
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
       setChecking(false)
        setIsValid(null)
    }


    return (
        <div className='flex flex-col gap-4'>
            <div className='flex gap-2'>
                <Input  
                placeholder='Coller votre URL ici !' 
                value={longUrl}
                onChange={
                    (e)=>{
                        setLongUrl(e.target.value);
                        setResult(''); 
                        if(!e.target.value)
                        {
                            setIsValid(null);
                        }
                    }
                    }/>

                <Button onClick={handleSubmit} disabled={loading || !isValid || checking}>
                    {loading ? ' raccourcissement en cours ' : 'raccourcir '}

                </Button>


            </div>
            {checking && (
                <p className="text-sm text-muted-foreground ">
                    Verification de l url  ...

                </p>

            )}
            {
                !checking && isValid == false && longUrl && (
                    <p className="text-sm text-destructive">
                        Url non valide
                    </p>
                )
            }
            {
                !checking && isValid == true && longUrl && (
                    <p className="text-sm text-green-400">
                        Url valide 
                    </p>
                )
            }
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
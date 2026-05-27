'use client';

import { useState} from 'react' ;
import UrlForm  from '@/components/form' ;
import UrlList  from '@/components/list';

export default function Home() {

  const [refresh , setRefresh] = useState(false);
  function handleShortned()
  {
    setRefresh((prev)=> !prev )
  }
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-10">
      <div className='flex flex-col gap-2'>
        <h1 className='text-w-3xl font-semibold '> 
          Url shortner

        </h1>
        <p className="text-muted-foreground text-sm">
          Coller votre url a raccourcir ici !

        </p>



      </div>
        <UrlForm  onShortned={handleShortned} />
          <div className="flex flex-col gap-4 ">
            <h2 className="text-lg font-medium ">
              Tous les urls raccourcie ( historique)

            </h2>
            <UrlList  refresh={refresh}/>

          </div>

    
    </main>
  );
}

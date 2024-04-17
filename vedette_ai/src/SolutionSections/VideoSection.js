import React from 'react';

export default function DemoVideo() {
    return (
        <section className='page-section'>
            <h2>See Vedette In Action</h2>
            <div className='demo-container'>  
                <iframe 
                    className='demo-vid'
                    src="https://www.youtube.com/embed/1VPCImR1Py8" 
                    title="YouTube video player"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen 
            ></iframe>
         </div>
        </section>

    )
}
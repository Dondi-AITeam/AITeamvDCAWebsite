'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface HeyGenEmbedProps {
    videoId: string;
    aspectRatio?: '16:9' | '9:16';
}

export function HeyGenEmbed({ videoId, aspectRatio = '16:9' }: HeyGenEmbedProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            // Function to load the HeyGen script if it's not already present
            const loadScript = () => {
                if (document.getElementById('heygen-embed-script')) return;

                const script = document.createElement('script');
                script.id = 'heygen-embed-script';
                script.src = 'https://app.heygen.com/embed/s/embed_1.0.1.js';
                script.async = true;
                document.body.appendChild(script);
            };

            loadScript();
        }
    }, [isPlaying]);

    return (
        <div
            className="heygen-video-container"
            style={{
                position: 'relative',
                width: '100%',
                paddingBottom: aspectRatio === '16:9' ? '56.25%' : '177.77%',
                height: 0,
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                backgroundColor: '#f3f4f6',
                cursor: isPlaying ? 'default' : 'pointer'
            }}
            onClick={() => !isPlaying && setIsPlaying(true)}
        >
            {!isPlaying ? (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        src="/heygen-placeholder.png"
                        alt="HeyGen AI Avatar Demo"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                    <div style={{
                        position: 'absolute',
                        zIndex: 10,
                        width: '64px',
                        height: '64px',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                        transition: 'transform 0.2s ease',
                    }}>
                        <Play size={32} fill="#111827" color="#111827" style={{ marginLeft: '4px' }} />
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: '1rem',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '4px',
                        fontSize: '0.875rem',
                        fontWeight: 500
                    }}>
                        AI Avatar Demo
                    </div>
                </div>
            ) : (
                <iframe
                    src={`https://app.heygen.com/embed/${videoId}`}
                    title="HeyGen Video"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                    }}
                    allow="encrypted-media; fullscreen; microphone; camera"
                    allowFullScreen
                />
            )}
        </div>
    );
}

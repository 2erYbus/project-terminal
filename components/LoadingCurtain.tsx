'use client';

import React, { useEffect, useState } from 'react';

export const LoadingCurtain = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide after 2 seconds (animation duration + delay)
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black animate-slide-up pointer-events-none">
            <div className="flex flex-col items-center gap-4">
                <span className="font-mono text-primary text-2xl tracking-widest animate-pulse">
                    INITIALIZING_PROTOCOL...
                </span>
            </div>
        </div>
    );
};

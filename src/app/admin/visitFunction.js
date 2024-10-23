'use client'
import { useEffect } from 'react';
import { handleVisit } from './VisitTracker';

export function VisitHandler() {
    useEffect(() => {
        handleVisit().catch(error => {
            console.error('Error during visit handling:', error);
        });
    }, []); // Empty dependency array ensures this runs only once

    return null; // This component doesn't render anything
}
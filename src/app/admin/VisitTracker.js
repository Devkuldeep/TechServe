'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export async function handleVisit() {
    try {
        const response = await fetch('http://localhost:5000/api/visit', {
            method: 'POST',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Visitor count updated:', data.count);
        return data.count;
    } catch (error) {
        console.error('Error updating visit count:', error.message);
        throw error;
    }
}

export default function VisitTracker() {
    const pathname = usePathname();

    useEffect(() => {
        // Define the routes for which we want to track visits
        const trackableRoutes = ['/', '/about', '/contact'];

        // Check if the current route is one of the trackable routes
        if (trackableRoutes.includes(pathname)) {
            // Check if the visit API has already been called for this session
            const hasVisited = sessionStorage.getItem('hasVisited');

            if (!hasVisited) {
                // Call the visit API if not already done in this session
                handleVisit().catch(error => {
                    console.error('Error during visit handling:', error);
                });

                // Set the session flag to mark that the visit has been recorded
                sessionStorage.setItem('hasVisited', 'true');
            }
        }
    }, [pathname]);

    return null; // This component doesn't render anything
}

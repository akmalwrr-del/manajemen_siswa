'use client';

import { useParams } from 'next/navigation';

export default function id() {
    const {id} = useParams();

    return (
        <div>
            <h1> Welcome to the Kelas {id}</h1>
            <h2> This is a Subheading </h2>
        </div>
    );
}
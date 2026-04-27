import React from 'react';

async function page({ params }: { params: Promise<{ id: string }> }) {
    const id = await params
    return (
        <div>
      /* Add content here */
        </div>
    );
};

export default page;
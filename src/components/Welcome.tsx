import { MonitorSmartphone } from 'lucide-react';
import React from 'react';
import { Button } from './ui';
import Link from 'next/link';

const Welcome: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center  mt-6'>
            <span>welcome to</span>
            <div className='flex items-center gap-3'>
                <MonitorSmartphone />
                <h1 className='text-2xl font-bold text-gray-800'>software shop</h1>
            </div>
            <Button asChild className='mt-6'>
                <Link href={"products"}>
                    Go to Products
                </Link>
            </Button>
        </div>
    );
};

export default Welcome;
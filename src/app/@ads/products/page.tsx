import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui';
import Image from 'next/image';
import adsImage from "../../../../public/assets/ads.jpg"

const Ads = () => {
    return (
        <Card className='w-3/4 flex flex-row justify-between' >
            <div>
                <CardHeader>
                    <CardTitle>
                        on sales products
                    </CardTitle>
                    <CardDescription>
                        Buy Outdated products with 50% discount
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button>Buy Now</Button>
                </CardFooter>
            </div>
            <Image
                src={adsImage}
                width={350}
                
                height={250}
                alt='ads'
                className='rounded-tr-lg rounded-br-lg'
            />
        </Card>
    );
}
export default Ads
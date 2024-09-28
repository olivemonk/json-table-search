import VehiclePage from './components/vehicle-page';
import vehicleData from '../data/vehicle-data.json';
import Link from 'next/link';


export default async function HomePage() {
    return (
        <div className="container mx-auto p-4">
            <VehiclePage vehicleData={vehicleData} />
            <div className="mt-10 text-center">
                Made with ❤️ by{' '}
                <Link
                    target="_blank"
                    href={'https://github.com/olivemonk/json-table-search'}
                    className='hover:underline'
                >
                    Olivemonk
                </Link>
            </div>
        </div>
    );
}

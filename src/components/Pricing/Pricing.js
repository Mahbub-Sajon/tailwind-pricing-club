import { defaults } from 'autoprefixer';
import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOfOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'Lifetime free',
                'Unlimited deals',
                'Localized deals',
                'Fantastic defaults',
                'Crazy deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'Everything on free',
                'Unlimited deals',
                'Localized deals',
                'Fantastic defaults',
                'Crazy deals'

            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'Everything lifetime free',
                'Unlimited deals',
                'Localized deals',
                'Fantastic defaults',
                'Crazy deals'
            ]
        },
    ]

    return (
        <div>
            <div className='bg-indigo-200 p-4 mt-8'>
                <h1 className='text-6xl font-mono text-white'>Best Deals of the Town</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque tempora, consequuntur rem molestiae nostrum voluptates distinctio modi unde qui.</p>

                <div className='grid md:grid-cols-3 gap-3 mt-8'>
                    {
                        pricingOfOptions.map(option => <PricingOption
                            key={option.id}
                            option={option}


                        ></PricingOption>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Pricing;
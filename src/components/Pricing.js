/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, XIcon } from '@heroicons/react/solid'

const plans = [
  {
    title: 'Rhythm Booster',
    featured: false,
    description: '',
    priceMonthly: '3 Tracks',
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: 'Promotion on TempoThreads' },
      { id: 2, value: 'Socials (1 post/week)' },
      { id: 3, value: 'Custom Webpage' },
      { id: 4, value: 'Intro Email Promo' },
      { id: 5, value: 'Royalty Split: 80/20 (Artist/TT)' },
    ],
  },
  {
    title: 'Tune Transformer',
    featured: true,
    description: '',
    priceMonthly: '7 Tracks',
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: 'Promotion on TempoThreads' },
      { id: 2, value: 'Socials (2 posts/week)' },
      { id: 3, value: 'Custom Webpage' },
      { id: 4, value: 'Intro Email Promo' },
      { id: 5, value: 'Studio Access (1 session/month)*' },
      { id: 6, value: 'Royalty Split: 70/30 (Artist/TT)' },
    ],
  },
  {
    title: 'Tune Transformer',
    featured: false,
    description: '',
    priceMonthly: '11 Tracks',
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: 'Promotion on TempoThreads' },
      { id: 2, value: 'Socials (3 posts/week)' },
      { id: 3, value: 'Custom Website' },
      { id: 4, value: 'Intro Email Promo' },
      { id: 5, value: 'Studio Access (2 sessions/month)*' },
      { id: 6, value: 'Music Video Production (1 per year)*' },
      { id: 7, value: 'Merch Store: 33% of all merch profits payed out quarterly*' },
      { id: 8, value: 'Royalty Split: 60/40 (Artist/TT)' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-indigo-600">
        {/* Overlapping background */}
        <div aria-hidden="true" className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block" />

        <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl text-center">Our Approach</h2>
          <p className="mt-4 text-xl text-indigo-100">
            We take a personalized approach with every artist. These tier examples are good-to-go and show what a partnership could look like. These are just starting points though, and we can work with you to come up with a customized plan that fits your unique needs and goals. Let's connect and explore what works for you.
          </p>
        </div>

        <h2 className="sr-only">Plans</h2>

        {/* Toggle */}
        <div className="relative mt-12 flex justify-center sm:mt-16">
          <div className="bg-indigo-700 p-0.5 rounded-lg flex">
            <button
              type="button"
              className="relative bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"
            >
              2 Year Partnership
            </button>
            <button type="button" className="ml-0.5 cursor-default relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800"
            >
              5 Year Partnership (coming soon)
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-10">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"
          />

          <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={classNames(
                  plan.featured ? 'bg-white ring-2 ring-indigo-700 shadow-md' : 'bg-indigo-700 lg:bg-transparent',
                  'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                )}
              >
                <div>
                  <h3
                    className={classNames(
                      plan.featured ? 'text-indigo-600' : 'text-white',
                      'text-sm font-semibold uppercase tracking-wide'
                    )}
                  >
                    {plan.title}
                  </h3>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <div className="mt-3 flex items-center">
                      <p
                        className={classNames(
                          plan.featured ? 'text-indigo-600' : 'text-white',
                          'text-4xl font-extrabold tracking-tight'
                        )}
                      >
                        {plan.priceMonthly}
                      </p>
                      <div className="ml-4">
                        <p className={classNames(plan.featured ? 'text-gray-700' : 'text-white', 'text-sm')}>
                          
                        </p>
                        <p className={classNames(plan.featured ? 'text-gray-500' : 'text-indigo-200', 'text-sm')}>
                          
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className={classNames(
                        plan.featured
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'bg-white text-indigo-600 hover:bg-indigo-50',
                        'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                      )}
                    >
                      Submit Tracks
                    </a>
                  </div>
                </div>
                <h4 className="sr-only">Features</h4>
                <ul
                  role="list"
                  className={classNames(
                    plan.featured
                      ? 'border-gray-200 divide-gray-200'
                      : 'border-indigo-500 divide-indigo-500 divide-opacity-75',
                    'mt-7 border-t divide-y lg:border-t-0'
                  )}
                >
                  {plan.mainFeatures.map((mainFeature) => (
                    <li key={mainFeature.id} className="py-3 flex items-center">
                      <CheckIcon
                        className={classNames(
                          plan.featured ? 'text-indigo-500' : 'text-indigo-200',
                          'w-5 h-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          plan.featured ? 'text-gray-600' : 'text-white',
                          'ml-3 text-sm font-medium'
                        )}
                      >
                        {mainFeature.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Free  */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-black">1 Track Intro</h2>
        <ul role="list" className='border-indigo-500 divide-indigo-500 divide-opacity-75 mt-7 border-t divide-y lg:border-t-0'>
          <li className="py-3 flex items-center">
            <CheckIcon className='text-indigo-200 w-5 h-5 flex-shrink-0' aria-hidden="true" />
            <span className='text-black ml-3 text-sm font-medium'>Promotion on TempoThreads</span>
          </li>
          <li className="py-3 flex items-center">
            <CheckIcon className='text-indigo-200 w-5 h-5 flex-shrink-0' aria-hidden="true" />
            <span className='text-black ml-3 text-sm font-medium'>Socials (1 intro post)</span>
          </li>
          <li className="py-3 flex items-center">
            <CheckIcon className='text-indigo-200 w-5 h-5 flex-shrink-0' aria-hidden="true" />
            <span className='text-black ml-3 text-sm font-medium'>Intro Email Promo</span>
          </li>
          <li className="py-3 flex items-center">
            <CheckIcon className='text-indigo-200 w-5 h-5 flex-shrink-0' aria-hidden="true" />
            <span className='text-black ml-3 text-sm font-medium'>Royalty Split:85/15 (Artist/TT)</span>
          </li>
        </ul>
      </div>

    </div>
  )
}

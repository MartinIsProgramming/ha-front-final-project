import Image from 'next/image';
import SectionTitle from '../shared/SectionTitle';

const founders = [
  {
    id: 1,
    name: 'Erik Smith',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, cum.',
    imageSrc: '/images/co-founder-1.jpg',
    imageAlt: 'First founder image',
  },
  {
    id: 2,
    name: 'Taylor Ranger',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, cum.',
    imageSrc: '/images/co-founder-2.jpg',
    imageAlt: 'Second founder image',
  },
  {
    id: 3,
    name: 'Mathew Brown',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, cum.',
    imageSrc: '/images/co-founder-3.jpg',
    imageAlt: 'Third founder image',
  },
];

const founder = person => (
  <div key={person.id} className="group">
    <div className="relative w-full overflow-hidden rounded-lg h-72 aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
      <Image
        src={person.imageSrc}
        alt={person.imageAlt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
    <h3 className="mt-4 text-lg font-medium text-primary-brand-dark">
      {person.name}
    </h3>
    <p className="mt-1 text-sm text-primary-brand-light">{person.title}</p>
    <p className="mt-2 text-primary-brand-dark">{person.description}</p>
  </div>
);

const Founders = () => {
  return (
    <section className="bg-gray-50">
      <div className="px-4 py-12 mx-auto bg-gray-50 sm:py-20 sm:px-6 lg:px-8 max-w-7xl">
        <SectionTitle title="Meet the team" label="Founders" />
        <div className="grid grid-cols-1 mt-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 gap-x-6 xl:gap-x-8">
          {founders.map(person => founder(person))}
        </div>
      </div>
    </section>
  );
};

export default Founders;

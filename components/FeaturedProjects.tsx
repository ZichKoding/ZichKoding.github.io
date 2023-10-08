import Image from 'next/image';

const featuredProjects = [
    {
        "image_path": "/profile_pic.jpg",
        "title": "Some Title",
        "subtitle": "Some minor description of the title."
    },
    {
        "image_path": "/profile_pic.jpg",
        "title": "Some Title 2",
        "subtitle": "Some minor description of the title."
    },
    {
        "image_path": "/profile_pic.jpg",
        "title": "Some Title 3",
        "subtitle": "Some minor description of the title."
    },
    {
        "image_path": "/profile_pic.jpg",
        "title": "Some Title 4",
        "subtitle": "Some minor description of the title."
    }
    
];

export default function FeaturedProjects() {
    return (
        <div className="w-full py-5 items-center">
            <div className="flex flex-col px-2 items-center gap-10 md:grid lg:grid-cols-2">
                {featuredProjects.map((project, index) => (
                    <div key={index} className={`w-10/12 lg:w-10/12 md:w-3/4  h-20 sm:h-32 
                                                text-orange-200 border-l-4 
                                                border-r-4 border-sky-200 hover:text-white
                                                rounded-3xl  flex flex-row justify-center 
                                                items-center text-center
                                                ${index % 2 !== 0 ? 'sm:ml-auto' : 
                                                                        'sm:mr-auto'}`}>
                        <Image src={project.image_path} alt={project.title} width={120} height={120} 
                                className="h-20 sm:h-32 rounded-l-3xl mr-auto" />
                        <div className="flex flex-col justify-center items-center text-center mr-auto">
                            <h3 className="text-lg font-bold">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
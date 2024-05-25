const collections = [
    {
        id: '1',
        name: 'Animals',
        img: 'animal1.jpg'
    },
    {
        id: '2',
        name: 'Flags',
        img: 'country1.jpg'
    },
    {
        id: '3',
        name: 'Countries',
        img: 'country1.jpg'
    },
    {
        id: '4',
        name: 'Science',
        img: 'animal2.jpg'
    },
    {
        id: '5',
        name: 'Tech',
        img: 'country3.jpg'
    },
    {
        id: '6',
        name: 'Travel',
        img: 'country2.jpg'
    },
]

const subcollections = [
    {
        id: '1',
        ParentCollectionId: '1',
        name: 'Mammals',
        img: 'animal2.jpg'
    },
    {
        id: '2',
        ParentCollectionId: '1',
        name: 'Birds',
        img: 'bird1.jpg'
    },
    {
        id: '3',
        ParentCollectionId: '2',
        name: 'India',
        img: 'country2.jpg'
    },
    {
        id: '4',
        ParentCollectionId: '2',
        name: 'Canada',
        img: 'country3.jpg'
    },
    {
        id: '5',
        ParentCollectionId: '3',
        name: 'France',
        img: 'country2.jpg'
    },
    {
        id: '6',
        ParentCollectionId: '3',
        name: 'Germany',
        img: 'country3.jpg'
    },
    {
        id: '7',
        ParentCollectionId: '4',
        name: 'Physics',
        img: 'animal1.jpg'
    },
    {
        id: '8',
        ParentCollectionId: '4',
        name: 'Chemistry',
        img: 'country3.jpg'
    },
    {
        id: '9',
        ParentCollectionId: '5',
        name: 'Gadgets',
        img: 'country1.jpg'
    },
    {
        id: '10',
        ParentCollectionId: '5',
        name: 'Software',
        img: 'country2.jpg'
    },
    {
        id: '11',
        ParentCollectionId: '6',
        name: 'Europe',
        img: 'country1.jpg'
    },
    {
        id: '12',
        ParentCollectionId: '6',
        name: 'Asia',
        img: 'country2.jpg'
    },
]

const videos = [
    {
        id: '1',
        ParentSubcollectionId: '1',
        name: 'Cute Tiger',
        img: 'animal2.jpg',
        url: 'video1.mp4'
    },
    {
        id: '2',
        ParentSubcollectionId: '1',
        name: 'Funny Monkey',
        img: 'animal1.jpg',
        url: 'video2.mp4'
    },
    {
        id: '3',
        ParentSubcollectionId: '2',
        name: 'Flying Bird',
        img: 'bird1.jpg',
        url: 'video1.mp4'
    },
    {
        id: '4',
        ParentSubcollectionId: '2',
        name: 'Birds Chirping',
        img: 'animal2.jpg',
        url: 'video2.mp4'
    },
    {
        id: '5',
        ParentSubcollectionId: '3',
        name: 'Tour of India',
        img: 'country2.jpg',
        url: 'video1.mp4'
    },
    {
        id: '6',
        ParentSubcollectionId: '3',
        name: 'Indian Festivals',
        img: 'country1.jpg',
        url: 'video2.mp4'
    },
    {
        id: '7',
        ParentSubcollectionId: '4',
        name: 'Visit Canada',
        img: 'country3.jpg',
        url: 'video1.mp4'
    },
    {
        id: '8',
        ParentSubcollectionId: '4',
        name: 'Canadian Nature',
        img: 'country2.jpg',
        url: 'video2.mp4'
    },
    {
        id: '9',
        ParentSubcollectionId: '5',
        name: 'Exploring France',
        img: 'country2.jpg',
        url: 'video1.mp4'
    },
    {
        id: '10',
        ParentSubcollectionId: '5',
        name: 'French Cuisine',
        img: 'country3.jpg',
        url: 'video2.mp4'
    },
    {
        id: '11',
        ParentSubcollectionId: '6',
        name: 'Germany Tour',
        img: 'country3.jpg',
        url: 'video1.mp4'
    },
    {
        id: '12',
        ParentSubcollectionId: '6',
        name: 'German Culture',
        img: 'country1.jpg',
        url: 'video2.mp4'
    },
    {
        id: '13',
        ParentSubcollectionId: '7',
        name: 'Physics Basics',
        img: 'animal1.jpg',
        url: 'video1.mp4'
    },
    {
        id: '14',
        ParentSubcollectionId: '7',
        name: 'Quantum Physics',
        img: 'country3.jpg',
        url: 'video2.mp4'
    },
    {
        id: '15',
        ParentSubcollectionId: '8',
        name: 'Chemical Reactions',
        img: 'country3.jpg',
        url: 'video1.mp4'
    },
    {
        id: '16',
        ParentSubcollectionId: '8',
        name: 'Organic Chemistry',
        img: 'animal2.jpg',
        url: 'video2.mp4'
    },
    {
        id: '17',
        ParentSubcollectionId: '9',
        name: 'New Gadgets',
        img: 'country1.jpg',
        url: 'video1.mp4'
    },
    {
        id: '18',
        ParentSubcollectionId: '9',
        name: 'Tech Reviews',
        img: 'country2.jpg',
        url: 'video2.mp4'
    },
    {
        id: '19',
        ParentSubcollectionId: '10',
        name: 'Software Tutorials',
        img: 'country2.jpg',
        url: 'video1.mp4'
    },
    {
        id: '20',
        ParentSubcollectionId: '10',
        name: 'Coding Bootcamp',
        img: 'country1.jpg',
        url: 'video2.mp4'
    },
    {
        id: '21',
        ParentSubcollectionId: '11',
        name: 'European Travels',
        img: 'country1.jpg',
        url: 'video1.mp4'
    },
    {
        id: '22',
        ParentSubcollectionId: '11',
        name: 'Best of Europe',
        img: 'country2.jpg',
        url: 'video2.mp4'
    },
    {
        id: '23',
        ParentSubcollectionId: '12',
        name: 'Asian Adventure',
        img: 'country2.jpg',
        url: 'video1.mp4'
    },
    {
        id: '24',
        ParentSubcollectionId: '12',
        name: 'Asian Culture',
        img: 'country3.jpg',
        url: 'video2.mp4'
    },
]


exports.collections = collections
exports.subcollections = subcollections
exports.videos = videos
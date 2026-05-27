import images from './images';

export const clubs = [{
    id: 'basketball',
    name: 'Basketball Club',
    image: images.basketball,
    subtitle: 'Learn basketball and play to your hearts out!',
    description: 'Basketball club is a place where you can learn basketball. Here, you will learn dribbling, rebounding, shooting, passing, defending, footworks, and advanced tricks. For those who already have experiences, you can immediately partake in our 3v3 or 5v5 games.',
    events: [
        { name: '3x3 Tournament', date: '2027-08-12'},
        { name: 'Clash of Jakarta', date: '2027-06-13'},
        { name: 'Liga Mahasiswa', date: '2027-05-25'}
        ]
    },
    {
    id: 'science',
    name: 'Science Club',
    image: images.science, // Science Lab image from unsplash
    subtitle: 'Find more about what cannot be seen with your naked eyes.',
    description: 'Science club is a place where your curiosity will be answered. Do your research on that organism, mix chemicals to craft potions, or find out what makes you, you. Here, your ideas are welcomed.',
    events: [
        { name: 'Animal Farm Visit', date: '2027-07-22'},
        { name: 'Mt. Kiri Camping', date: '2027-01-12'},
        { name: 'Prof. Chen Seminar', date: '2027-03-25'}
        ]
    },
    {
    id: 'trafie',
    name: 'Track and Field Club',
    image: images.trackfield, // Running Track image from unsplash
    subtitle: 'Learn to push your very legs and lungs to the limit!',
    description: 'Track and Field club is a place where you can run to your hearts out. Learn to do 100, 200, or even 400. We also have long jump, high jump, and polve vault. Oh, not to forget there are shot put and disc throw. So yeah, come apply.',
    events: [
        { name: 'Annual Track Race', date: '2027-08-15'},
        { name: 'Annual Jump Competition', date: '2027-08-22'},
        { name: 'Annual Throw Competition', date: '2027-08-29'}
        ]
    },
    {
    id: 'gamedev',
    name: 'Game Development Club',
    image: images.gamedev, // Game Developer image from unsplash
    subtitle: 'Learn game development and create your dream game.',
    description: 'Game development club is a place where you will be taught how to create games from the very essence. There are five different courses, which consists of Programmer, Artist, Designer, Composer, and Manager. All of the courses have their own teacher who are experienced game developers, capable of contributing greatly to their teams. So, what are you waiting for? Join us and create your dream project.',
    events: [
        { name: 'Alpha Game Jam', date: '2027-09-11'},
        { name: 'Project Omega', date: '2027-10-12'},
        ]
    },
    {
    id: 'programming',
    name: 'Programmer Club',
    image: images.program, // Programmer image from unsplash
    subtitle: 'If you like to develop websites or mobile apps, come join.',
    description: 'Programmer club is a place where you learn to be a programmer. We cover programming languages such as C, C++, C#, HTML, CSS, JavaScript, MySQL, and a few others. If those languages piqued your interest, you can apply.',
    events: [
        { name: 'International Competitive Programming', date: '2027-07-10'},
        { name: 'King of Campus', date: '2027-06-15'}
        ]
    },
    {
    id: 'football',
    name: 'Football Club',
    image: images.football, // Football image from unsplash
    subtitle: 'Join us and became a striker you always wanted to be!',
    description: 'Let us disclaimer that we mentioned striker because it is catchy. We are Football club, a place where you can play 11v11 football. Unlike the title said, we actually taught the fundamentals of football, from dribbling, tackling, and shooting. So, come on in. We will be waiting you all at the soccer field.',
    events: [
        { name: 'Messi Campus Visit', date: '2027-07-17'},
        { name: 'Club Draft Combine', date: '2027-08-03'},
        ]
    },
];
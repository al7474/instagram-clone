export interface Reel {
    id: string;
    videoUrl: string;
    thumbnail: string;
    user: {
        username: string;
        avatar: string;
        isVerified: boolean;
    };
    caption: string;
    audio: {
        name: string;
        author: string;
    };
    likes: number;
    comments: number;
    isLiked: boolean;
    isSaved: boolean;
}

export const mockReels: Reel[] = [
    {
        id: '1',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=700&fit=crop',
        user: {
            username: 'nature_lover',
            avatar: 'https://i.pravatar.cc/150?img=12',
            isVerified: true,
        },
        caption: 'Beautiful sunset at the beach 🌅 #nature #sunset #beach',
        audio: {
            name: 'Summer Vibes',
            author: 'DJ Tropical',
        },
        likes: 45200,
        comments: 892,
        isLiked: false,
        isSaved: false,
    },
    {
        id: '2',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=400&h=700&fit=crop',
        user: {
            username: 'adventure_seeker',
            avatar: 'https://i.pravatar.cc/150?img=8',
            isVerified: false,
        },
        caption: 'Exploring the mountains 🏔️ Who wants to join? #adventure #hiking #mountains',
        audio: {
            name: 'Epic Journey',
            author: 'Adventure Sounds',
        },
        likes: 32100,
        comments: 567,
        isLiked: false,
        isSaved: false,
    },
    {
        id: '3',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&h=700&fit=crop',
        user: {
            username: 'foodie_paradise',
            avatar: 'https://i.pravatar.cc/150?img=5',
            isVerified: true,
        },
        caption: 'Cooking the perfect pasta 🍝 Recipe in bio! #cooking #food #pasta #italian',
        audio: {
            name: 'Italian Vibes',
            author: 'Cooking Beats',
        },
        likes: 78900,
        comments: 1234,
        isLiked: true,
        isSaved: true,
    },
    {
        id: '4',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1682687220795-796d3f6f7000?w=400&h=700&fit=crop',
        user: {
            username: 'fitness_guru',
            avatar: 'https://i.pravatar.cc/150?img=3',
            isVerified: true,
        },
        caption: 'Morning workout routine 💪 Let\'s get it! #fitness #workout #motivation #gym',
        audio: {
            name: 'Pump It Up',
            author: 'Gym Beats',
        },
        likes: 56700,
        comments: 890,
        isLiked: false,
        isSaved: false,
    },
    {
        id: '5',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=400&h=700&fit=crop',
        user: {
            username: 'travel_diaries',
            avatar: 'https://i.pravatar.cc/150?img=15',
            isVerified: false,
        },
        caption: 'Exploring Tokyo streets 🇯🇵 Amazing culture! #travel #tokyo #japan #explore',
        audio: {
            name: 'Tokyo Nights',
            author: 'City Sounds',
        },
        likes: 91200,
        comments: 1567,
        isLiked: false,
        isSaved: true,
    },
];

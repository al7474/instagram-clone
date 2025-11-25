export interface ExplorePost {
    id: string;
    imageUrl: string;
    type: 'image' | 'video' | 'carousel';
    likes: number;
    comments: number;
    size: 'small' | 'large'; // small = 1x1, large = 2x2
}

export const mockExplorePosts: ExplorePost[] = [
    // --- Cycle 1 (Right Large) ---
    // Block A (Rows 1-2): Small, Large (Right), Small
    // Grid flow: Small(0,0) -> Large(0,1-1,2) -> Small(1,0)
    { id: '1', imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', type: 'image', likes: 45230, comments: 234, size: 'small' },
    { id: '2', imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80', type: 'video', likes: 128500, comments: 892, size: 'large' },
    { id: '3', imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', type: 'carousel', likes: 23100, comments: 156, size: 'small' },

    // Block B (Row 3): 3 Small
    { id: '4', imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80', type: 'image', likes: 67890, comments: 445, size: 'small' },
    { id: '5', imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', type: 'image', likes: 98123, comments: 678, size: 'small' },
    { id: '6', imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80', type: 'image', likes: 34567, comments: 289, size: 'small' },

    // --- Cycle 2 (Left Large) ---
    // Block A (Rows 4-5): Large (Left), Small, Small
    // Grid flow: Large(0,0-1,1) -> Small(0,2) -> Small(1,2)
    { id: '7', imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80', type: 'video', likes: 215674, comments: 1234, size: 'large' },
    { id: '8', imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80', type: 'carousel', likes: 56789, comments: 423, size: 'small' },
    { id: '9', imageUrl: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=600&q=80', type: 'image', likes: 89012, comments: 567, size: 'small' },

    // Block B (Row 6): 3 Small
    { id: '10', imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&q=80', type: 'image', likes: 45678, comments: 345, size: 'small' },
    { id: '11', imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80', type: 'carousel', likes: 78901, comments: 456, size: 'small' },
    { id: '12', imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80', type: 'image', likes: 34567, comments: 234, size: 'small' },

    // --- Cycle 3 (Right Large) ---
    // Block A (Rows 7-8): Small, Large (Right), Small
    { id: '13', imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=600&q=80', type: 'image', likes: 67890, comments: 445, size: 'small' },
    { id: '14', imageUrl: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=600&q=80', type: 'video', likes: 123456, comments: 890, size: 'large' },
    { id: '15', imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80', type: 'image', likes: 45678, comments: 312, size: 'small' },

    // Block B (Row 9): 3 Small
    { id: '16', imageUrl: 'https://images.unsplash.com/photo-1501854140884-074cf2b21d25?auto=format&fit=crop&w=600&q=80', type: 'carousel', likes: 89012, comments: 567, size: 'small' },
    { id: '17', imageUrl: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80', type: 'image', likes: 23456, comments: 189, size: 'small' },
    { id: '18', imageUrl: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?auto=format&fit=crop&w=600&q=80', type: 'image', likes: 56789, comments: 423, size: 'small' },

    // --- Cycle 4 (Left Large) ---
    // Block A (Rows 10-11): Large (Left), Small, Small
    { id: '19', imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', type: 'image', likes: 156789, comments: 987, size: 'large' },
    { id: '20', imageUrl: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=600&q=80', type: 'carousel', likes: 34567, comments: 267, size: 'small' },
    { id: '21', imageUrl: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=600&q=80', type: 'image', likes: 67890, comments: 445, size: 'small' },

    // Block B (Row 12): 3 Small
    { id: '22', imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80', type: 'video', likes: 145678, comments: 923, size: 'small' },
    { id: '23', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80', type: 'image', likes: 78901, comments: 534, size: 'small' },
    { id: '24', imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80', type: 'video', likes: 178901, comments: 1123, size: 'small' }
];

const posts = [
    {
      id: '1',
      title: 'First Post',
      content: 'This is the first blog post content...',
      tags: ['blog', 'nextjs', 'react'],
      date: '2024-11-18',
      image: 'https://via.placeholder.com/400x300',
    },
    {
      id: '2',
      title: 'Second Post',
      content: 'This is the second blog post content...',
      tags: ['javascript', 'tailwind'],
      date: '2024-11-18',
      image: 'https://via.placeholder.com/400x300',
    },
  ];
// Helper to find a post by ID
const findPostIndex = (id) => posts.findIndex((post) => post.id === id);

export default function handler(req, res) {
    const { method } = req;

    switch (method) {
        // Create a new post
        case 'POST':
            const newPost = { id: Date.now().toString(), ...req.body };
            posts.push(newPost);
            return res.status(201).json(newPost);

        // Fetch all posts
        case 'GET':
            return res.status(200).json(posts);

        // Update an existing post
        case 'PATCH':
            const { id } = req.body;
            const postIndex = findPostIndex(id);

            if (postIndex === -1) {
                return res.status(404).json({ error: 'Post not found' });
            }

            posts[postIndex] = { ...posts[postIndex], ...req.body };
            return res.status(200).json(posts[postIndex]);

        // Delete a post
        case 'DELETE':
            const { deleteId } = req.query;
            posts = posts.filter((post) => post.id !== deleteId);

            return res.status(200).json({ message: 'Post deleted successfully' });

        default:
            return res.setHeader('Allow', ['POST', 'GET', 'PATCH', 'DELETE'])
                .status(405)
                .end(`Method ${method} Not Allowed`);
    }
}
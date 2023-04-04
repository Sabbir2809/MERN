// Problem-15: Facebook needs to keep track of the number of reactions(like, love, haha, wow, sad, angry) on each post.

const posts = [
  {
    id: 1,
    author: 'Sabbir',
    content: 'JavaScript 20 Array Problem',
    reactions: {
      like: 20,
      love: 30,
      haha: 0,
      wow: 5,
      sad: 0,
      angry: 0,
    },
  },
  {
    id: 2,
    author: 'Abu Salkin',
    content: 'Beginning JS',
    reactions: {
      like: 10,
      love: 5,
      haha: 0,
      wow: 2,
      sad: 0,
      angry: 0,
    },
  },
];

// increment the count of a reaction for a post
const incrementReactionCount = (postId, reactionType) => {
  const post = posts.find((p) => p.id === postId);
  post.reactions[reactionType] += 1;
  console.log(`Incremented ${reactionType} reaction count for post ${postId}`);
};

// testing
incrementReactionCount(1, 'like');

console.log(posts);

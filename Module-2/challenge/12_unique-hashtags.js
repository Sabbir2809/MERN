// Problem-12: A social media app needs to find all unique hashtags used in a users posts.

const userPosts = [
  { id: 1, content: 'Just went for a #run #fitness' },
  { id: 2, content: 'Enjoying the #weekend #friends' },
  { id: 3, content: `Can't wait for the #vacation #beach` },
];

const hashtags = new Set();

userPosts.forEach((post) => {
  // regular expression to match hashtags
  const regex = /#\w+/g;
  const matches = post.content.match(regex);

  if (matches) {
    // add hashtag without #
    matches.forEach((match) => hashtags.add(match.slice(1)));
  }
});

console.log(hashtags);

// Problem-14: A video sharing needs track of the number of views, likes, and comments on each video.

const videos = [
  {
    id: 'h1',
    title: 'HTML',
    views: 1000,
    likes: 500,
    comments: [
      {
        id: 'c1',
        text: 'great tutorial',
      },
      {
        id: 'c2',
        text: 'Thanks for sharing',
      },
    ],
  },
  {
    id: 'j2',
    title: 'JavaScript',
    views: 2000,
    likes: 1000,
    comments: [
      {
        id: 'c1',
        text: 'Awesome',
      },
      {
        id: 'c2',
        text: 'Nice',
      },
    ],
  },
];

// increment the view count of a video
function incrementViewCount(videoId) {
  const video = videos.find((v) => v.id === videoId);
  video['views'] += 1;
  console.log(`View count for video ${videoId}: ${video.views}`);
}

// add a comment to a video
function addComment(videoId, comment) {
  const video = videos.find((v) => v.id === videoId);
  video['comments'].push(comment);
  console.log(`Comments for video ${videoId}:`, video.comments);
}

// call function
incrementViewCount('h1');
addComment('j2', { id: 'c3', text: 'Helpful' });

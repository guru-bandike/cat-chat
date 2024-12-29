const conversations = [
  {
    id: 1,
    participants: [1, 2],
    messages: [
      {
        userId: 1,
        text: 'Rajesh, did you know that Cat-Chat lets you connect with people who share your interests? I just matched with someone who loves sci-fi and cats!',
        time: '9:00 AM',
      },
      {
        userId: 4,
        text: 'Really? That’s so cool, Rajesh! I’ve been exploring the personality tags feature. It’s fascinating how accurate it feels.',
        time: '9:03 AM',
      },
      {
        userId: 1,
        text: 'Oh, totally! I added “bookworm,” “night owl,” and “coffee addict” to mine. Now I’m discovering some really interesting people!',
        time: '9:06 AM',
      },
      {
        userId: 4,
        text: 'I love that! I added “plant parent” and “yoga enthusiast.” It’s such a refreshing way to meet like-minded folks.',
        time: '9:09 AM',
      },
      {
        userId: 1,
        text: 'It really is. And the chat suggestions based on shared interests make it so easy to start a conversation.',
        time: '9:12 AM',
      },
      {
        userId: 4,
        text: 'Exactly! I’ve already connected with someone who gave me tips on caring for succulents. It’s like having a community at your fingertips!',
        time: '9:15 AM',
      },
      {
        userId: 1,
        text: 'That’s amazing! I wonder if they’ll add more niche tags, like “retro gamer” or “indie movie buff.”',
        time: '9:18 AM',
      },
      {
        userId: 4,
        text: 'That would be awesome. The more personalized, the better. Cat-Chat feels like a whole new way to build friendships.',
        time: '9:21 AM',
      },
    ],
  },

  {
    id: 2,
    participants: [1, 3],
    messages: [
      {
        userId: 1,
        text: 'WhiskerManiac, ever feel like every room you walk into is suddenly boring?',
        time: '11:00 AM',
      },
      {
        userId: 3,
        text: 'All the time. I walk in, check the vibe, and leave dramatically.',
        time: '11:02 AM',
      },
      {
        userId: 1,
        text: 'Exactly. It’s like, ‘No one’s entertaining me here. I’m out.’',
        time: '11:05 AM',
      },
      {
        userId: 3,
        text: 'And let’s not forget the urge to sit in the most inconvenient place. Like right in front of the TV.',
        time: '11:07 AM',
      },
      {
        userId: 1,
        text: 'Haha, or on someone’s laptop while they’re working. It’s about sending a message.',
        time: '11:10 AM',
      },
      { userId: 3, text: '‘Pay attention to me, or else.’ It’s a power move.', time: '11:12 AM' },
    ],
  },
  {
    id: 3,
    participants: [1, 4],
    messages: [
      {
        userId: 1,
        text: 'Priya, how do you stay so calm when people are annoying?',
        time: '12:00 PM',
      },
      {
        userId: 4,
        text: 'Oh, I just give them my signature ‘I’m better than you’ stare. Works every time.',
        time: '12:03 PM',
      },
      {
        userId: 1,
        text: 'Haha, I need to perfect that. Mine comes off as more confused than superior.',
        time: '12:05 PM',
      },
      {
        userId: 4,
        text: 'It’s all about the angle. Chin slightly up, eyes half-closed. Pure disdain.',
        time: '12:08 PM',
      },
      {
        userId: 1,
        text: 'Noted. Also, do you ever just disappear mid-conversation? It’s my favorite move.',
        time: '12:10 PM',
      },
      {
        userId: 4,
        text: 'All the time. If I’m not interested, I don’t waste my energy pretending.',
        time: '12:12 PM',
      },
      { userId: 1, text: 'We really are the masters of social interactions.', time: '12:15 PM' },
    ],
  },
  {
    id: 4,
    participants: [1, 5],
    messages: [
      {
        userId: 1,
        text: 'Simba, don’t you hate it when people expect you to be productive all the time?',
        time: '1:00 PM',
      },
      {
        userId: 5,
        text: 'Oh, absolutely. Sometimes I just sit and stare at the wall to remind them I’m in charge of my own schedule.',
        time: '1:02 PM',
      },
      {
        userId: 1,
        text: 'Haha, power move. I like to randomly start something, then stop halfway through just to confuse them.',
        time: '1:05 PM',
      },
      { userId: 5, text: 'Genius. I’ll try that during my next Zoom call.', time: '1:08 PM' },
      {
        userId: 1,
        text: 'Be careful, though. It’s an advanced technique. The key is to look like you’re deep in thought.',
        time: '1:10 PM',
      },
      {
        userId: 5,
        text: 'Got it. They’ll never know if I’m a genius or just lazy.',
        time: '1:12 PM',
      },
    ],
  },
  {
    id: 5,
    participants: [1, 6],
    messages: [
      {
        userId: 1,
        text: 'Mahesh, if procrastination were an Olympic sport, we’d win gold every time.',
        time: '2:00 PM',
      },
      {
        userId: 6,
        text: 'No doubt. I spent 30 minutes yesterday deciding whether to get up and get a snack.',
        time: '2:02 PM',
      },
      {
        userId: 1,
        text: 'Classic. I once stared at my phone screen for an hour instead of answering a simple email.',
        time: '2:05 PM',
      },
      {
        userId: 6,
        text: 'It’s an art form, really. The key is to make it look intentional.',
        time: '2:08 PM',
      },
      {
        userId: 1,
        text: 'Exactly. They call it laziness; we call it energy conservation.',
        time: '2:10 PM',
      },
      {
        userId: 6,
        text: 'It’s about efficiency. Why do something now when it can wait until the absolute last minute?',
        time: '2:12 PM',
      },
      { userId: 1, text: 'Spoken like a true cat-at-heart.', time: '2:15 PM' },
    ],
  },
];

export default conversations;

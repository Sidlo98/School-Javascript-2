// index.js
module.exports = () => {
  const data = { posts: [] };
  // Create 1000 users
  for (let i = 0; i < 100; i++) {
    data.posts.push({
      id: i,
      title: `Post number ${i}`,
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet a arcu vitae rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id ultrices magna. Aenean molestie nisl quis nibh condimentum auctor. Mauris mattis orci nisi, nec volutpat sem tincidunt non. Pellentesque id feugiat sapien. Proin sit amet nisi a enim elementum feugiat. Vivamus eu mauris sagittis, semper lectus vel, consectetur lacus.",
    });
  }
  return data;
};

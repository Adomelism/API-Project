import navigation from "./navigation.js";

async function init() {
    const usersListSection = document.querySelector('#content')
    const headerElement = navigation();
    usersListSection.append(headerElement)

    const queryParams = location.search;
    const urlParams = new URLSearchParams(queryParams);
    const id = urlParams.get('post_id');

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}?_expand=user&_embed=comments`)
    const postData = await res.json()

    if (!id) {
        usersListSection.innerHTML = `<h1>Something went wrong...</h1>
                                    <p>Search for more posts <a href="./posts.html">here</a>.</p>`
        return;
      }

    const postWrapperElement = createPostElement(postData);

    usersListSection.append(postWrapperElement);
}
init();

function createPostElement(post) {
    const postWrapper = document.createElement('div')
    postWrapper.classList.add('post-wrapper')

    const postContent = document.createElement('div');
  postContent.classList.add('post-content');

  const postTitle = document.createElement('h1');
  postTitle.textContent = post.title;

  const authorLink = document.createElement('a');
  authorLink.href = './user.html?user_id=' + post.user.id;
  authorLink.textContent = post.user.name;

  const postBody = document.createElement('p');
  postBody.textContent = post.body;

  const otherAuthorsPosts = document.createElement('a');
  otherAuthorsPosts.href = './posts.html?user_id=' + post.user.id;
  otherAuthorsPosts.textContent = 'Other posts by ' + post.user.name;

  postContent.append(postTitle, authorLink, postBody, otherAuthorsPosts);

  const postComments = document.createElement('div');
  postComments.classList.add('post-comments');

  const commentsTitle = document.createElement('h2');
  commentsTitle.textContent = 'No comments...';

  postComments.append(commentsTitle);

  if (post.comments.length > 0) {
    commentsTitle.textContent = 'Comments:';

    const commentsList = document.createElement('div');
    commentsList.classList.add('comments-list');

    post.comments.forEach(comment => {
      const commentItem = document.createElement('div');
      commentItem.classList.add('comment-item');

      const commentTitle = document.createElement('h3');
      commentTitle.textContent = comment.name;

      const commentAuthor = document.createElement('span');
      commentAuthor.textContent = `Commented by: ${comment.email}`;

      const commentBody = document.createElement('p');
      commentBody.textContent = comment.body;

      commentItem.append(commentTitle, commentAuthor, commentBody);
      commentsList.append(commentItem);
    })

    postComments.append(commentsList);
  }

  postWrapper.append(postContent, postComments);
  return postWrapper;
}

# Pixelfield Issue - Blog

Jana Schořová

## Development plan

### Layout

Header - logo

Navigation

- Home
- Register (un-authenticated)
- Login (un-authenticated)
- My Posts (authenticated)
- Logout (authenticated) -> method in default

Footer - some random information

### Pages

Posts

- all posts from everyone
- **view**: 6 cards of posts, pagination, image thumbnail, title, fullname of author, create date, eg. 60 characters from content and link to post detail in card
- **path**: "/" or "/posts"
- un-authenticated, authenticated
- **components**: PostList
- **endpoints**: "/blog/posts"

Post Detail

- detail of one post
- **view**: image, title, update date, content, images, author (avatar, fullname, email), comments cards(avatar, fullname, email, create date, text of comment, to auhenticated user delete button on his comments)
- **path**: "/posts/{slug}"
- un-authenticated
- authenticated: can add comments
- **components**: PostDetail, CommentsList
- **endpoints**: "/blog/posts/detail/{slug}", "/blog/posts/comments/{slug}"
- vuetify: card

My Posts

- all posts from current user
- **view**: like all posts, button for create new post (to PostForm)
- **path**: "/user/posts"
- authenticated
- **components**: PostList
- **endpoints**: "/blog/posts" filter user = current user

My Post Detail

- detail of post from current user
- **view**: like post detail, added buttons for edit and delete post
- **path**: "/user/posts/{slug}"
- authenticated
- **components**: PostDetail with buttons
- **endpoints**: "blog/posts/detail/{slug}"
- **vuetify**: card, button

My Post Create/Update

- form for create/update post by current user
- **view**: text imputs for title
- **path**: "/user/posts/create"
- authenticated
- **components**: PostForm
- **endpoints**:
  - create: "/blog/posts/create"
  - edit: "/blog/posts/detail/{slug}", "/blog/posts/update/{id}"
  - both: "/blog/posts/image/add", "blog/posts/image/update/{id}"

Register

- form for registration
- **path**: "/register"
- un-authenticated
- **endpoints**: "/users/register"
- **vuetify**: form, text-field, btn, card

Login

- form for login
- **path**: "/login"
- un-authenticated
- nuxt-auth
- **vuetify**: form, text-field, btn, card

### Components

PostList

- list of posts
- components: PostCard
- vuetify: pagination

PostCard

- one of posts, card of post
- data by props
- vuetify: card

PostDetail

- detail of post
- vuetify: img

CommentsList

- list of comments under post detail
- components: CommentCard

CommentCard

- one of comments under post detail
- data by props
- vuetify: img, avatar

PostForm

- form for create/update post
- props: edit=boolean, id=post_id if edit
- vuetify: form, text-field, btn, card
- drag and drop? I dont know how to do that => new component

### Nuxt Auth

- email and password
- login endpoint: "/users/auth"

redirect: {
login: "/login",
logout: "/",
home: "/"
}

### Steps

1. create templates for all pages without authentication and data fetching
2. test templates with dummy data
3. add data fetching
4. add authentication and pages permission to authenticated user

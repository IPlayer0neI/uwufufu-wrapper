# Uwuwfufu API Wrapper

A api wrapper for the uwuwfufu api that simplifies access to its resources and endpoints.

## 📦 Installation

```
npm install uwufufu-wrapper
```

or

```
yarn add uwufufu-wrapper
```

## 🚀 Basic Usage

```javascript
const UWUFufuApiWrapper = require('uwuwfufu-wrapper');
const api = new UWUFufuApiWapperr();

const res = await api.login(process.env.EMAIL, process.env.PASSWORD);
api.token = res.accessToken

const me = await api.me();
console.log(me);
```

## 🔧 Configuration

The wrapper accepts the following options:

| Option                | Description            | Required | Default |
|-----------------------|------------------------|----------|---------|
| `token`               | Uwufufu API token      | No       | —       |
| `consoleApiResponse`  | Write the api responses| No       | false   |

## 📚 Available Endpoints

- `api.login(email, password)` — Pass an API token.
- `api.me(email, password)` — Pass user information.
- `api.games(page = 1, perPage = 10, sortBy = "popularity", search = "", includeNsfw = false, locale, categories)` — Search for worldcups available for play.
- `api.gamesMine(page = 1, perPage = 15)` — Pass an API token
- `api.gamesIdMine(id)` — Pass a specific user's worldcup.
- `api.createWorldCup(model)` — Creation of a worldcup.

model:
```json
{
  "id":0,
  "title":"Worlcup name",
  "description":"Worldcup description",
  "visibility":"IS_CLOSED",
  "categoryId":19,
  "isNsfw":false,
  "createdAt":"2025-05-05T23:40:11.739Z",
  "updatedAt":"2025-05-05T23:40:11.739Z"
}
```
- `api.updateWorldCup(id, model)` — Update a worldcup.Exclusion from a worldcup.

model:
```json
{
  "id":85475,
  "title":"Worldcup name",
  "description":"Worldcup description",
  "visibility":"IS_CLOSED",
  "coverImage":null,
  "slug":"worldcup-name-author-name",
  "isNsfw":false,
  "category":null,
  "locale":"pt-BR",
  "createdAt":"2025-05-05T23:40:10.655Z",
  "updatedAt":"2025-05-05T23:40:10.655Z",
  "user":{
    "id":16941,
    "name":"Author name",
    "profileImage":null
  },
  "plays":0,
  "finishedPlays":0,
  "categoryId":14
  }
```
- `api.deleteWorldCup(id)` — Delete a worldcup.
- `api.images(cover, coverName)` — Send a blob image to the api.
- `api.selectionsMine(id, page = 1, perPage = 10, keyword = "", sortBy = "name")` — Pass the selections of a certain worldcup.
- `api.selectionsImage(id, image, imageName)` — Create an image selection.
- `api.selectionsVideo(model)` — Create a video selection.

model:
```json
{
  "worldcupId":85475,
   "resourceUrl":"https://youtu.be/video",
   "startTime":0,
   "endTime":0
}
```
- `api.selectionsDelete(id)` — Delete a specific selection.
- `api.selectionsVideoDelete(id)` — Delete a video selection.
- `api.selectionsPatch(model)` — Change a selection. To update an image, you need to create the image as a cover and add it to the resourceUrl.

model:
```json
{
  "gameId":85475,
  "selectionId":6640380,
  "name":"Selection name",
  "resourceUrl":"https://cdn.uwufufu.com/selection/image.jpg",
  "videoUrl":"https://cdn.uwufufu.com/selection/image.jpg",
  "startTime":0,
  "endTime":0
}
```
- `api.selectionsVideoPatch(model)` — Change a video selection.

model:
When changing the YouTube video, you need to send the thumb link of the old video.
```json
{
  "gameId":85475,
  "selectionId":6640429,
  "name":"Selection name",
  "resourceUrl":"https://img.youtube.com/vi/image/sddefault.jpg",
  "videoUrl":"https://www.youtube.com/embed/image",
  "startTime":0,
  "endTime":110
}
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or pull requests.

1. Fork the repository  
2. Create your branch: `git checkout -b my-feature`  
3. Commit your changes: `git commit -am 'Add new feature'`  
4. Push to the branch: `git push origin my-feature`  
5. Open a Pull Request
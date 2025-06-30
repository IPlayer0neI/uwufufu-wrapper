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
| `token`               | uwufufu API token      | No       | —       |
| `consoleApiResponse`  | Write the api responses| No       | false   |

## 📚 Available Endpoints

- `api.login(email, password)` — Pass an API token

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or pull requests.

1. Fork the repository  
2. Create your branch: `git checkout -b my-feature`  
3. Commit your changes: `git commit -am 'Add new feature'`  
4. Push to the branch: `git push origin my-feature`  
5. Open a Pull Request

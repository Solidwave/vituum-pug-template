# Vituum + pug + eslint template

This is a boilerplate for starting your static site using mainly vituum.

## Installation

Installation trough yarn or npm

```bash
yarn

yarn run dev
```

```bash
npm install

npm run dev
```

### Building
```bash
yarn run build
```

```bash
npm run build
```

It will generate a dist folder that is servable as a static site (wiht npm serve, or on gitlab pages)

## Folder structure

It follows the Vituum scaffolding rules

### public

Contains public assets such as images, icons etc

### dist

Contains the build of the static site, along with js and css bundles

### src/components

Here you put your reusable components such as headers, buttons, cards etc. Every component can have a js and a scss that must be imported in the scripts and styles index files

### src/data

Here you put static data. Every file json must contain a json object (not directly an array), see src/data/posts.json a an example. Than that object is accessible in all pug templates eg:

```json
{
    "posts" : [
        {
            "title": "First post",
            "text": "This is a first post",
            "author": "John",
            "creationTime": "2023-01-01T12:00:00Z"
        }
    ]
}


```

```pug
block content
  .container
    .p3
      +title-1({text: 'Posts'})
    .row.mt-3
      each post in posts
        .col-12.col-sm-6.col-md-4.mb-5
          .card
            <img src="https://picsum.photos/200" class="card-img-top" alt="...">
            .card-body
              h5.card-title #{post.title}
              p.card-text #{post.text}
```

### src/layouts

Here you can put layouts that you can extend in your pages template 
src/page/index.pug:

```pug
extends /layouts/base.pug

block content
  p A paragraph
```

### src/pages

Here you put your actual site pages and the site rooting will follow the folder structure.
*IMPORTANT* urls without trailing slashes wont't work in dev mode, you must always include the trailing slash
```
/posts won't work, /posts/ will work.
```

### src/scripts

Here you put your scripts that are not related to a component like the main js file that must be imported in the base layout.
In this main js file you must import all components js and custom js under src/scripts

```js
"use-strict";

import jQuery from "jquery";
import Title from "../components/title/title";

jQuery(() => {
  new Title();
});

```

### src/styles

Here you put your css and scss, and the main scss file that will import them

```scss
@import "../node_modules/bootstrap/scss/bootstrap.scss";

@import "/src/components/title/title.scss";
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.


## License

[MIT](https://choosealicense.com/licenses/mit/)

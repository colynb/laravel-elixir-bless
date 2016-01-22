# laravel-elixir-bless

Simple extension to *laravel elixir* to split your CSS files using Bless http://blesscss.com/

## Install

```
npm install --save-dev laravel-elixir-bless
```

## Usage

### Example *Gulpfile*:

```javascript
var elixir = require("laravel-elixir");

require("laravel-elixir-bless");

elixir(function(mix) {
    mix.bless('./public/css/app.css');
});

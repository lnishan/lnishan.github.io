# lnishan.github.io

:star2: Jasmine "lnishan" Chen's website and blog


## Powered by

- [GitHub Pages](https://pages.github.com/)
- [Jekyll](https://jekyllrb.com/)
- Gems
  - [github-pages](https://rubygems.org/gems/github-pages)
  - [jekyll-admin](https://rubygems.org/gems/jekyll-admin)
  - [jekyll-paginate](https://rubygems.org/gems/jekyll-paginate)
- A heavily-modified [Jekyll-Uno](https://github.com/joshgerdes/jekyll-uno) theme
- [Google Fonts](https://fonts.google.com/)
  - [Open Sans](https://fonts.google.com/specimen/Open+Sans)
  - [cwTeXHei (Chinese-Traditional)](https://fonts.google.com/earlyaccess#cwTeXHei)


## Installation and Building

```bash
# clone repository
git clone git@github.com:lnishan/lnishan.github.io.git
cd lnishan.github.io

# install required gems and dependencies
# Bypass nokogiri libxml2 error by: bundle config build.nokogiri --use-system-libraries
bundle install

# build and run locally
bundle exec jekyll serve
```

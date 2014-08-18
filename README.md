crossroads.net
==============

Code base for Milacron.
Please feel free to contribute by forking and doing a pull request.

## Local Development
crossroads.net uses GulpJS to manage and run things in local development.

For more information about Gulp visit: http://gulpjs.com

### Prerequisites
* npm (comes with node, http://nodejs.org/)
* Ruby 2.0.0 (version 2.0.0-p451 or higher, https://www.ruby-lang.org)
* local Redis 2.0 or higher in order to run the node server and store sessions.

### Setup
* ```git clone https://github.com/crdschurch/crossroads.net.git```
* ```npm install```
* you may want to install gulp globally, ```npm -g install gulp```
* ```gem install bundler```
* ```bundle install```
* setup node env var in your bash ```export NODE_ENV=development```
* create your local .env file
  * copy the example```cp .env.example .env```
  * update values (reference current heroku values)

### Daily Routine
* ```git pull```
* ```npm install```
* ```bower install```

### Running the project
To run the project use: ```gulp```

If you would like to take advantage of browserSync you may run: ```gulp -sync```

If you would prefer to disable the growl notifications you may run: ```gulp -n```

For a faster jekyll build you may run: ```gulp -burp```
(This excludes items, see[_config.exclude.yml](https://github.com/crdschurch/crossroads.net/blob/master/config/_config.exclude.yml))

If burp doesn't suit your needs you can also add local only jekyll configs here: ```config/_config.local.yml```

This will watch the filesystem and compile all the sass into css,
coffeescript into javascript and run jekyll-build as well. This will also run
the node server making the site available at localhost:3000

### Media Management

We host all assets (images, audio, video, documents, etc) on S3. Do not check-in media assets into this repo.
Please contact webteam@crossroads.net if you need access to our S3 bucket.

### Running the specs
To run specs use: ```gulp test```

This will run the AngularJS spec headlessly in phantomjs, which you will need to have installed.

### Codeship
We're on the codeship. The project is at: https://www.codeship.io/projects/20882. Codeship is setup to automatically deploy to heroku at: http://crdschurch-dev2.herokuapp.com/

### Setting up project on windows machine
It takes a little extra effort to get Jekyll running on a windows machine.  These resources were helpful...
* http://yizeng.me/2013/05/10/setup-jekyll-on-windows/
* https://github.com/juthilo/run-jekyll-on-windows/
* http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html

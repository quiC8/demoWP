# Theme WP Start
This is theme wordpress start

## Install WP CLI
http://wp-cli.org/

## Install
```sh
git init
git remote add origin https://congdanh@bitbucket.org/carbon8/wp-start.git
git fetch && git checkout master
npm run replace

```
## Configuring the git to git of project
###### Changing the origin
```sh
git remote set-url origin https://bitbucket.org/<NEW_GIT_REPO>.git
git checkout -b develop

```
## Download core wordpress
```sh
wp core download --locale=en_US --skip-content --allow-root

```
## Install Wordpress user wp core or normal
```sh
wp core config --dbname=<DB_NAME> --dbuser=<DB_USER> --dbpass=<DB_PASS> --dbhost=<DB_HOST> --dbprefix=<DB_PREFIX>_
wp core install --url="<URL_RUN>" --title="<TITLE_PROJECT>" --admin_user="<ADMIN_USER>" --admin_email="<ADMIN_EMAIL>"
wp user update 1 --display_name=<ADMIN_NAME> --user_pass=<ADMIN_PASS>
wp theme activate <NAME_THEME>
```
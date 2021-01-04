FROM wordpress:latest

#xDebug Config
RUN            apt-get update && pecl install xdebug \
            && docker-php-ext-enable xdebug \
            && echo "xdebug.mode=debug" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
            && echo "xdebug.client_host = ${PHP_XDEBUG_REMOTE_HOST}" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
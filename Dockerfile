FROM wordpress:latest

#RUN docker-php-ext-install mysqli pdo_mysql gd

RUN apt-get update && pecl install xdebug

#xDebug Config
RUN {   echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)"; \
		echo 'xdebug.remote_enable=1'; \
		echo 'xdebug.remote_autostart=1'; \
		echo 'xdebug.remote_host=${PHP_XDEBUG_REMOTE_HOST}'; \
		echo 'xdebug.idekey=${PHP_XDEBUG_IDEKEY}'; \
	} > /usr/local/etc/php/conf.d/xdebug.ini
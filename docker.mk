include .env

default: up

up:
	@echo "Starting up DEV containers for $(PROJECT_NAME)..."
	docker-compose -f docker-compose.yml up -d

down: stop

stop:
	@echo "Stopping containers for $(PROJECT_NAME)..."
	@docker-compose -f docker-compose.yml stop

prune:
	@echo "Removing containers for $(PROJECT_NAME)..."
	@docker-compose down -v

ps:
	@docker ps --filter name='$(PROJECT_NAME)*'

ps-all:
	@docker ps

stop-all:
	@docker stop $(shell docker ps -q)

shell:
	@docker exec -it $(shell docker ps -q --filter name='$(PROJECT_NAME)_php') /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"

test:
	@echo $(shell docker ps -q --filter name='$(PROJECT_NAME)_php')
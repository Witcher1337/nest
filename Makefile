up:
	@docker-compose -f docker-compose.dev.yml -p my_app up -d

up-build:
	@docker-compose -f docker-compose.dev.yml -p my_app up -d --build --force-recreate

down:
	@docker-compose -f docker-compose.dev.yml -p my_app down

rebuild:
	@docker-compose -f docker-compose.dev.yml -p my_app down && docker-compose -f docker-compose.dev.yml -p my_app up -d --build

sh:
	@docker exec -it my_app bash

logs:
	@docker logs my_app

logs-follow:
	@docker logs -f my_app


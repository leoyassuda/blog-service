include .env
DOCKER_IMAGE_NAME = blog-service
DOCKER_CONTAINER_NAME = blog-service-node-container

build:
	docker build --build-arg DATABASE_URL=$(DATABASE_URL) --build-arg PORT=$(PORT) -t $(DOCKER_IMAGE_NAME) .

start:
	docker run -p $(PORT):$(PORT) -e PORT=$(PORT) -e NODE_ENV=production -e DATABASE_URL=$(DATABASE_URL)  --network blog-service_blog-network --rm $(DOCKER_IMAGE_NAME)

stop:
	docker stop $(DOCKER_CONTAINER_NAME)
	docker rm $(DOCKER_CONTAINER_NAME)

restart: stop start

.PHONY: build start stop restart

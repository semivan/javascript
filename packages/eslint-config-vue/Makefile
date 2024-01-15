# yarn eslint --print-config ./src/type-checked.js | grep dot-notation -A10

init:
	yarn install

update.rules:
	yarn add @semivan/eslint-config

lint:
	yarn eslint .

lint.fix:
	yarn eslint . --fix

publish.preview:
	npm publish --dry-run

# make publish v=<patch | minor | major>
publish:
	make update.rules
	make lint
	yarn version $(v)
	npm publish --access public

publish.patch:
	make publish v=patch

publish.minor:
	make publish v=minor

publish.major:
	make publish v=major

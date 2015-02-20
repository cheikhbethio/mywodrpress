
var frisby = require('frisby');

frisby.create('Test create user')
	.post('http://localhost:4711/api/user/create', {
		login : 'tes10t',
		password:'test',
		name : 'test',
		email: 'tes110t@test.com'
		}, 
		{json: true})
	.expectStatus(200)
	.inspectBody()
	.toss();

frisby.create('Test vue member')
	.get('http://localhost:4711/api/users')
	.inspectBody()
	.toss();

var frisby = require('frisby');

frisby.create('Test create user')
	.post('http://localhost:4711/api/user/create', {
		login : 'test',
		password:'test',
		firstname : 'test',
		lastname : 'test',
		email: 'tes159t@test.com'
		}, 
		{json: true})
	.expectStatus(200)
	.inspectBody()
	.toss();

frisby.create('Test vue member')
	.get('http://localhost:4711/api/users')
	.inspectBody()
	.toss();
	
frisby.create('Test edit user')
	.put('http://localhost:4711/api/user/', {
		login : 'test',
		password:'tes5t',
		lastname : 'tes9t'
		}, 
		{json: true})
	.expectStatus(200)
	.inspectBody()
	.toss();

frisby.create('Test vue member')
	.get('http://localhost:4711/api/users')
	.inspectBody()
	.toss();

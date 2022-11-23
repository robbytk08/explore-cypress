Feature: To test various RESTFUL API services!

Scenario: To validate listing master address with valid province_code
	Given I initiate a "GET" request with the following data
	|	key			|	value	|
	|	uri			|	master/v1/address/city?province_code=&page=1&limit=20	|
	|	status_code	|	200	|
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// import { requestValidator } from '../../../utils/common_utils.js'
import { requestValidator } from '../../utils/common_utils.js'

Given('I initiate a {string} request with the following data', (req_type,table_data) => {
	requestValidator(req_type,table_data)
});
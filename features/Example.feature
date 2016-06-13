Feature: MintJS Example - 1
	In order to show you an example
	I want to enter sample information to show you how its done
Background:
	Given I am on the "#form-fieldcontainer" 
@watch
Scenario: MintJS Example - 1 - A
	When I enter "abc@xyz.com" in "email" field	
	And I enter "01/01/03" in "startDate" field
	And I enter "12/01/03" in "endDate" field
	And I enter "123" in "phone-1" field
	And I enter "4567" in "phone-2" field
	And I enter "8901" in "phone-3" field
	And I enter "5" in "hours" field
	And I enter "30" in "minutes" field
	And I select "Mr" from "title" combobox
	And I enter "John" in "firstName" field
	And I enter "Franklin" in "lastName" field
	And I click "Save" button
	Then Detail info should be shown
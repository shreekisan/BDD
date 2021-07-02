Feature: validate Techfios login functionality 

Background: 
	Given User is on the techfios login page 
	#Scenario: User should be able to login with valid credentials. 
	#	When User enters username as "demo@techios.com" 
	#	When User enters password as "abc123" 
	#	When User cliks on signin button 
	#	Then User should be on dashbaord page.
# for parametrized the data, secenario outline is used.	


Scenario Outline: User should be able to login with valid credentials. 
	When User enters "<username>" and "<password>" 
	When User cliks on signin button 
	Then User should be on dashbaord page. 
	Examples: 
		|username		  |password|
		|demo@techfios.com|abc123|
		
	
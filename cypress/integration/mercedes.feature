Feature: Mercedes Automation

Scenario: Validate A Class models price are between £15,000 and £60,000
  When I visit the url
  Then I close the cookies
  And I click on Our Cars
  And I select Model "Hatchbacks"
  And I select the class "A-Class Hatchback"
  Then I click on "Build your car"
  Then I Filter by "Diesel"
  And I Close the Filter
  Then i Take a Screenshot
  And I Choose Filter Lowest firt
  Then I Save the lowest price results in a text file
  And i Choose filter Highest first
  And I save the highest price results in a text file
Feature: Purchase Feature
  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart

    # TODO: Select the cart (top-right)
    And I will click on the cart icon

    # TODO: Select Checkout
    And I will Select Checkout

    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    And I will enter the firstName "TestFirstName" lastName "TestLsstName" and zipCode "30338"

    # TODO: Select Continue
    And I will Select Continue

    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'
    And I will Select Finish

    # TODO: Validate the textElement 'Thank you for your order!'
    Then I will Validate the confirmation message element "Thank you for your order!"
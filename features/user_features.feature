Feature: all the user related

  As a movie buff
  So that I can find movies with my favorite director
  I want to include and serach on director information in movies I enter

Background: doctors in database

  Given the following doctors exist:
  | name        | email         | password       |
  | Faizan      | PG@gmail.com  | asasdasd       |
  | Waris       | PG1@gmail.com | asdasdasd      |
  | Ahsan       | R@gmail.om    | asdasdsad      |
  | Hamza       | R1@gmail.com  | asdasdasd      |
  
  Given the following doctors exist:
  | name        | email         | password       |
  | Faizan      | PG@gmail.com  | asasdasd       |
  | Waris       | PG1@gmail.com | asdasdasd      |
  | Ahsan       | R@gmail.om    | asdasdsad      |
  | Hamza       | R1@gmail.com  | asdasdasd      |
  Given the following doctors exist:
  | name        | email         | password       |
  | Faizan      | PG@gmail.com  | asasdasd       |
  | Waris       | PG1@gmail.com | asdasdasd      |
  | Ahsan       | R@gmail.om    | asdasdsad      |
  | Hamza       | R1@gmail.com  | asdasdasd      |
  Given the following doctors exist:
  | name        | email         | password       |
  | Faizan      | PG@gmail.com  | asasdasd       |
  | Waris       | PG1@gmail.com | asdasdasd      |
  | Ahsan       | R@gmail.om    | asdasdsad      |
  | Hamza       | R1@gmail.com  | asdasdasd      |
  Given the following doctors exist:
  | name        | email         | password       |
  | Faizan      | PG@gmail.com  | asasdasd       |
  | Waris       | PG1@gmail.com | asdasdasd      |
  | Ahsan       | R@gmail.om    | asdasdsad      |
  | Hamza       | R1@gmail.com  | asdasdasd      |
  Given the following patients exist:
  | name        | email         | password       |
  | Faizan      | PG@gmail.com  | asasdasd       |
  | Waris       | PG1@gmail.com | asdasdasd      |
  | Ahsan       | R@gmail.om    | asdasdsad      |
  | Hamza       | R1@gmail.com  | asdasdasd      |
  Given the following patients exist:
  | name        | email         | password       |
  | Faizan      | PG@gmail.com  | asasdasd       |
  | Waris       | PG1@gmail.com | asdasdasd      |
  | Ahsan       | R@gmail.om    | asdasdsad      |
  | Hamza       | R1@gmail.com  | asdasdasd      |
  Given the following patients exist:
  | name        | email         | password       |
  | Faizan      | PG@gmail.com  | asasdasd       |
  | Waris       | PG1@gmail.com | asdasdasd      |
  | Ahsan       | R@gmail.om    | asdasdsad      |
  | Hamza       | R1@gmail.com  | asdasdasd      |

Scenario: add user to existing doctors
  When I am on "doctors sign up"
  When I fill in "name" with "Raila"
  And  I fill in "email" with "Raila@gmail.com"
  And  I fill in "password" with "Railaasdsad"
  And  I press "Sign Up"
  Then the email of "Raila" should be "Raila@gmail.com"

Scenario: add user to existing patients
  When I am on "patients sign up"
  When I fill in "name" with "Raila"
  And  I fill in "email" with "Raila@gmail.com"
  And  I fill in "password" with "Railaasdsad"
  And  I press "Sign Up"
  Then the email of "Raila" should be "Raila@gmail.com"

Scenario: find user in existing reviews
  When I am on "sign in"
  And  I fill in "email" with "Raila@gmail.com"
  And  I fill in "password" with "Railaasdsad"
  Then I will be on "home_page"

Scenario: find user in existing appointments
  When I am on "sign in"
  And  I click "I am doctor"
  And  I fill in "email" with "Raila@gmail.com"
  And  I press "Log in"
  Then I will be on "home_page"
  
Scenario: find user in existing reviews
  When I am on "sign in"
  And  I click "I am doctor"
  And  I fill in "email" with "Raila@gmail.com"
  And  I fill in "password" with "Railaasdsad"
  Then I will be on "home_page"
  
Scenario: find user in existing proffesions
  When I am on "sign in"
  And  I click "I am doctor"
  And  I fill in "email" with "Raila@gmail.com"
  And  I fill in "password" with "Railaasdsad"
  And  I press "Log in"
  Then I will be on "home_page"
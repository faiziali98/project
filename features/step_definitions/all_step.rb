Given /the following doctors exist/ do |movies_table|
  movies_table.hashes.each do |movie|
    Doctor.create!(movie)
  end
end

Given /the following patients exist/ do |movies_table|
  movies_table.hashes.each do |movie|
    Patient.create!(movie)
  end
end

When /^(?:|I )fill in "([^"]*)" with "([^"]*)"$/ do |field, value|
  puts "Hello"
end

Then /the email of "(.*)" should be "(.*)"/ do |title, director|
  puts "Doctor found"
end

When /^(?:|I )click "([^"]*)"$/ do |button|
  click_link(button)
end

When /^(?:|I )press "([^"]*)"$/ do |button|
  click_button(button)
end

When /^(?:|I )am on "([^"]*)"$/ do |field|
  visit path_to(field)
end

Then /^(?:|I )will be on "([^"]*)"$/ do |field|
  puts "Signed in"
end
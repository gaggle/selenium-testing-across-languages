require 'rspec'
require 'capybara/rspec'

Capybara.current_driver = :selenium

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

describe 'simple', :type => :feature do
  it 'has expected title' do
    visit('http://www.google.com')
    expect(page.title).to have_content 'Google'
  end
end

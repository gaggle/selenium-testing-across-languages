require 'rspec'
require 'capybara/rspec'

Capybara.configure do |config|
  config.run_server = false
  config.default_driver = :chrome
end

Capybara.register_driver :chrome do |app|
  Capybara::Selenium::Driver.new(app, browser: :chrome)
end

describe 'simple', type: :feature do
  context 'google' do
    it 'has expected title' do
      visit('http://www.google.com')
      expect(page.title).to have_content 'Google'
    end
  end
end

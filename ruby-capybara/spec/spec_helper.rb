require 'rspec'
require 'capybara/rspec'
require 'pages'

Capybara.configure do |config|
  config.run_server = false
end

Capybara.register_driver :incognito do |app|
  Capybara::Selenium::Driver.new(app, browser: :chrome, args: ['--incognito'])
end

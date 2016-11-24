class DynLoadingPage
  include Capybara::DSL

  def go
    visit('https://the-internet.herokuapp.com/dynamic_loading/2')
  end

  def click_start
    click_button 'Start'
  end

  def helloworld
    find('#finish > h4', wait: 10)
  end
end

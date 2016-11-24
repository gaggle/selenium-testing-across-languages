require 'spec_helper'

describe 'challenge', type: :feature, driver: :incognito do
  context 'Dynamic Loading 2' do
    before(:each) { @p = DynLoadingPage.new }

    it 'finds text' do
      @p.go
      @p.click_start
      expect(@p.helloworld).to have_content('Hello World')
    end
  end
end

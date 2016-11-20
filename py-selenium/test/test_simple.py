import unittest

from selenium import webdriver


class SimpleTests(unittest.TestCase):
  def setUp(self):
    self.driver = webdriver.Chrome()

  def test_getting_google_title(self):
    driver = self.driver
    driver.get("http://www.google.com")
    self.assertIn("Google", driver.title)

  def tearDown(self):
    self.driver.close()


if __name__ == "__main__":
  unittest.main()

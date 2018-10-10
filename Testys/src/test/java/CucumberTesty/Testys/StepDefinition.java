package CucumberTesty.Testys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class StepDefinition {
	
	WebDriver driver;

	@Given("I go to \"([^\"]*)\"$")
	public void i_go_to(String arg1) {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		driver = new ChromeDriver();
		driver.navigate().to("https://www.youtube.com/user/GlassBoxT");
	}

	@Then("I should be on \"([^\"]*)\" youtube page$")
	public void i_should_be_on_youtube_page(String tab) {
		Assert.assertTrue(driver.getTitle().contains(tab));
		driver.close();
	}
}

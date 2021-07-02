package steps;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import util.BrowserFactory;

public class StepDefinition 
{
	static WebDriver driver;
	LoginPage loginpage;
	
	@Before
	public void beforeRun()
	{
		driver = BrowserFactory.startBrowser();
		loginpage = PageFactory.initElements(driver, LoginPage.class);
	}
	
	
	@Given("^User is on the techfios login page$")
	public void User_is_on_the_techfios_login_page()
	{
		driver.get("https://techfios.com/billing/?ng=admin/");
	}
	
	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username )  {
	   loginpage.USERNAME_FIELD("demo@techfios.com");	    
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String passwrod )  {
	   loginpage.PASSWORD_FIELD("abc123");	    
	}

	@When("^User cliks on signin button$")
	public void user_cliks_on_signin_button() {
	   loginpage.SIGNIN_BUTTON();	    
	}
	
	
	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password)
	{
		loginpage.enterCredentials(username, password);
	}
	

	@Then("^User should be on dashbaord page\\.$")
	public void user_should_be_on_dashbaord_page() throws IOException  {  
		String title = loginpage.getPageTitle();
		String expected = "Dashboard- iBilling--";
		Assert.assertEquals(title, expected);
		loginpage.takeScreenshotAtEndOfTest();
		
	}
		
	
//	@After
	public void tearDown()
	{
		driver.close();
		driver.quit();
	}
	
}

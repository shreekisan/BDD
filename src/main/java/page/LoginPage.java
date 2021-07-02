package page;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	static WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

//Element library
//	@FindBy(xpath = "//input[@id='username']") WebElement USERNAME_FIELD;
	@FindBy(how = How.XPATH, using = "//input[@id='username']")
	WebElement USERNAME_FIELD;

//	@FindBy(xpath="//input[@id='password']")WebElement PASSWORD_FIELD;
	@FindBy(how = How.XPATH, using = "//input[@id='password']")
	WebElement PASSWORD_FIELD;

//	@FindBy(xpath="//button[@name='login']")WebElement SIGNIN_BUTTON;
	@FindBy(how = How.XPATH, using = "//button[@name='login']")
	WebElement SIGNIN_BUTTON;

	public void USERNAME_FIELD(String username) {
		USERNAME_FIELD.sendKeys(username);
	}

	public void PASSWORD_FIELD(String password) {
		PASSWORD_FIELD.sendKeys(password);
	}

	public void SIGNIN_BUTTON() {
		SIGNIN_BUTTON.click();
	}

	public void enterCredentials(String username, String password) {
		USERNAME_FIELD.sendKeys(username);
		PASSWORD_FIELD.sendKeys(password);
	}

	public String getPageTitle() {
		return driver.getTitle();
	}

	public void takeScreenshotAtEndOfTest() throws IOException {
		File source = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

		FileUtils.copyFile(source, new File("./screenshots/element.png"));

	}

}

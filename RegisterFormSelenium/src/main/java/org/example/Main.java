package org.example;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.io.IOException;
import java.time.Duration;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
   public static void main(String[] args) throws InterruptedException, IOException {


       WebDriver driver = new ChromeDriver();
       driver.get("https://demo.automationtesting.in/Register.html");
       driver.manage().window().maximize();

       WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(1200));

       JavascriptExecutor js = (JavascriptExecutor) driver;


       WebElement firstNameInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[placeholder='First Name']")
       ));

       firstNameInput.sendKeys("nori");


       Thread.sleep(1000);


       WebElement lastNameInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[placeholder='Last Name']")
       ));

       lastNameInput.sendKeys("May");


       WebElement addressInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".form-control[rows='3']")
       ));

       addressInput.sendKeys("214 May street Sandton");


       WebElement emailInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[type='email']")
       ));

       emailInput.sendKeys("langa@gmail.com");


       WebElement phoneInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[type='tel']")
       ));

       phoneInput.sendKeys("0810056256");



       WebElement femaleRadioButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//label[normalize-space()='FeMale']")
       ));

  femaleRadioButton.click();

  Thread.sleep(2000);

  WebElement HockeyCheckbox = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#checkbox1")
 ));

 HockeyCheckbox.click();



       WebElement cricketCheckbox = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#checkbox3")
       ));

       cricketCheckbox.click();

       Select select = new Select(driver.findElement(By.cssSelector("#Skills")));
       select.selectByVisibleText("HTML");

driver.findElement(By.xpath("//select[@id='countries']")).click();

       driver.findElement(By.id("countries")).click();

       driver.findElement(By.xpath("(//span[@role='combobox'])[1]")).click();
       driver.findElement(By.xpath("//input[@type='search']")).sendKeys("Japan");
       driver.findElement(By.xpath("//li[contains(text(),'Japan')]")).click();

Thread.sleep(4000);
         WebElement year=wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#yearbox")
   ));

          year.sendKeys("2004");


        WebElement month =wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("select[placeholder='Month']")
));

month.sendKeys("December");

Thread.sleep(2000);

         WebElement day =wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#daybox")
));


          day.sendKeys("15");


Thread.sleep(2000);


WebElement password =wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#firstpassword")
   ));

password.sendKeys("Nori$34");


WebElement confirm = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#secondpassword")
   ));

confirm.sendKeys("Nori$34");

Thread.sleep(2000);

//WebElement choose = driver.findElement(By.cssSelector("#imagesrc"));
   //    String filePath = "\"C:\\Users\\Geek1_PC\\Downloads\\IoT_Mobile_Testing_Syllabus.pdf\"";
  //    choose.sendKeys(filePath);



      WebElement submitButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#submitbtn")
      ));
      submitButton.click();


       TakesScreenshot ts = (TakesScreenshot) driver;
       File source = ts.getScreenshotAs(OutputType.FILE);
       File destination = new File("./Screenshots/screen.png");

// Correct method usage
       FileUtils.copyFile(source, destination);

       System.out.println("Screenshot taken successfully");








       //  TakesScreenshot ts = (TakesScreenshot)driver;
      // File source = ts.getScreenshotAs(OutputType.FILE);
    //   FileUtils.copyFile=(source ,new File("./Screenshots/screen.png"));
     //  System.out.println("Screenshot taken successfully");

   }
}

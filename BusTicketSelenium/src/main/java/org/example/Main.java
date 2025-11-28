package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    static void main(String[] args) throws InterruptedException {

        WebDriver driver = new ChromeDriver();

        driver.get("https://www.busbud.com");

        driver.manage().window().maximize();

        Thread.sleep(3000);


     WebDriverWait wait = new WebDriverWait(driver , Duration.ofSeconds(3000));

        WebElement originText = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#origin-c1ty-input")
        ));


              originText.sendKeys("Centurion");

              Thread.sleep(2000);



              WebElement DestinationText = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(" #destination-c1ty-input")
              ));

              DestinationText.sendKeys("Queenstown Eastern Cape , South Africa");

              Thread.sleep(2000);



       WebElement searchButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#search-submit-button-md")

       ));

     searchButton.click();


    }
}

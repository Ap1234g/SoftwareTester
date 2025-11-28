package org.example;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;


public class Main {
   public static void main(String[] args) {

       WebDriver driver = new ChromeDriver();
       driver.get("https://demo.automationtesting.in/FileUpload.html");


      driver.manage().window().maximize();

      driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));

       JavascriptExecutor js = (JavascriptExecutor) driver;
       js.executeScript("window.scrollBy(0,3000)");



    }
}

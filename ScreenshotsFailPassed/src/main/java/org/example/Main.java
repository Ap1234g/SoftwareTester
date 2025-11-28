package org.example;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
   public static void main(String [] args) {


       WebDriver driver = new ChromeDriver();
       driver.get("https://demo.automationtesting.in/Register.html");
       driver.manage().window().maximize();

       WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(1200));

       JavascriptExecutor js = (JavascriptExecutor) driver;






    }
}

package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;


public class Main {
  public  static void main(String[] args) {


        WebDriver driver = new EdgeDriver();

        driver.get("https://learn.aicerts.io/login/index.php");
      driver.manage().window().maximize();
        System.out.println("Success : " + driver.getTitle());

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

      wait.until(ExpectedConditions.visibilityOfElementLocated (By.id("username"))).sendKeys("nontlantlanyamfu8@gmail.com");
      wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("password"))).sendKeys("Nori@123");
      wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@id='loginbtn']"))).click();


        }
    }


package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


import java.time.Duration;


public class Main {
  public  static void main(String[] args) {
      WebDriver driver =new ChromeDriver();
      driver.get("https://alfharon.talentlms.com/");
      driver.manage().window().maximize();
      WebDriverWait wait  = new WebDriverWait (driver , Duration.ofSeconds(10));
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username"))).sendKeys("nontlantlanyamfu8@gmail.com");
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("password"))).sendKeys("Nori@1234");
wait.until(ExpectedConditions.elementToBeClickable(By.className("sign-in-btn"))).click();


        }
    }


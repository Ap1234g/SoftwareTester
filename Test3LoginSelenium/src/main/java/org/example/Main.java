package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;


public class Main {
   public static void main(String[] args) {

WebDriver driver = new EdgeDriver();
       driver.get("https://ebay.com");
       driver.manage().window().maximize();
       JavascriptExecutor js = (JavascriptExecutor) driver;
     driver.findElement(By.cssSelector("#gh-ac")).sendKeys("OnePlus6T");
      driver.findElement (By.cssSelector("#gh-search-btn")).click();
      js.executeScript("window.scrollBy(0,1000)", "");
    }
}

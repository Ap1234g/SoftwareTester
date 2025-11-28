package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class Main {
    public static void main(String[] args) {

WebDriver driver = new EdgeDriver();

driver.get("https://ebay.com");
driver.manage().window().maximize();
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3000));

     //   driver.manage().timeouts().implicitlyWait(TimeUnit.SECONDS);
JavascriptExecutor js = (JavascriptExecutor)driver;
driver.findElement(By.xpath("//input[@id='gh-ac']")).sendKeys("winter women fashion");
        WebElement searchIcon= driver.findElement(By.xpath( "//span[@class='gh-search-button__label']"));
        searchIcon.click();
        js.executeScript("window.scrollBy(0,1000)", "");

        }
    }

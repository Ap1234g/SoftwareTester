package org.example;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.concurrent.ThreadFactory;


public class Main {
    public static void main(String[] args) throws InterruptedException {


        WebDriver driver = new ChromeDriver();
        driver.get("https://za.shein.com");

        driver.manage().window().maximize();

        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,4000)");
        Thread.sleep(3000);


        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));


        try {
            // Try closing captcha popup first
            WebElement captchaCloseButton = wait.until(
                    ExpectedConditions.elementToBeClickable(By.cssSelector(".captcha_click_close_box"))
            );
            System.out.println("Captcha popup detected → closing it...");
            captchaCloseButton.click();
        } catch (Exception e) {
            System.out.println("No captcha popup found.");
        }

        try {
            // Try closing normal popup
            WebElement popupCloseButton = wait.until(
                    ExpectedConditions.elementToBeClickable(By.cssSelector(".btn-new"))
            );
            System.out.println("Normal popup detected → closing it...");
            popupCloseButton.click();
        } catch (Exception e) {
            System.out.println("No normal popup found.");
        }

        WebElement profileIcon = wait.until(ExpectedConditions.elementToBeClickable(
                By.cssSelector("a.j-ipad-prevent-a.j-header-username-icon.sa_account")
        ));//((JavascriptExecutor) driver).executeScript("arguments[0].click();", profileIcon);
        profileIcon.click();


        Thread.sleep(2000);




        WebElement emailInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[aria-label='Email Address:']")
        ));
        emailInput.sendKeys("nontlantlanyamfu8@gmail.com");


        WebElement continueButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("div[class='login-point_button fsp-element'] span")
        ));
        continueButton.click();

        try {
            // Try closing captcha popup first
            WebElement captchaCloseButton = wait.until(
                    ExpectedConditions.elementToBeClickable(By.cssSelector(".captcha_click_close_box"))
            );
            System.out.println("Captcha popup detected → closing it...");
            captchaCloseButton.click();
        } catch (Exception e) {
            System.out.println("No captcha popup found.");
        }

    }
}













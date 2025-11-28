


import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.WebDriver;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {


        System.setProperty("webdriver.edgedriver.driver","C:\\selenium edgewebdriver\\edgedriver_win64\\msedgedriver.exe");

        WebDriver driver = new EdgeDriver();

        driver.get("https://bash.com");
        System.out.println(driver.getTitle());
        driver.quit();

        }
    }

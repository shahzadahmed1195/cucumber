package CucumberTesty.Testys;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.*;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java", plugin = {"pretty", "html:target/cucumber-html-report",
											"json:target/cucumber.json", "junit:target/cucumber.xml",
											"rerun:target/rerun.txt" } )

public class RunCucumberTest {

}

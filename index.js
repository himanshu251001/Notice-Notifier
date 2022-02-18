
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.soa.ac.in/iter-student-notice");
  const notice = await page.evaluate(() => {
    const elements = document.getElementsByClassName("BlogList-item-title");
    return Array.from(elements).map((element) => element.innerText);
  });
  const hrefs1 = await page.evaluate(
    () => Array.from(
      document.querySelectorAll('a[href]'),
      a => a.getAttribute('href')
    )
  );
  var JsonLinks = JSON.stringify(hrefs1);
  //console.log(JsonLinks);
  var JsonNotice = JSON.stringify(notice);
  //console.log(JsonNotice);

  fs.writeFile("testNotice.json", JsonNotice, function (err) {
    if (err) {
      console.log(err);
    }
    else{
        console.log("Sucessfully Exported Notice")
    }
  });
  
  fs.writeFile("testLink.json", JsonLinks, function (err) {
    if (err) {
      console.log(err);
    }
    else{
        console.log("Sucessfully Exported Links")
    }
  });


  await browser.close();
})();
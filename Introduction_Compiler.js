const handlebarjs = require("handlebars");
const fs = require("fs");

const templateHTML = fs.readFileSync(__dirname + "/Introduction_Template.html").toString();
const args = {
    topic: "HandlebarsJS",
    author: "Neeraj Kumar",
    navbar: {
        item1: "Home",
        item2: "Services",
        item3: "About Us",
        item4: "Contact Us"
    }
};

const template = handlebarjs.compile(templateHTML);
const parsedHTML = template(args);

fs.writeFileSync(__dirname + "/Introduction_Parsed.html", parsedHTML);
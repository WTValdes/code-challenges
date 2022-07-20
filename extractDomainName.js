/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

function domainName(url){

    if (url.includes('//')) {
      url = url.slice(url.indexOf('/') + 2)
    }
    if (url.includes('www.')) {
      url = url.slice(url.indexOf('.') + 1)
    }
  
    return url.slice(0, url.indexOf('.'));
  
  }


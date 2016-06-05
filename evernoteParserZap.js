// Define parser
var innerHTML = function(src,val) {
    var a = src.indexOf(val); // find the span
    var b = src.indexOf('>',a); // find the end of the span tag
    var c = src.indexOf('<',b); // find the beginning of the end span tag
    var str = src.substr(b+1,c-b-1);
    return str;
};

// Contact Name
var name = input.rawTitle.replace('- Business Card', '') || '';
var firstName = name.match(/[^\s]+/);
var lastName = name.substring(name.search(/\s/)+1, name.length);

// Parse the raw content (non html)
var lines = input.rawText.split(/\r?\n/);

// Contact Title & Company
var title = innerHTML(input.contentHTML, 'contact-title');
var company = innerHTML(input.contentHTML, 'contact-org');

// Contact Phone & Mobile
var n=0;
var phoneIndex;
var mobileIndex;
function lineParse(line, index) {
  if ( line.match(/phone/i) ) { phoneIndex = index };
  if ( line.match(/mobile/i) ) { mobileIndex = index };
}
lines.forEach(lineParse);
var phone = lines[phoneIndex + 2] || '';
var mobile = lines[mobileIndex + 2] || '';

// Contact email
var email = (input.rawText.match(/([\w._-]+@[\w._-]+\.[\w._-]+)/gi) || [])[0];

// Return results to next step
return {
  name: name,
  firstName: firstName,
  lastName: lastName,
  title: title,
  company: company,
  phone: phone,
  mobile: mobile,
  email: email
};

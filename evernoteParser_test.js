// Run test as:
//    gjstest --js_files=evernoteParser.js,evernoteParser_test.js
//

var content = `
            <!-- begin div 9 - JOB TITLE/COMPANY -->
            <div style="float: left; width: 150px; padding-left: 25px;">
              
              <p style="display:none;margin:0;padding:0; ">
              
              <span style="x-evernote:family-name;margin:0;padding:0;"></span>
              <span style="x-evernote:given-name;margin:0;padding:0;"></span>
              
              </p>
              
              <p style="color:black;
              font-family:Helvetica;
              font-size:14px;
              line-height:20px;
              margin:0;
              padding:0;">
              
              <span>
                <span style="x-evernote:display-as;
                  -evernote-editable:field;
                  font-size: 18px;
                  display: block;
                  margin-bottom: 2px;
                  font-family: Helvetica;
                  color: #5f5f5f;
                  line-height: 24px;">Jay Henry</span>
              </span>
              
              <span>
                <span style="x-evernote:contact-title;
                  -evernote-editable:field;
                  font-size: 18px;
                  display: block;
                  margin-bottom: 2px;
                  font-family: Helvetica;
                  color: #5f5f5f;
                  line-height: 24px;">Vice President</span>
              </span>
              
              <span>
                <span style="x-evernote:contact-org;
                  -evernote-editable:field;
                  font-size: 16px;
                  font-family: Helvetica;
                  color: #6f6f6f;
                  line-height: 22px;">Pamlico Capital</span>
              </span>
              
              <!--x-evernote:contact-url-->
              
              </p>
              
            </div>
            <!-- end div 9 -->
            `;

//////////////////////////
// innerHTML
//////////////////////////

function innerHTMLTest() {}
registerTestSuite(innerHTMLTest);

addTest(innerHTMLTest, function ReturnsTitle() {
  var title = input.innerHTML(content, 'contact-title');
  expectEq('Vice President', title);
});


addTest(innerHTMLTest, function ReturnsCompany() {
  var company = input.innerHTML(content, 'contact-org');
  expectEq('Pamlico Capital', company);
});

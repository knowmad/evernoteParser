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
                  line-height: 24px;">Larry Wall</span>
              </span>
              
              <span>
                <span style="x-evernote:contact-title;
                  -evernote-editable:field;
                  font-size: 18px;
                  display: block;
                  margin-bottom: 2px;
                  font-family: Helvetica;
                  color: #5f5f5f;
                  line-height: 24px;">Grand Pubah</span>
              </span>
              
              <span>
                <span style="x-evernote:contact-org;
                  -evernote-editable:field;
                  font-size: 16px;
                  font-family: Helvetica;
                  color: #6f6f6f;
                  line-height: 22px;">Perl Foundation</span>
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
  expectEq('Grand Pubah', title);
});


addTest(innerHTMLTest, function ReturnsCompany() {
  var company = input.innerHTML(content, 'contact-org');
  expectEq('Perl Foundation', company);
});

addTest(innerHTMLTest, function ReturnsName() {
  var name = input.innerHTML(content, 'display-as');
  expectEq('Larry Wall', name);
});

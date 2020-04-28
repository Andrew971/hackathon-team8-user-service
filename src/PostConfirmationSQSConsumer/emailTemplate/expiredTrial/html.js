function EmailHtml ( { Type, Body, UserEmail }) {
  const { 
    action_url,
    trial_extension_url,
    feedback_url,
    export_url,
    close_account_url,
  } = JSON.parse(Body.Value)
    console.log(JSON.parse(Body.Value))
  
  
  
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Your [Product Name] trial has expired</title>
        
        
      </head>
      <body style="-webkit-text-size-adjust: none; box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; height: 100%; line-height: 1.4; margin: 0; width: 100% !important;" bgcolor="#F2F4F6"><style type="text/css">
    body {
    width: 100% !important; height: 100%; margin: 0; line-height: 1.4; background-color: #F2F4F6; color: #74787E; -webkit-text-size-adjust: none;
    }
    @media only screen and (max-width: 600px) {
      .email-body_inner {
        width: 100% !important;
      }
      .email-footer {
        width: 100% !important;
      }
    }
    @media only screen and (max-width: 500px) {
      .button {
        width: 100% !important;
      }
    }
    </style>
        <span class="preheader" style="box-sizing: border-box; display: none !important; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; mso-hide: all; opacity: 0; overflow: hidden; visibility: hidden;">Your trial period for [Product Name] has recently expired. What would you like us to do?</span>
        <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0; padding: 0; width: 100%;" bgcolor="#F2F4F6">
          <tr>
            <td align="center" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; word-break: break-word;">
              <table class="email-content" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0; padding: 0; width: 100%;">
                <tr>
                  <td class="email-masthead" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding: 25px 0; word-break: break-word;" align="center">
                    <a href="https://example.com" class="email-masthead_name" style="box-sizing: border-box; color: #bbbfc3; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: bold; text-decoration: none; text-shadow: 0 1px 0 white;">
            [Product Name]
          </a>
                  </td>
                </tr>
                
                <tr>
                  <td class="email-body" width="100%" cellpadding="0" cellspacing="0" style="-premailer-cellpadding: 0; -premailer-cellspacing: 0; border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; border-top-color: #EDEFF2; border-top-style: solid; border-top-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0; padding: 0; width: 100%; word-break: break-word;" bgcolor="#FFFFFF">
                    <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0 auto; padding: 0; width: 570px;" bgcolor="#FFFFFF">
                      
                      <tr>
                        <td class="content-cell" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding: 35px; word-break: break-word;">
                          <h1 style="box-sizing: border-box; color: #2F3133; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 19px; font-weight: bold; margin-top: 0;" align="left">Your [Product Name] trial expired</h1>
                          <p style="box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.5em; margin-top: 0;" align="left">Thanks for trying [Product Name]. You've added a lot of data, so here are several options for you to consider going forward.</p>
                          
                          <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 30px auto; padding: 0; text-align: center; width: 100%;">
                            <tr>
                              <td align="center" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; word-break: break-word;">
                                
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                                  <tr>
                                    <td align="center" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; word-break: break-word;">
                                      <table border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                                        <tr>
                                          <td style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; word-break: break-word;">
                                            <a href="${action_url}" class="button button--green" target="_blank" style="-webkit-text-size-adjust: none; background: #22BC66; border-color: #22bc66; border-radius: 3px; border-style: solid; border-width: 10px 18px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); box-sizing: border-box; color: #FFF; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; text-decoration: none;">Upgrade your account</a>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <p style="box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.5em; margin-top: 0;" align="left">If you're not ready to upgrade to a paying account, you have a few other options available to you…</p>
                          <table class="attributes" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0 0 21px;">
                            <tr>
                              <td class="attributes_content" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding: 16px; word-break: break-word;" bgcolor="#EDEFF2">
                                <table width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                                  <tr>
                                    <td class="attributes_item" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding: 0; word-break: break-word;"><strong style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;"><a href="${trial_extension_url}" style="box-sizing: border-box; color: #3869D4; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">Restart your trial</a></strong> - If you didn't get a chance to fully try out the product or need a little more time to evaluate, just let us know. Simply reply to this email and we'll extend your trial period.
                                      <br />
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="attributes_item" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding: 0; word-break: break-word;"><strong style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;"><a href="${feedback_url}" style="box-sizing: border-box; color: #3869D4; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">Share feedback</a></strong> - If [Product Name] isn't right for you, let us know what you were looking for and we might be able to suggest some alternatives that might be a better fit.
                                      <br />
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="attributes_item" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding: 0; word-break: break-word;"><strong style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;"><a href="${export_url}" style="box-sizing: border-box; color: #3869D4; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">Export your data</a></strong> - If [Product Name] wasn't a good fit, you can export your data for use elsewhere.
                                      <br />
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="attributes_item" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding: 0; word-break: break-word;"><strong style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;"><a href="${close_account_url}" style="box-sizing: border-box; color: #3869D4; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">Close your account</a></strong> - You can close your account and delete your data. Or, do nothing and we'll automatically close it and delete your data for you in 90 days. But don't worry, we'll send you another email before that happens.</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <p style="box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.5em; margin-top: 0;" align="left">Regardless of your choice, we want to say thank you for trying [Product Name]. We know it's an investment of your time, and we appreciate you giving us a chance.</p>
                          <p style="box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.5em; margin-top: 0;" align="left">Thanks,
                            <br />[Sender Name] and the [Product Name] Team</p>
                          <p style="box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.5em; margin-top: 0;" align="left"><strong style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">P.S.</strong> If you have any questions or need any help, please don't hesitate to reach out. You can reply to this email or join us on live chat during business hours.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; word-break: break-word;">
                    <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0 auto; padding: 0; text-align: center; width: 570px;">
                      <tr>
                        <td class="content-cell" align="center" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding: 35px; word-break: break-word;">
                          <p class="sub align-center" style="box-sizing: border-box; color: #AEAEAE; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin-top: 0;" align="center">© 2019 [Product Name]. All rights reserved.</p>
                          <p class="sub align-center" style="box-sizing: border-box; color: #AEAEAE; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin-top: 0;" align="center">
                            [Company Name, LLC]
                            <br />1234 Street Rd.
                            <br />Suite 1234
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `
  }
  
  module.exports = EmailHtml ;
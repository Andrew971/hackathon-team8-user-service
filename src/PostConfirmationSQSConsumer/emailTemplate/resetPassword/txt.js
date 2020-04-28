function EmailTxt ( { Type, Body, UserEmail }) {
	
  const { 
    name,
    action_url,
    operating_system,
    browser_name,
    support_url,
  } = JSON.parse(Body.Value)	
  
  console.log(JSON.parse(Body.Value))
  
    return `Use this link to reset your password. The link is only valid for 24 hours.

    [Product Name] ( https://example.com )
    
    ************
    Hi ${name},
    ************
    
    You recently requested to reset your password for your [Product Name] account. Use the button below to reset it. This password reset is only valid for the next 24 hours.
    
    Reset your password ( ${ action_url } )
    
    For security, this request was received from a ${operating_system} device using ${browser_name}. If you did not request a password reset, please ignore this email or contact support ( ${ support_url } ) if you have questions.
    
    Thanks,
    The [Product Name] Team
    
    If you’re having trouble with the button above, copy and paste the URL below into your web browser.
    
    ${action_url}
    
    © 2019 [Product Name]. All rights reserved.
    
    [Company Name, LLC]
    
    1234 Street Rd.
    
    Suite 1234
    `
  }
  
  module.exports = EmailTxt ;
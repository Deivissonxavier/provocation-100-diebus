for(let i = 1; i <= 4; i++){
    const selector = `#input-${i}:checked ~ .button-${i}`
    const style = `
      color: #1abc9c;
      background: #fff;
      transition: all .5s ease-in-out;
    `
    const beforeStyle = `
      transform: scale(1);
    `
    
    const rule = `${selector} {
      ${style}
      
      .button:before {
        ${beforeStyle}
      }
    }`
    
    const sheet = document.styleSheets[0]
    sheet.insertRule(rule, sheet.cssRules.length)
  }
  
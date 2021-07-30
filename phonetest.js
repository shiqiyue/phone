var phone = require('./lib/index')

function getPhoneInfo(p) {
  if (!p.toString().startsWith('+')) {
    return phone('+' + p)
  }
  return phone(p)
}

function getPhoneCountry(p) {
  if (!p) {
    return ''
  }
  var phoneInfo = getPhoneInfo(p)
  if (!phoneInfo || phoneInfo.length === 0) {
    return ''
  } else {
    return phoneInfo[1]
  }
}

function cleanPhone(p) {
  if (!p) {
    return ''
  }
  var phoneInfo = getPhoneInfo(p)
  if (!phoneInfo || phoneInfo.length === 0) {
    return p.toString().replace(' ', '').replace('-', '')
  } else {
    return phoneInfo[0]
  }
}

console.log(getPhoneCountry('+18687315320'))

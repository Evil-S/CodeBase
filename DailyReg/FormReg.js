const EmailReg = /.+@.+\..+/ //邮箱
const CertificateCnIReg = /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/ // 一代身份证
const CertificateCnIIReg = /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$/ // 二代身份证
const CertificateCnReg = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/ // 身份证1、2代
const PhoneCnReg = /^(?:(?:\+|00)86)?1\d{10}$/ // 手机号
const NumberReg = /^-?(\d*)(\.)?(\d*)?$/ // 数字
const BirthDayReg = /^[0-9]{4}([\-|\/])[0-9]{2}\1[0-9]{2}$/ // 日期

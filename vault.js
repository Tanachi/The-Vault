'use strict';
module.exports = function() {
  var keyVault = '';
  var valueVault = '';
  return {
  getValue:function(key){
    if(!key)
      return null;
    if(key === keyVault)
      return valueVault;
    else
      return null;
  }
  };
};
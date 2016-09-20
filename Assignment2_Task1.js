var string = {
  name: 'string', 
  pluralize: function(string){
  if (string.substring(string.length-1)=='y'){
    console.log(string.substring(0, string.length-1)+'ies');
  }else{
    console.log(string+'s');
  }
}
};
string.pluralize('baby'); 
string.pluralize('cat'); 



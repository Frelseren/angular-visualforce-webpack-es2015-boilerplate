export default function uniquePipe() {
  return (input, key) => {
    let unique = {};
    let uniqueList = [];
    for(let i = 0; i < input.length; i++){
      if(typeof unique[input[i][key]] == "undefined"){
        unique[input[i][key]] = "";
        uniqueList.push(input[i]);
      }
    }
    return uniqueList;
  };
}

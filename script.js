// complete the given function

function palindrome(str){
for (let index = 0; index < str.length; index++) {
	for (let j = 0; j < str.length; j++) {
		if(str[index]==str[j]){
			return true;
		}else
			return false;
	}
}
}
module.exports = palindrome

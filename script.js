function mincost(arr)
{ 
	arr.sort(function(a, b){return a - b});
	let ans=0;
	let temp=arr[0];
	for(let i=1; i<arr.length; i++){
		ans+=(temp+arr[i]);
		temp=ans;
	}
	return ans;
}

module.exports=mincost;

function mincost(arr)
{ 
	arrr.sort();
	let ans=0,temp=arr[0];
	for(let i=1; i<arr.length; i++){
		ans+=(temp+arr[i]);
		temp=ans;
	}
	return ans;
}

module.exports=mincost;

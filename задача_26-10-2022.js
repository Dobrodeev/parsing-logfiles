function getShortName(full_name)
{
	let words = full_name.split(" ");
	
	if ( words.length < 1 )
	{
		throw "Full name must have at least 1 word";
	}
	
	let short_name = words[0];
	
	for (let i = 1; i < words.length; ++i)
	{
		short_name += " " + words[i][1] + ".";
	}
	
	return short_name;
}

console.log( getShortName("Ggggg Hhhhh Jjjjj") );

//----//

function getShortDate(full_date)
{
	let dates = full_date.split(".");
	
	let short_date = new Date(+dates[2], (+dates[1] - 1), +dates[0]);
	
	return short_date.getDate() + "." + ( +short_date.getMonth() + 1) + "." + short_date.getYear();
}

console.log( getShortDate("10.01.1991") );

//----//

function getChangedDateFormat(date, delimeter)
{
	let dates = date.split(delimeter);
	
	let reformated_date = new Date(+dates[2], (+dates[1] - 1), +dates[0]);
	
	return reformated_date.getDate() + "." + ( +reformated_date.getMonth() + 1) + "." + reformated_date.getYear();
}

console.log( getChangedDateFormat("10/01/91", "/") );
function print(string)
{
    console.log(string);
}

function getName()
{
    let name = prompt("Ваше ім’я: ");
    return name;
}

function getNames(end_mark)
{
    let names = Array();
    
    while (true)
    {
        let name = getName();
        if (name == end_mark)
        {
            break;
        }
        
        names.push(name);
    }
    
    return names;
}

function hello(name)
{
    print("Привіт, " + name + "!");
}

function main()
{
    hello( getNames(".").join(", ") );
}

main();
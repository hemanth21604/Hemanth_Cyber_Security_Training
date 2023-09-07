let details=[{Name:'Hemanth',Hobby:'Drawing'},{Name:'Shanmugam',Hobby:'Music'},{Name:'Kavin',Hobby:'Dance'},{Name:'Govind',Hobby:'Music'},
{Name:'Jeeva',Hobby:'Hiking'},{Name:'Kiruba',Hobby:'Music'},{Name:'Sathish',Hobby:'Yoga'},{Name:'Sandy',Hobby:'Blogging'}];

choice='Music';

hobby = details.filter(e=>(e.Hobby==choice))
        
            console.log(hobby)
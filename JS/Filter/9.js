let mail=[{Name:'Hemanth',MailID:'hemu@yahoo.com'},{Name:'Jeeva',MailID:'jev213@gmail.com'},
{Name:'Shanmugam',MailID:'sandy@rediff.ai'},{Name:'Kavin',MailID:'kavi@yahoo.com'},
{Name:'Karthees',MailID:'kk243@rediff.com'},{Name:'Muthuvel',MailID:'muthu@gmail.com'},];

let domain='@gmail.com';

let select=mail.filter(e=>
    {
       return  e.MailID.slice(e.MailID.indexOf('@')) == domain;

    });
console.log(select)
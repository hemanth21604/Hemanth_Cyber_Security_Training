let dates=[
    {Event:'1',Date:'2019/09/17'},{Event:'2',Date:'2017/10/23'},
    {Event:'3',Date:'2023/06/21'},{Event:'4',Date:'2023/12/24'},
                 {Event:'5',Date:'2020/08/19'},
];

let idate='2023/06/21';

let event=dates.filter(e=>e.Date<idate)

console.log(event);
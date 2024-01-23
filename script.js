let list = {
    classes:[],
    attributes:[],
    items:[],

    addClass(ClassName){
        this.classes.push(ClassName);
    },
    addAttribute(AttributeName,AttributeValue){
        let attr={
            name:'',
            value:'',
        };
        attr.name = AttributeName,
        attr.value = AttributeValue;

        this.attributes.push(attr);
    },
    addItem(item){
        this.items.push(item);

    },
    render(){
        let ul=document.createElement("ul");

        this.classes.forEach(function(cl){
            ul.classList.add(cl);
        });

        this.items.forEach(function(item){
            let li=document.createElement("li");
            li.innerText=item.text;
            let a=document.createElement("a");
            a.href=item.href;
            a.innerText=item.text;


            li.append(a);
            ul.append(li);
        });

        ul.classList.add("asda");
        document.body.prepend(ul);
    }
}


//let texts = ["glav","block","o nas","Kontact"];

let texts=[
    {text:"Главная", href:"http://mail.ru"},
    {text:"Блог", href:"http://mail.ru"},
    {text:"О нас", href:"http://mail.ru"},
    {text:"Контакты", href:"http://mail.ru"}
    
]

texts.forEach(function(text){
    let item = {
        text:'',
        href:'',
    
        setText(text){
            this.text=text;
        },
        setHref(href){
            this.href=href;
        },
    
    }

    item.setText(text);
    list.addItem(item);
});

list.addClass("Unstyled");
list.addClass("Inlined");

list.render();
    const body = document.querySelector('body');
    console.log(body);
    const nav = document.querySelector('nav');
    const question_plus=document.querySelectorAll('.questions2-1 h3');
    const span = document.querySelectorAll('.questions2-1 h3 span');
    console.log(span.content);
    console.log(question_plus);
    const online_store = document.getElementById('online-store');
    const dropdown = document.querySelector('.nav2 ul ul');
    question_plus.forEach((x)=>{
        x.addEventListener('click',()=>{
        const content=x.nextElementSibling;
        content.style.display=(content.style.display==='block')?'none':'block';
        
        span.forEach((y)=>{   
            span.innerText=(span.innerText==='add')?'delete':'add';
        }
        )
    })
    }
    )

    online_store.addEventListener('click',()=>{
        dropdown.style.visibility=dropdown.style.visibility==='visible'?'hidden':'visible';
    })

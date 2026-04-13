$(document).ready(function(){
   const  useridfield = $('#userid'),
    notifications = $('#notifications'),
    firstnamefield =$('#firstname'),
    emailfield = $('#email'),
    phonefield = $('#phone'),
    subjectfield = $('#subject'),
    messagefield = $('#message'),
    inputfield = $('input'),
    submitbtn = $('#submitform')

    inputfield.on('input', function(){
        notifications.html('')
    })

    function sanitizestring(str){
        return str==''?str:str.replace("'","''").trim()
    }

    submitbtn.on('click', function(){
        const userid = useridfield.val(),
        firstname = sanitizestring(firstnamefield.val()),
        email = sanitizestring(emailfield.val()),
        mobile= sanitizestring(phonefield.val()),
        subject = sanitizestring(subjectfield.val()),
        message = sanitizestring(messagefield.val())
        
        let errors = ''
        
        

        if(firstname == ""){
            errors = 'Please Enter Your First Name'
            firstnamefield.focus()
        }else if(email == ""){
            errors = 'Please Enter Your Email'
            emailfield.focus()
        }else if(mobile == ""){
            errors = 'Please Enter Your Phone'
            phonefield.focus()
        }else if(subject == ""){
            errors = 'Please Type the Email Subject'
            subjectfield.focus()
        }else if(message == ""){
            errors = 'Please Type the Email Message'
            messagefield.focus()
        }

        if(!errors){
            notifications.html(showAlert('processing', 'Processing Your Details, please wait...'))
            $.post(
                'controllers/contactoperations.php',
                {
                    savecontact: true,
                    userid,
                    firstname,
                    email,
                    mobile,
                    subject,
                    message 
                },
                (data)=>{
                    if(isJSON(data)){
                        data = JSON.parse(data)
                        if(data.status == 'success'){
                            notifications.html(showAlert('success', `Your Information Has Been Received Successfully!`))
                        }
                    }else{
                        notifications.html(showAlert('danger', `Sorry :( There was a Problem processing your Data + ${data}`))
                    }
                }
            )
        }else{
            notifications.html(showAlert('info', errors))
        }
    })
})
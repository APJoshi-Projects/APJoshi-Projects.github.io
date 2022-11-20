function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("001").innerHTML = this.responseText;
        }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
   }

   var request = new XMLHttpRequest();
   request.open("GET", "authenticate.js", true);
   request.send()






variable = new XMLHttpRequest();
 
xhttp.onload = function() {
// What to do when the response is ready

}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();



    
//
            const gitrows = new Gitrows();
            let path = '@github/APJoshi-Projects/APJoshi-Projects.github.io:main/data.csv';
            //@namespace/owner/repository:branch/directory/file(.json|.csv)/id
            const options = {
            username:"GR TKN",
            token:"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",
            author: { name: 'APJoshi', email: 'ankurjoshi_807@yahoo.co.in' },
            message:"Posted by APJoshi",
            type: "csv"
            };  
            //@github/APJoshi-Projects/APJoshi-Projects.github.io/data.csv
             
            const data = [
            {
            RWNO:"3032",
            ACCT_SESSION_ID:"AA Brand New Title",
            FRAMED_IP_ADDRESS:"SSome brand new content"
            },
            {
            RWNO:"4042",
            ACCT_SESSION_ID:"YYet Another New Title"
            }
            ];

            gitrows.options(options);

            gitrows.put(path,data)
            .then((response)=>{
            //handle response, which has the format (Object){code:200,description='OK'}
            })
            .catch((error)=>{
            //handle error, which has the format (Object){code:http_status_code,description='http_status_description'}
            });
 //









//
        const gitrows = new Gitrows();
        let path = '@github/APJoshi-Projects/APJoshi-Projects.github.io:main/data.csv';
        //@namespace/owner/repository:branch/directory/file(.json|.csv)/id
        const options = {
            username: "GR TKN",
            token: "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",
            author: { name: 'APJoshi', email: 'ankurjoshi_807@yahoo.co.in' },
            message: "Posted by APJoshi",
            type: "csv"
        };
        //@github/APJoshi-Projects/APJoshi-Projects.github.io/data.csv

        const data = [
            {
                RWNO: "3032",
                ACCT_SESSION_ID: "AA Brand New Title",
                FRAMED_IP_ADDRESS: "SSome brand new content"
            },
            {
                RWNO: "4042",
                ACCT_SESSION_ID: "YYet Another New Title"
            }
        ];

        gitrows.options(options);

        gitrows.put(path, data)
            .then((response) => {
                //handle response, which has the format (Object){code:200,description='OK'}
            })
            .catch((error) => {
                //handle error, which has the format (Object){code:http_status_code,description='http_status_description'}
            });
//


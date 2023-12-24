function htmlContent() {
    return `
        <html>
            <head>
                <title>Send Email</title>
            </head>
            <body>
                <button id="sendEmail">Send Email</button>
                <script>
                    document.getElementById("sendEmail").onclick = function() {
                        fetch(sendEmail)
                            .then(response => response.text())
                            .then(data => alert(data));
                    };
                </script>
            </body>
        </html>
    `;
}

import { Resend } from 'resend';

const resend = new Resend('re_UuqRMArX_K8GRqBGtCgzWq7jTxUmhXGBj');
const htmlContent2 = `
<!DOCTYPE html>
<html>
<head>
    <style>
    body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            text-align: center;
            padding: 40px;
        }

        .container {
            background-color: #ffffff;
            width: 80%;
            margin: auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        }

        h1 {
            color: #4CAF50;
        }

        p {
            font-size: 16px;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            border-radius: 5px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
        }

        .button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Resend!</h1>
        <p>Thank you for choosing Marina. Your subscription is now active.</p>
        <a href="#" class="button">Explore My Features</a>
        <p>If you have any questions, feel free to contact us at <a href="mailto:marinaviejo2000@gmail.com">support@resend.dev</a>.</p>
    </div>
</body>
</html>
`;

function sendEmail() {
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'marinaviejo2000@gmail.com',
        subject: 'Hello World',
        html: htmlContent2
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
}








const server = Bun.serve({
    port: 5500,
    fetch(request) {
        return sendEmail(); // Function to send the email
    },
});

console.log(`Listening on localhost:${server.port}`);
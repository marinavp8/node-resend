import { Resend } from 'resend';

const resend = new Resend('re_UuqRMArX_K8GRqBGtCgzWq7jTxUmhXGBj');
const htmlContent = `
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
        html: htmlContent
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
}

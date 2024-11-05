<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #e11d48; color: white; padding: 20px; }
        .content { padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Quote Request</h1>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name:</div>
                <div>{{ $firstName }} {{ $lastName }}</div>
            </div>
            <div class="field">
                <div class="label">Email:</div>
                <div>{{ $email }}</div>
            </div>
            <div class="field">
                <div class="label">Phone:</div>
                <div>{{ $phone }}</div>
            </div>
            <div class="field">
                <div class="label">Message:</div>
                <div>{{ $message }}</div>
            </div>
        </div>
    </div>
</body>
</html> 
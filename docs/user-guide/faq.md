---
id: faq
title: FAQ
sidebar_position: 1
---

# FAQ

This FAQ provides guidance for users working with Neon. It outlines core operations within Neon, offering clear instructions and practical support for each stage of the process, from logging in to publishing content.

## Logging In

### How do I log in to Neon?

Go to Neon login page, and depending on how your organization has configured access, you can log in to Neon by:

- **Using Neon Credentials (Username & Password):**
You can enter your Neon username and password directly on the login page. This method is typically used if your organization manages users directly within Neon.
- **Using an Identity Provider (IDP):**
If your organization uses an external login provider, you'll see one or more login options on the Neon login screen.
1. Choose your login option (e.g., your company account).
2. You'll be redirected to a secure login page.
3. Enter your credentials (like your email and password).
4. After verification, you'll be redirected back to Neon and logged in automatically.

![Login Screen](/img/userguide-screenshots/image%201.png)

### Can I be logged into Neon from multiple devices at the same time?

Yes, Neon allows you to have multiple active sessions across different devices or browsers. If you reach the maximum number of allowed concurrent sessions, Neon will notify you during login and give you options to either continue and keep all sessions active, log out from all other sessions, or choose which sessions to terminate.

### How do I manage and log out from concurrent sessions on another device or browser?

When you log in to Neon and have active sessions on other devices or browsers, Neon will show you a notification with options to manage these sessions. You can choose to continue with all sessions active, log out from all other sessions at once, or select specific sessions to end. This lets you control and secure your account by logging out remotely from devices you no longer want to stay logged in on.

![Session Management](/img/userguide-screenshots/image%202.png)

### What should I do if I forget my password?
- If you're using Neon credentials (a username and password created directly in Neon), please contact your company's system administrator or internal IT support team
- If you're using Single Sign-On (SSO) to access Neon, your login credentials are managed by your organization. Please follow your organization's standard password recovery process or contact your internal IT support team to reset your SSO password

### Why am I logged out automatically and need to log in again?

There is a time limit for your session to ensure your account stays secure. When this time limit is reached, your session expires for security reasons, and you will need to log in again to continue using the system. This helps protect your account and data, especially if your session was left open for a long time.

### What should I do if I see a login from another device that I didn't initiate?

If you suspect unauthorized access to your account, go to the login page, where you'll see your active sessions. Click **Kill All Sessions** to take immediate action.

Once triggered, this acts as a kill switch:

- Your account will be fully locked and logged out across all devices.
- You will no longer be able to log in until a Neon Administrator manually reactivates your account.
- Your configured administrator will be automatically notified of the action.

If needed, you can also reach out to your administrator directly to provide more context or request urgent support.

![Kill Sessions](/img/userguide-screenshots/image%203.png)

### What should I do if the login page keeps loading indefinitely?

If the login page keeps loading without progressing, try the following steps:

- Refresh the page or close and reopen your browser.
- Clear your browser cache and cookies, then try logging in again.
- Try accessing Neon from a different browser or using incognito/private mode, then log out of the session in the browser where you experienced the problem.
- If the issue persists, contact your system administrator, as there may be a temporary server or authentication issue.

### How can I keep my Neon account safe and secure?

To protect your Neon account and ensure your content remains secure, follow these best practices:

- **Periodically change your password**
    
    If you are a credential-based user, you can change your password in your Profile page and it is recommended to update it regularly using a strong combination of uppercase and lowercase letters, numbers, and special characters. If you log in via OIDC (Single Sign-On), the change password option will not be available in your Profile page since your authentication is handled externally, but you can manage your password or account settings through your organization's identity provider.
    
- **Protect Your Login Credentials**
    
    Never share your login details, each team member should use their own account with the appropriate access level. Always log out after using Neon on a shared or public device to prevent unauthorized access.
    
- **Monitor your active sessions**
    
    Currently, you can review all active sessions on the login page after signing in. If you notice anything unfamiliar, use the Kill Sessions option to log out from all other devices. In the future, this feature will also be available in your **Profile** under **Sessions** for easier access, helping you maintain better control over where and how your account is being used.
    
- **Avoid sharing your login details**
    
    Keep your credentials private. Each team member should use their own account with the correct access level.
    
- **Report unusual activity immediately**
    
    If you notice any suspicious logins or unexpected changes in your content, contact your system administrator or support team right away.

## Creating and Customizing Dashboard

### How can I create a new dashboard?

You can create multiple dashboards in Neon to match different workflows or focus areas, depending on your needs. To create a new dashboard, click the plus (+) **Create Dashboard** button at the left side menu of the screen. 

![Create Dashboard](/img/userguide-screenshots/image%204.png)

From there, you can:

- Add a name, icon, and description
- Choose your preferred layout
- Decide whether to start from scratch or build from an existing dashboard

![Dashboard Setup](/img/userguide-screenshots/image%205.png)

After creating your dashboard, you can add widgets based on your needs. Available widget types include Content List, Query List, HTML, and Quick Links. 

![Widget Types](/img/userguide-screenshots/image%206.png)

Once you've selected and configured your widgets, make sure to click **Save** to apply and store your dashboard setup.

![Save Dashboard](/img/userguide-screenshots/image%207.png)

### How do I edit or customize an existing dashboard?

While you're inside the dashboard, click the Edit Dashboard button at the top right. 

![Edit Dashboard](/img/userguide-screenshots/image%208.png)

From there, you can modify the layout, rearrange widgets by dragging and dropping them, or add and remove widgets as needed. Each widget can be customized to suit your preferences by clicking the settings icon on a widget to adjust its configuration. Once you're done editing the dashboard, click **Save** in the bottom right corner.

![Dashboard Editing](/img/userguide-screenshots/image%209.png)

### What's the best way to arrange my dashboard for easy access?

The best way to arrange your dashboard depends on your daily tasks and team responsibilities. Dashboards can be edited and customized at any time, allowing you to adapt the layout as your workflow or team priorities evolve. Here are some tips to help you organize it effectively:

- **Decide how to organize your dashboards**
You can either create multiple dashboards based on different functions such as publishing, planning, or monitoring to focus on relevant tasks, or set up a single comprehensive dashboard that combines various widgets like Content List, Query List, and Quick Links to access all your commonly used tools in one place.
- **Quick Links**
Add Quick Links widgets to highlight key queries, pages, or actions you need to access frequently. Whether you're a writer or a webpage editor, you can open what you need with a single, visible click.
    
    ![Quick Links Widget](/img/userguide-screenshots/image%2010.png)
    
- **Start with templates**
To be more efficient, if you or your team already have a dashboard layout that works well for a specific task or role, you can duplicate it and customize it to suit your needs, rather than building one from scratch
    
    ![Template Dashboard](/img/userguide-screenshots/image%2011.png)
    
- **Pinboard**
You can pin a story, live blog, or webpage that you're currently working on, or that you open frequently, and add it to your dashboard. To show pinned items on your dashboard, add a **Content List** widget to your dashboard and choose **Pinboard** under the preset options. This allows you to quickly navigate to important content and streamline your editing workflow.
    
    ![Pinboard Widget](/img/userguide-screenshots/image%2012.png)

### What should I do if some information is not updated or loaded on my dashboard?

If some information on your dashboard is not updated or loaded correctly, try these common fixes:

- Refresh the widget to reload the data.
    
    ![Refresh Widget](/img/userguide-screenshots/image%2013.png)
    
- Try clearing the cache in Neon (see Common Fixes section).
- Or log out and log back into Neon to reset your session.

If the problem persists, contact your system administrator for further assistance.

## Uploading Files

### How do I upload images or files to Neon?

To upload media, go to the Upload section from the top-right menu. 

![Upload Menu](/img/userguide-screenshots/image%2014.png)

Choose the appropriate workfolder and section where the media should be stored, and each section shows the types of files it supports. You can upload by clicking **Select File** or dragging files into the upload area.

![Upload Interface](/img/userguide-screenshots/image%2015.png)

Not only can you upload through the upload menu, but you can always upload images or files directly while creating a story by attaching the relevant media to the content as you work.

### How can I make sure my files are easy to find and manage after upload?

To keep your files organized and easy to retrieve when needed, follow these best practices:

- **Rename files before uploading**
    
    Use a consistent naming convention if your organization provides one. This helps maintain uniformity and prevents confusion across teams.
    
- **Include descriptive names with relevant keywords**
    
    Choose file names that reflect the content or purpose of the image or file. This makes it easier to search for relevant media later when creating or editing content based on the context.
    
- **Upload to the correct section**
    
    Ensure the file is uploaded to the appropriate content area within Neon (such as Newsroom, Sports, or Web Assets). This improves discoverability and keeps media properly categorized.

### Why am I unable to upload my files?

Here are a few possible reasons and how you can resolve them:

- **Unstable internet connection**
    
    A slow or interrupted internet connection can cause the upload process to freeze. Try refreshing your connection or switching to a more stable network.
    
- **Unsupported file type**
    
    Make sure the file format is supported in the selected upload section. 
    
- **Cache or browser-related issues**
    
    Temporary data or settings might interfere with uploads. Try clearing Neon's cache (see Common Fixes section) or your browser cache. You can also try switching to a different browser to see if the issue persists. If the problem persists, contact your system administrator for further assistance.
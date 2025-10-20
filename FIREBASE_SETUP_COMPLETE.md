# Firebase Security Rules Complete Setup Guide

## 📋 What Was Created

### 1. **firestore.rules** 
- Security rules file for your Firestore database
- Controls data access and permissions

### 2. **FIRESTORE_RULES_GUIDE.md**
- Detailed explanation of all rules
- How to apply rules in Firebase Console

### 3. **Updated AdminDashboard.jsx**
- User management interface
- Contact form management
- Real-time data from Firestore

### 4. **Updated UserLogin.jsx**
- Firebase authentication
- Saves user data to Firestore
- Sign up and sign in functionality

---

## 🚀 Step-by-Step Setup Instructions

### **STEP 1: Apply Security Rules in Firebase Console**

1. Open [Firebase Console](https://console.firebase.google.com/)
2. Select project: **gricollegeproject**
3. Click **Firestore Database** → **Rules** tab
4. Delete all existing rules (the 30-day temporary ones)
5. Copy entire content from `firestore.rules` file in your project
6. Paste into Firebase Rules editor
7. Click **Publish**
8. Wait for confirmation message ✅

### **STEP 2: Enable Authentication Methods**

1. In Firebase Console, click **Authentication** (left sidebar)
2. Click **Providers** tab
3. Make sure **Email/Password** is enabled ✅
4. (Optional) Add Google Sign-in for additional features

### **STEP 3: Test User Sign Up**

1. Go to your app: http://localhost:5173/
2. Click **"Sign Up"**
3. Enter any email and password (min 6 characters)
4. Submit the form
5. You should be logged in and redirected to home page

### **STEP 4: Verify User Created in Firestore**

1. Go to Firebase Console
2. Click **Firestore Database**
3. Look for **users** collection
4. Click on your user document
5. You should see:
   - uid
   - email
   - createdAt
   - lastLogin
   - role: "user"

### **STEP 5: Access Admin Dashboard**

1. Go to http://localhost:5173/admin
2. Enter admin credentials (from your AdminLogin page)
3. You should see the Admin Dashboard with 3 tabs:
   - **Notifications** - Send messages
   - **Users** - Manage user roles
   - **Contacts** - View contact form submissions

### **STEP 6: Promote User to Admin**

1. In Admin Dashboard, click **Users** tab
2. Find your user email
3. Click **"Make Admin"** button
4. User's role will change from "user" to "admin" in Firestore
5. Now this user can:
   - Edit projects, activities, gallery, team data
   - View contact form submissions
   - Create other admins

---

## 🔑 Understanding User Roles

### **Regular User ("user")**
- ✅ Can log in
- ✅ Can view all public content
- ✅ Can submit contact forms
- ✅ Can view their own field visits
- ❌ Cannot edit projects
- ❌ Cannot access admin dashboard

### **Admin User ("admin")**
- ✅ Can do everything a regular user can
- ✅ Can access admin dashboard
- ✅ Can edit projects, activities, gallery, team
- ✅ Can view all contact form submissions
- ✅ Can send notifications to all users
- ✅ Can promote other users to admin
- ✅ Can remove admin privileges

---

## 📊 Database Structure

Your Firestore database now has these collections:

```
users/
├── {uid1}
│   ├── uid: string
│   ├── email: string
│   ├── role: "user" or "admin"
│   ├── createdAt: timestamp
│   └── lastLogin: timestamp
├── {uid2}
└── ...

projects/
activities/
gallery/
team/
fieldVisits/
participations/
contacts/
notifications/
```

---

## 🔒 Security Rules Summary

### Public Collections (Anyone can read, only admins can write)
- projects
- activities
- gallery
- team

### Personal Collections (Only owner or admin)
- users (only user can read own)
- fieldVisits (only owner or admin)
- participations (only owner or admin)

### Special Collections
- contacts (anyone can create, only admin can read)
- notifications (only owner can read, admin can create)

---

## 🐛 Common Issues & Solutions

### **Issue: "Permission denied" error**
**Solution:** 
- Check if you're logged in
- Check your user's role in Firestore
- Refresh the page

### **Issue: Can't see user data in Firestore**
**Solution:**
- Make sure user actually signed up (check email)
- Check Firestore > users collection
- Check user's authentication status in Firebase Console

### **Issue: Admin button not working**
**Solution:**
- Make sure you're logged in as admin
- Check if user you're trying to promote exists
- Try refreshing the page

### **Issue: Rules showing as expired (30 days)**
**Solution:**
- You haven't applied the new rules yet
- Go back to STEP 1 and apply the `firestore.rules` file

---

## ✅ Verification Checklist

- [ ] Applied firestore.rules in Firebase Console
- [ ] Signed up a test user
- [ ] User appears in Firestore users collection
- [ ] Accessed Admin Dashboard
- [ ] Promoted user to admin
- [ ] User's role changed to "admin" in Firestore
- [ ] Can view users, contacts tabs in admin panel
- [ ] Contact forms save to Firestore
- [ ] Notifications send successfully

---

## 📞 Next Steps

1. **Test all features** with different user roles
2. **Monitor Firestore** usage in Firebase Console
3. **Set up backup rules** for production before going live
4. **Create admin users** for your team
5. **Test permission denials** to ensure security works

---

## 🎯 Production Ready Checklist

- [ ] Rules published in Firebase
- [ ] Test user created and verified
- [ ] Admin user created
- [ ] Email verification enabled (optional)
- [ ] Password reset configured
- [ ] Backups enabled in Firebase
- [ ] Firestore indexes created (Firebase will suggest)

---

## 📚 Additional Resources

- [Firebase Security Rules Documentation](https://firebase.google.com/docs/firestore/security/start)
- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
- [Firestore Best Practices](https://firebase.google.com/docs/firestore/best-practices)


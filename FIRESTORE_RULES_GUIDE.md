# Firebase Security Rules Setup Guide

## 📋 Overview
The `firestore.rules` file contains security rules for your Firestore database. These rules control who can read, write, update, and delete data.

## 🔒 Security Rules Explained

### 1. **Users Collection** - `/users/{userId}`
```
allow read, write: if request.auth.uid == userId;
```
- ✅ Users can only access their own data
- ✅ New users can create an account
- ❌ Users cannot access other users' data

### 2. **Public Collections** (projects, activities, gallery, team)
```
allow read: if true;
allow write: if hasRole(admin);
```
- ✅ Everyone can view public data (no login needed)
- ✅ Only admins can create/edit content
- ❌ Regular users cannot modify

### 3. **Field Visits** - `/fieldVisits/{visitId}`
- ✅ Users can see their own field visits
- ✅ Admins can see all field visits
- ✅ Users can create their own records
- ❌ Users cannot view others' visits

### 4. **Participations** - `/participations/{participationId}`
- ✅ Users can track their own participation
- ✅ Admins have full access
- ❌ Users cannot see others' records

### 5. **Contact Forms** - `/contacts/{document}`
- ✅ Anyone can submit a contact form (no login needed)
- ✅ Only admins can view and manage submissions
- ❌ Regular users cannot access submissions

### 6. **Notifications** - `/notifications/{notificationId}`
- ✅ Users can read their own notifications
- ✅ Admins can create notifications
- ❌ Users cannot create or modify

## 🚀 How to Apply These Rules

### Step 1: Open Firebase Console
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **gricollegeproject**

### Step 2: Navigate to Firestore Rules
1. Click **Firestore Database** in left sidebar
2. Click **Rules** tab at the top

### Step 3: Replace Existing Rules
1. Delete all existing rules (the 30-day temporary ones)
2. Copy all content from `firestore.rules` file
3. Paste into the Firebase Rules editor
4. Click **Publish**

### Step 4: Verify Deployment
- You should see "Rules updated successfully" message
- Rules take effect immediately

## 🔑 Key Security Concepts

### Authentication Check: `request.auth.uid`
- Verifies user is logged in
- Contains the unique user ID from Firebase Auth

### Role-Based Access: `hasRole(userId, 'admin')`
- Checks if user has 'admin' role in Firestore
- Admins get special permissions

### Data Ownership: `resource.data.userId`
- Ensures users can only modify their own data
- `resource` = existing data in database
- `request.resource` = new data being written

## 📝 User Collection Structure

When a user signs up, their document should have this structure:

```javascript
{
  uid: "user123abc",
  email: "user@example.com",
  createdAt: Timestamp,
  lastLogin: Timestamp,
  role: "user"  // or "admin"
}
```

## 👨‍💼 Making Users Admins

To make a user an admin in Firebase Console:

1. Go to **Firestore Database**
2. Navigate to **users** collection
3. Click on the user's document
4. Add/edit field: `role: "admin"`

## ⚠️ Important Notes

- ❌ **NEVER** use the temporary 30-day rules in production
- ✅ These rules are now permanent
- ✅ Users must be authenticated for most operations
- ✅ Public data (projects, activities) is readable by everyone
- ✅ Only admins can modify public content

## 🧪 Testing Rules

### To test if rules are working:

1. **Sign up as regular user** - Should succeed
2. **Try accessing another user's data** - Should fail
3. **Try editing public projects** - Should fail (unless admin)
4. **Submit contact form** - Should succeed (no login needed)

## 🔄 Next Steps

1. ✅ Apply these rules in Firebase Console
2. ✅ Update user roles as needed
3. ✅ Test all features
4. ✅ Monitor Firestore usage in Console

## 📞 Support

If you get "Permission denied" errors:
- Check if user is authenticated (logged in)
- Verify user role matches required access level
- Check Firestore rules in Firebase Console

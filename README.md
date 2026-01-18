# 📊 Sheet CRUD Interface

A full-stack web application built with Google Apps Script that provides a complete CRUD (Create, Read, Update, Delete) interface for managing Google Sheets data. Features real-time data management, search functionality, and a clean, responsive UI.

## 🔗 Live Demo
**[Try it here](https://script.google.com/macros/s/AKfycbzyyfFq5IuEVPTv1ncEEnL4WzZ0TWUOZ3jW3SepIdi6Canh7LU-b5Cr1G0G9dEUnecz_g/exec)**

---

## ✨ Features

**Core Functionality:**
- ✅ **Create** - Add new records with form validation
- 📖 **Read** - View all records in a clean table format
- ✏️ **Update** - Edit existing records in-place
- 🗑️ **Delete** - Remove records with confirmation
- 🔍 **Search** - Real-time search across all fields
- 📊 **Dynamic Data** - Automatically syncs with Google Sheets

**Data Management:**
- 💼 Customer information tracking
- 📅 Date management with proper formatting
- 👥 Sales representative assignments
- 🏢 Sector categorization
- 💰 Amount tracking with currency formatting
- 📦 Shipment status tracking
- ✅ Payment status management

**UI/UX:**
- 🎨 Clean, professional interface
- 📱 Fully responsive design
- ⚡ Real-time data updates
- 🔄 Instant search filtering
- 💡 User-friendly Edit/Delete actions
- ✨ Smooth transitions and interactions

---

## 🏗️ Tech Stack

**Backend:** Google Apps Script (JavaScript)  
**Frontend:** HTML5, CSS3, JavaScript  
**Database:** Google Sheets  
**Features:** CRUD operations, Search functionality, Real-time updates

---

## 📋 Data Structure

| Field | Type | Description |
|-------|------|-------------|
| ID | Number | Unique identifier |
| Date | Date | Transaction/record date |
| Customer Name | Text | Customer full name |
| Sales Rep | Dropdown | Assigned sales representative |
| Sector | Dropdown | Business sector/category |
| Status | Dropdown | Payment/contract status |
| Amount | Currency | Transaction amount |
| Shipped | Boolean | Shipment status (Yes/No) |

---

## 🚀 Setup

1. **Create Google Sheet:**
   - Create a new Google Sheet
   - Add columns: ID, Date, Customer Name, Sales Rep, Sector, Status, Amount, Shipped
   - Populate with sample data

2. **Set Up Apps Script:**
   - Go to Extensions → Apps Script
   - Create files: `Code.gs`, `Index.html`, `Style.html`, `Script.html`
   - Copy code from repository

3. **Deploy as Web App:**
   - Click Deploy → New deployment
   - Select Web app
   - Execute as: Me
   - Access: Anyone (or your organization)
   - Click Deploy and copy URL

---

## 💡 Usage

**Add New Record:**
1. Click "Add New Record" button
2. Fill in form fields
3. Submit to add to sheet

**Edit Record:**
1. Click "Edit" button on any row
2. Modify fields in popup/inline form
3. Save changes

**Delete Record:**
1. Click "Delete" button
2. Confirm deletion
3. Record removed from sheet

**Search Records:**
1. Type in search box
2. Results filter in real-time
3. Search across all fields

---

## 🎯 Use Cases

- Sales tracking and CRM systems
- Customer order management
- Payment status tracking
- Business transaction records
- Team collaboration on shared data
- Simple database management without backend setup

---

## 🔑 Key Highlights

- **Zero Infrastructure** - Runs entirely on Google's platform
- **Real-time Collaboration** - Multiple users can work simultaneously
- **No Database Setup** - Uses Google Sheets as backend
- **Easy Deployment** - Deploy in minutes, no server required
- **Customizable** - Easily modify fields and logic
- **Scalable** - Handle thousands of records efficiently

---

## 🎨 Customization

**Add New Fields:**
- Update Google Sheet columns
- Modify `Code.gs` to include new fields
- Update HTML form in `Index.html`

**Change Styling:**
- Edit CSS in `Style.html`
- Customize colors, fonts, layout
- Add Bootstrap or custom framework

**Modify Dropdowns:**
- Update dropdown options in `Code.gs`
- Add data validation in Google Sheets
- Customize based on business needs

---

## 🐛 Troubleshooting

**Data Not Showing:**
- Verify sheet name matches code
- Check column headers are correct
- Redeploy web app after changes

**Edit/Delete Not Working:**
- Ensure proper permissions in deployment
- Check Apps Script execution logs
- Verify row IDs are unique

**Search Not Functioning:**
- Clear browser cache
- Check JavaScript console for errors
- Redeploy latest version

---

## 📄 License

MIT License - Free to use and modify

---
📧 shettynaviya4@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/naviya-shetty-78a155220/)  
🌐 [Portfolio](https://naviyashetyy-portfolio.netlify.app/)  
💻 [GitHub](https://github.com/shettynaviya)
⭐ **Star this repo if you find it useful!**

**Built with ❤️ using Google Apps Script**

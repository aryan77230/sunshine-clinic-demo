# Sunrise Family Clinic — Complete GHL Demo Project

**Project Name:** Sunrise Family Clinic
**Niche:** Family Medical Clinic
**Purpose:** Demo project to demonstrate GHL proficiency

---

## TABLE OF CONTENTS

1. [Sub-Account Setup](#1-sub-account-setup)
2. [Custom Fields](#2-custom-fields)
3. [Custom Values](#3-custom-values)
4. [Calendar Setup](#4-calendar-setup)
5. [Pipelines & Stages](#5-pipelines--stages)
6. [Email Templates (DONE BY CLAUDE)](#6-email-templates)
7. [SMS Snippets (DONE BY CLAUDE)](#7-sms-snippets)
8. [Forms](#8-forms)
9. [Workflows — Organized by Pipeline](#9-workflows--organized-by-pipeline)
10. [Tags](#10-tags)

---

## 1. SUB-ACCOUNT SETUP
> **You do this in GHL**

1. Go to **Agency View** > **Sub Accounts** (left sidebar)
2. Click **"Create Sub-Account"** button (top right)
3. Select **"Start from Scratch"** (blank account)
4. Fill in:
   - **Sub-Account Name:** `Sunrise Family Clinic`
   - **Phone:** `(555) 123-4567`
   - **Email:** `info@sunrisefamilyclinic.com`
   - **Address:** `123 Health Ave, Springfield, IL 62704`
   - **Timezone:** Your timezone
   - **Industry:** `Health & Wellness` or `Medical`
5. Click **Save**
6. Now click on the sub-account to **switch into it**

---

## 2. CUSTOM FIELDS
> **You do this in GHL**

**Where:** Settings (gear icon, bottom-left) > **Custom Fields** > click **"+ Add Field"**

When you click "+ Add Field", a popup appears. Fill in these exact values for each field:

---

### FIELD 1: Date of Birth

| Setting | What to Select / Type |
|---------|----------------------|
| **Field Name** | `Date of Birth` |
| **Field Type** | Select **"Date Picker"** from the dropdown |
| **Group/Folder** | Click **"+ Create Group"** > type `Contact` > press Enter |
| **Placeholder** | `Select your date of birth` |
| **Required** | No (leave unchecked — this is a contact field, not a form field) |

Click **Save Field**

---

### FIELD 2: Gender

| Setting | What to Select / Type |
|---------|----------------------|
| **Field Name** | `Gender` |
| **Field Type** | Select **"Single Select Dropdown"** (NOT Multi Select — patient can only pick one) |
| **Group/Folder** | Select existing group: `Contact` |
| **Options** | Add these 3 options one by one (click "+ Add Option" after each): |

| Option # | Option Value |
|----------|-------------|
| 1 | `Male` |
| 2 | `Female` |
| 3 | `Other` |

Click **Save Field**

---

### FIELD 3: Insurance Provider

| Setting | What to Select / Type |
|---------|----------------------|
| **Field Name** | `Insurance Provider` |
| **Field Type** | Select **"Single Line Text"** (free text — every insurance name is different) |
| **Group/Folder** | Select existing group: `Contact` |
| **Placeholder** | `e.g., Blue Cross Blue Shield` |

Click **Save Field**

---

### FIELD 4: Insurance Policy Number

| Setting | What to Select / Type |
|---------|----------------------|
| **Field Name** | `Insurance Policy Number` |
| **Field Type** | Select **"Single Line Text"** (free text — policy numbers vary in format) |
| **Group/Folder** | Select existing group: `Contact` |
| **Placeholder** | `e.g., ABC123456789` |

Click **Save Field**

---

### FIELD 5: Primary Doctor

| Setting | What to Select / Type |
|---------|----------------------|
| **Field Name** | `Primary Doctor` |
| **Field Type** | Select **"Single Select Dropdown"** (NOT Multi Select — one doctor per patient) |
| **Group/Folder** | Select existing group: `Contact` |
| **Options** | Add these 2 options one by one: |

| Option # | Option Value |
|----------|-------------|
| 1 | `Dr. Sarah Mitchell` |
| 2 | `Dr. James Parker` |

Click **Save Field**

---

### FIELD 6: Blood Group

| Setting | What to Select / Type |
|---------|----------------------|
| **Field Name** | `Blood Group` |
| **Field Type** | Select **"Single Select Dropdown"** (NOT Multi Select — one blood group per person) |
| **Group/Folder** | Select existing group: `Contact` |
| **Options** | Add these 8 options one by one: |

| Option # | Option Value |
|----------|-------------|
| 1 | `A+` |
| 2 | `A-` |
| 3 | `B+` |
| 4 | `B-` |
| 5 | `AB+` |
| 6 | `AB-` |
| 7 | `O+` |
| 8 | `O-` |

Click **Save Field**

---

### FIELD 7: Allergies

| Setting | What to Select / Type |
|---------|----------------------|
| **Field Name** | `Allergies` |
| **Field Type** | Select **"Multi Line Text"** (NOT Single Line — patients may list multiple allergies) |
| **Group/Folder** | Select existing group: `Contact` |
| **Placeholder** | `e.g., Penicillin, Peanuts, Latex (or type None)` |

Click **Save Field**

---

### FIELD 8: Preferred Contact Method

| Setting | What to Select / Type |
|---------|----------------------|
| **Field Name** | `Preferred Contact Method` |
| **Field Type** | Select **"Single Select Dropdown"** (NOT Multi Select — pick one preferred way) |
| **Group/Folder** | Select existing group: `Contact` |
| **Options** | Add these 3 options one by one: |

| Option # | Option Value |
|----------|-------------|
| 1 | `Phone` |
| 2 | `Email` |
| 3 | `SMS` |

Click **Save Field**

---

### After all 8 fields are done, your Custom Fields page should look like this:

```
📁 Contact
   ├── Date of Birth              (Date Picker)
   ├── Gender                     (Single Select Dropdown)
   ├── Insurance Provider         (Single Line Text)
   ├── Insurance Policy Number    (Single Line Text)
   ├── Primary Doctor             (Single Select Dropdown)
   ├── Blood Group                (Single Select Dropdown)
   ├── Allergies                  (Multi Line Text)
   └── Preferred Contact Method   (Single Select Dropdown)
```

**Quick cheat sheet — when to use which type:**
- **Single Line Text** = Free typing, short answer (name, policy number)
- **Multi Line Text** = Free typing, long answer (allergies, notes)
- **Date Picker** = Calendar popup to pick a date
- **Single Select Dropdown** = Pick exactly ONE option from a list
- **Multi Select Dropdown** = Pick ONE or MORE options (we don't use this in our project)

---

## 3. CUSTOM VALUES
> **You do this in GHL**

Go to **Settings** > **Custom Values** > click **"+ Add Custom Value"**

| # | Name | Value |
|---|------|-------|
| 1 | clinic.name | Sunrise Family Clinic |
| 2 | clinic.phone | (555) 123-4567 |
| 3 | clinic.email | info@sunrisefamilyclinic.com |
| 4 | clinic.address | 123 Health Ave, Springfield, IL 62704 |
| 5 | clinic.website | www.sunrisefamilyclinic.com |
| 6 | clinic.hours | Mon-Fri 8:00 AM - 5:00 PM |
| 7 | clinic.doctor_name | Dr. Sarah Mitchell |
| 8 | clinic.cancellation_policy | Please cancel at least 24 hours before your appointment |
| 9 | clinicbooking_link | https://api.leadconnectorhq.com/widget/booking/coo6QdcCOhEdW1KuRq33 |

---

## 4. CALENDAR SETUP
> **You do this in GHL**

Go to **Calendars** > click **"+ Create Calendar"**

### Calendar Settings:
- **Calendar Name:** `Patient Appointment`
- **Calendar Type:** Round Robin (or Simple if only 1 staff)
- **Description:** `Book your appointment at Sunrise Family Clinic`
- **URL Slug:** `patient-appointment-aryan`

### Availability:
- **Monday to Friday:** 8:00 AM - 5:00 PM
- **Saturday & Sunday:** Unavailable (toggle off)
- **Slot Duration:** 30 minutes
- **Slot Interval:** 30 minutes
- **Buffer Time Between Appointments:** 10 minutes

### Forms & Payment Tab:
- Keep default GHL booking form (Name, Email, Phone)
- No payment needed

### Notifications Tab:
- Enable **"Send confirmation email to contact"** — YES
- Enable **"Send reminder email to contact"** — YES

### Additional Settings:
- **Minimum Scheduling Notice:** 2 hours
- **Date Range:** Allow booking up to 30 days in advance
- **Allow Reschedule:** Yes
- **Allow Cancellation:** Yes

Click **Save**

---

## 5. PIPELINES & STAGES
> **You do this in GHL**

Go to **Opportunities** > **Pipelines** > click **"+ Create Pipeline"**

---

### PIPELINE 1: New Patient Pipeline
**Pipeline Name:** `New Patient Pipeline`
**Purpose:** Tracks every new lead from first contact to becoming an active patient or dropping off.

| Stage # | Stage Name | What It Means |
|---------|-----------|---------------|
| 1 | New Lead | Contact just came in (form, call, ad, walk-in). No one has reached out yet. |
| 2 | Contacted | Staff has called/texted/emailed the lead at least once. |
| 3 | Interested | Lead responded positively, wants to know more or book. |
| 4 | Appointment Booked | Lead has a confirmed upcoming appointment on the calendar. |
| 5 | Visited | Patient showed up and completed their first visit. |
| 6 | Won — Active Patient | Patient is now a regular. Repeat visits expected. |
| 7 | Not Interested | Lead said no, not looking for care, or chose another clinic. |
| 8 | No Response | Lead never replied after multiple contact attempts. |

**Stage flow diagram:**
```
New Lead → Contacted → Interested → Appointment Booked → Visited → Won — Active Patient
                 ↓            ↓              ↓                ↓
            No Response   Not Interested   No Response     No Response
```

---

### PIPELINE 2: Appointment Tracker
**Pipeline Name:** `Appointment Tracker`
**Purpose:** Tracks the lifecycle of each individual appointment from booking to outcome.

| Stage # | Stage Name | What It Means |
|---------|-----------|---------------|
| 1 | Upcoming | Appointment is scheduled, not yet confirmed by patient. |
| 2 | Confirmed | Patient replied YES or confirmed attendance. |
| 3 | Rescheduled | Patient asked to move the appointment to a different time. |
| 4 | Completed | Patient showed up, visit is done. |
| 5 | No Show | Patient did not show up and did not cancel. |
| 6 | Cancelled | Patient cancelled the appointment before the date. |

**Stage flow diagram:**
```
Upcoming → Confirmed → Completed
    ↓          ↓
Rescheduled  No Show
    ↓
Cancelled
```

---

### PIPELINE 3: Review & Referral
**Pipeline Name:** `Review & Referral`
**Purpose:** After a visit, track whether we got a review and if the patient referred others.

| Stage # | Stage Name | What It Means |
|---------|-----------|---------------|
| 1 | Review Requested | We sent the patient a review request (email/SMS). |
| 2 | Review Received | Patient left a Google/Facebook review. |
| 3 | Review Declined | Patient did not leave a review after all attempts. |
| 4 | Referral Requested | We asked the patient to refer friends/family. |
| 5 | Referral Received | Patient successfully referred someone new. |

**Stage flow diagram:**
```
Review Requested → Review Received → Referral Requested → Referral Received
        ↓
  Review Declined → Referral Requested → Referral Received
```

---

## 6. EMAIL TEMPLATES
> **DONE BY CLAUDE — Files are ready in `templates/emails/`**

You have 5 HTML email templates ready to paste into GHL.

### How to add each email template:
1. Go to **Marketing** > **Emails** > click **"+ Create Template"**
2. Select **"Code Editor"** (or "HTML" option — look for it in the bottom or builder type selection)
3. Enter the **Template Name** and **Subject Line** exactly as shown below
4. Copy the entire HTML from the file and paste it into the code editor
5. Click **Save**

| # | File | Template Name | Subject Line (copy-paste this) |
|---|------|--------------|-------------------------------|
| 1 | `01-new-patient-welcome.html` | `Email - New Patient Welcome` | `Welcome to Sunrise Family Clinic, {{contact.first_name}}!` |
| 2 | `02-appointment-confirmation.html` | `Email - Appointment Confirmed` | `Your Appointment is Confirmed — {{appointment.only_start_date}}` |
| 3 | `03-appointment-reminder.html` | `Email - Appointment Reminder` | `Reminder: Your Appointment is Tomorrow` |
| 4 | `04-review-request.html` | `Email - Review Request` | `{{contact.first_name}}, How Was Your Visit?` |
| 5 | `05-missed-appointment.html` | `Email - Missed Appointment` | `We Missed You, {{contact.first_name}} — Let's Reschedule` |

**Note:** These templates use GHL merge fields like `{{contact.first_name}}`, `{{appointment.only_start_date}}`, etc. They will auto-fill when sent through automations.

---

## 7. SMS SNIPPETS
> **DONE BY CLAUDE — File is at `templates/sms/all-sms-snippets.md`**

You have 8 SMS snippets ready to copy-paste.

### How to add each SMS snippet:
1. Go to **Marketing** > **Templates** > click on **SMS** tab
2. Click **"+ Create Template"**
3. Paste the message text from the file
4. Name it exactly as shown in the file
5. Click **Save**

**Snippet Names (all listed in the file):**
1. `SMS - New Lead Welcome`
2. `SMS - Appointment Confirmed`
3. `SMS - 24hr Reminder`
4. `SMS - 1hr Reminder`
5. `SMS - Review Request`
6. `SMS - Missed Appointment`
7. `SMS - Follow Up`
8. `SMS - Re-Engagement`

---

## 8. FORMS
> **You do this in GHL**

**Where:** Sites (left sidebar) > **Forms** > click **"+ Create Form"**

When you create a form, GHL opens a drag-and-drop builder. You drag fields from the left panel onto the form. For each field, click on it to open its settings on the right side.

---

### FORM 1: New Patient Intake Form

**Step 1:** Click **"+ Create Form"** > Name it: `New Patient Intake` > Click **Create**

**Step 2:** Drag and add these fields in order. For each field, click on it and set the properties exactly as shown:

---

**Field 1: First Name**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Full Name"** element (it auto-splits into First + Last) |
| OR drag | **"Short Answer"** element |
| Label | `First Name` |
| Placeholder | `Enter your first name` |
| Required toggle | **ON** (blue) — Patient must fill this |

**Field 2: Last Name**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Short Answer"** element |
| Label | `Last Name` |
| Placeholder | `Enter your last name` |
| Required toggle | **ON** (blue) |

**Field 3: Email**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Email"** element (NOT Short Answer — Email type validates @ format) |
| Label | `Email` |
| Placeholder | `you@example.com` |
| Required toggle | **ON** (blue) — We need email to send confirmations |

**Field 4: Phone Number**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Phone"** element (NOT Short Answer — Phone type formats the number) |
| Label | `Phone Number` |
| Placeholder | `(555) 000-0000` |
| Required toggle | **ON** (blue) — We need phone to send SMS |

**Field 5: Date of Birth**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Date Picker"** element |
| Label | `Date of Birth` |
| Placeholder | `Select your date of birth` |
| Required toggle | **ON** (blue) — Needed for medical records |
| Map to custom field | Select **"Date of Birth"** (the custom field you created in Section 2) |

> **What is "Map to custom field"?** When you click on a form field's settings, you'll see an option to map it to a contact custom field. This means when someone fills the form, the value automatically saves to that custom field on their contact record. Always map when a matching custom field exists.

**Field 6: Gender**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Dropdown"** element (NOT Multi-Select) |
| Label | `Gender` |
| Dropdown Type | **Single Select** (patient picks one) |
| Options | Add 3 options by clicking "+ Add Option": |
| Option 1 | `Male` |
| Option 2 | `Female` |
| Option 3 | `Other` |
| Placeholder | `Select your gender` |
| Required toggle | **ON** (blue) |
| Map to custom field | Select **"Gender"** |

**Field 7: Insurance Provider**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Short Answer"** element |
| Label | `Insurance Provider` |
| Placeholder | `e.g., Blue Cross Blue Shield (leave blank if none)` |
| Required toggle | **OFF** (grey) — Not everyone has insurance, don't block the form |
| Map to custom field | Select **"Insurance Provider"** |

---

**Step 3: Form Settings** (click the gear icon or "Settings" tab at the top of the form builder)

| Setting | Value |
|---------|-------|
| Submit Button Text | `Submit` |
| After Submit Action | Select **"Show Thank You Message"** |
| Thank You Message | `Thank you for registering with Sunrise Family Clinic! We'll be in touch shortly.` |
| Form Label Style | `Bold` (optional, makes it look cleaner) |

Click **Save** in the top right corner.

---

**Summary — Form 1 at a glance:**

| # | Label | Element Type | Required | Mapped to Custom Field |
|---|-------|-------------|----------|----------------------|
| 1 | First Name | Short Answer | YES | — (auto-maps to contact First Name) |
| 2 | Last Name | Short Answer | YES | — (auto-maps to contact Last Name) |
| 3 | Email | Email | YES | — (auto-maps to contact Email) |
| 4 | Phone Number | Phone | YES | — (auto-maps to contact Phone) |
| 5 | Date of Birth | Date Picker | YES | Date of Birth |
| 6 | Gender | Dropdown (Single Select) | YES | Gender |
| 7 | Insurance Provider | Short Answer | **NO** | Insurance Provider |

> **Why is Insurance not required?** Not all patients have insurance. If you make it required, uninsured patients can't submit the form. Always think: "Would blocking this field stop a real patient from signing up?"

---

### FORM 2: Contact Us Form

**Step 1:** Click **"+ Create Form"** > Name it: `Contact Us` > Click **Create**

**Step 2:** Add these fields:

---

**Field 1: Full Name**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Full Name"** element OR **"Short Answer"** |
| Label | `Full Name` |
| Placeholder | `Enter your full name` |
| Required toggle | **ON** (blue) — We need to know who's contacting us |

**Field 2: Email**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Email"** element |
| Label | `Email` |
| Placeholder | `you@example.com` |
| Required toggle | **ON** (blue) — Needed to reply |

**Field 3: Phone Number**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Phone"** element |
| Label | `Phone Number` |
| Placeholder | `(555) 000-0000` |
| Required toggle | **ON** (blue) — Backup way to reach them |

**Field 4: Message**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Long Answer / Textarea"** element |
| Label | `Message` |
| Placeholder | `How can we help you?` |
| Required toggle | **ON** (blue) — No point submitting an empty message |

---

**Step 3: Form Settings**

| Setting | Value |
|---------|-------|
| Submit Button Text | `Send Message` |
| After Submit Action | **"Show Thank You Message"** |
| Thank You Message | `Thanks for reaching out! Our team will get back to you within 24 hours.` |

Click **Save**

---

**Summary — Form 2 at a glance:**

| # | Label | Element Type | Required | Mapped to Custom Field |
|---|-------|-------------|----------|----------------------|
| 1 | Full Name | Full Name / Short Answer | YES | — (auto-maps) |
| 2 | Email | Email | YES | — (auto-maps) |
| 3 | Phone Number | Phone | YES | — (auto-maps) |
| 4 | Message | Long Answer / Textarea | YES | — (no custom field) |

> This is a simple 4-field form. Every field is required because someone contacting you should provide all 4 pieces of info.

---

### FORM 3: Appointment Request Form

**Step 1:** Click **"+ Create Form"** > Name it: `Request Appointment` > Click **Create**

**Step 2:** Add these fields:

---

**Field 1: First Name**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Short Answer"** element |
| Label | `First Name` |
| Placeholder | `Enter your first name` |
| Required toggle | **ON** (blue) |

**Field 2: Last Name**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Short Answer"** element |
| Label | `Last Name` |
| Placeholder | `Enter your last name` |
| Required toggle | **ON** (blue) |

**Field 3: Phone Number**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Phone"** element |
| Label | `Phone Number` |
| Placeholder | `(555) 000-0000` |
| Required toggle | **ON** (blue) — Primary way to confirm appointments |

**Field 4: Email**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Email"** element |
| Label | `Email` |
| Placeholder | `you@example.com` |
| Required toggle | **ON** (blue) — For sending confirmation email |

**Field 5: Preferred Date**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Date Picker"** element |
| Label | `Preferred Date` |
| Placeholder | `Select your preferred date` |
| Required toggle | **ON** (blue) — We need to know when they want to come |
| Date restrictions | If available, set **"Disable past dates"** to ON |

**Field 6: Preferred Time**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Dropdown"** element (NOT Multi-Select) |
| Label | `Preferred Time` |
| Dropdown Type | **Single Select** (one time slot) |
| Options | Add 3 options: |
| Option 1 | `Morning (8 AM - 11 AM)` |
| Option 2 | `Afternoon (12 PM - 3 PM)` |
| Option 3 | `Late Afternoon (3 PM - 5 PM)` |
| Placeholder | `Select preferred time slot` |
| Required toggle | **ON** (blue) |

---

**Step 3: Form Settings**

| Setting | Value |
|---------|-------|
| Submit Button Text | `Request Appointment` |
| After Submit Action | **"Show Thank You Message"** |
| Thank You Message | `Thank you! We'll confirm your appointment within 24 hours.` |

Click **Save**

---

**Summary — Form 3 at a glance:**

| # | Label | Element Type | Required | Why Required/Optional |
|---|-------|-------------|----------|----------------------|
| 1 | First Name | Short Answer | YES | Need to identify the patient |
| 2 | Last Name | Short Answer | YES | Need to identify the patient |
| 3 | Phone Number | Phone | YES | To call/text for confirmation |
| 4 | Email | Email | YES | To email confirmation details |
| 5 | Preferred Date | Date Picker | YES | Can't book without a date |
| 6 | Preferred Time | Dropdown (Single Select) | YES | Need to know morning/afternoon/evening |

---

### FORM 4: Patient Review Form
**Form Name:** `Patient Review`

**Step 1:** Click **"+ Create Form"** > Name it: `Patient Review` > Click **Create**

**Step 2:** Add these fields:

---

**Field 1: First Name**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Short Answer"** element |
| Label | `First Name` |
| Placeholder | `Enter your first name` |
| Required toggle | **ON** (blue) |

**Field 2: Last Name**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Short Answer"** element |
| Label | `Last Name` |
| Placeholder | `Enter your last name` |
| Required toggle | **ON** (blue) |

**Field 3: Email**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Email"** element |
| Label | `Email` |
| Placeholder | `you@example.com` |
| Required toggle | **ON** (blue) — Needed to match the contact in GHL |

**Field 4: Rating**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Dropdown"** element (NOT Multi-Select) |
| Label | `How would you rate your experience?` |
| Dropdown Type | **Single Select** |
| Options | Add 5 options: |
| Option 1 | `5 - Excellent` |
| Option 2 | `4 - Very Good` |
| Option 3 | `3 - Good` |
| Option 4 | `2 - Fair` |
| Option 5 | `1 - Poor` |
| Placeholder | `Select a rating` |
| Required toggle | **ON** (blue) |

**Field 5: Feedback**
| Setting | Value |
|---------|-------|
| Drag from left panel | **"Long Answer / Textarea"** element |
| Label | `Tell us about your experience` |
| Placeholder | `What did you like? What can we improve?` |
| Required toggle | **OFF** (grey) — Rating alone is enough, detailed feedback is optional |

---

**Step 3: Form Settings**

| Setting | Value |
|---------|-------|
| Submit Button Text | `Submit Review` |
| After Submit Action | **"Show Thank You Message"** |
| Thank You Message | `Thank you for your feedback, {{contact.first_name}}! Your review means the world to our team.` |

Click **Save**

---

**Step 4: Get the form link and create a custom value**
1. After saving, click **"Integrate Form"** or look for the form URL/link
2. Copy the full form URL
3. Go to **Settings** > **Custom Values** > click **"+ Add Custom Value"**
4. Name: `clinicreview_form_link`
5. Value: paste the form URL you just copied
6. Click **Save**

---

**Summary — Form 4 at a glance:**

| # | Label | Element Type | Required | Why |
|---|-------|-------------|----------|-----|
| 1 | First Name | Short Answer | YES | Identify the patient |
| 2 | Last Name | Short Answer | YES | Identify the patient |
| 3 | Email | Email | YES | Match to existing contact |
| 4 | How would you rate your experience? | Dropdown (Single Select) | YES | Core review data |
| 5 | Tell us about your experience | Long Answer / Textarea | **NO** | Optional detailed feedback |

---

### CHEAT SHEET: Which form element to use when

| You want... | Use this element | Why |
|------------|-----------------|-----|
| Name, address, one-line answer | **Short Answer** | Single line, quick to fill |
| Email address | **Email** | Auto-validates the @ symbol |
| Phone number | **Phone** | Auto-formats number, maps to contact phone |
| Long text (message, notes, allergies) | **Long Answer / Textarea** | Multi-line, gives space to type |
| Pick ONE option from a list | **Dropdown** (Single Select) | Shows a clean dropdown, one choice only |
| Pick MULTIPLE options from a list | **Dropdown** (Multi Select) | Checkboxes in a dropdown (we don't use this) |
| Pick a date | **Date Picker** | Shows calendar popup |
| Yes/No question | **Checkbox** | Single toggle (we don't use this) |

---

## 9. WORKFLOWS — ORGANIZED BY PIPELINE
> **You do this in GHL**

Go to **Automations** > click **"+ Create Workflow"** > **"Start from Scratch"**

Workflows are organized below by which pipeline they mainly serve. This makes it clear which automation drives which part of your business.

---

### PIPELINE 1 WORKFLOWS: New Patient Pipeline

These workflows move contacts through: **New Lead → Contacted → Interested → Appointment Booked → Visited → Won — Active Patient** (or the negative outcomes).

---

#### WF-1: New Lead Intake
**Workflow Name:** `WF-1 New Lead Intake`
**Pipeline:** New Patient Pipeline
**Purpose:** When someone fills the intake form, create them as a lead and start outreach.

**Trigger:** `Form Submitted` > select form `New Patient Intake`

```
STEP 1: [Trigger] Form Submitted — "New Patient Intake"
   |
STEP 2: [Action] Add Tag → "new-patient"
   |
STEP 3: [Action] Create Opportunity
          → Pipeline: "New Patient Pipeline"
          → Stage: "New Lead"
          → Opportunity Name: {{contact.first_name}} {{contact.last_name}}
   |
STEP 4: [Action] Send Email
          → Template: "Email - New Patient Welcome"
   |
STEP 5: [Action] Wait → 5 minutes
   |
STEP 6: [Action] Send SMS
          → Template: "SMS - New Lead Welcome"
   |
STEP 7: [Action] Update Opportunity
          → Pipeline: "New Patient Pipeline"
          → Stage: Move to "Contacted"
   |
STEP 8: [Action] Internal Notification (Send to yourself)
          → Message: "New patient lead: {{contact.first_name}} {{contact.last_name}} — Call them!"
```

**What happens:** Lead enters at "New Lead", gets welcome email + SMS, then auto-moves to "Contacted" because we've now reached out. Staff gets notified to follow up personally.

---

#### WF-2: No Response Follow-Up
**Workflow Name:** `WF-2 No Response Follow Up`
**Pipeline:** New Patient Pipeline
**Purpose:** When opportunity is created or contact is in "Contacted" stage, wait 3 days and check if they replied. If no reply, follow up. If still no reply after 7 days total, mark as No Response.

**Trigger:** `Opportunity Created` OR `Opportunity Stage Changed` > Stage = `Contacted`

```
STEP 1: [Trigger] Opportunity Created / Stage = "Contacted" in "New Patient Pipeline"
   |
STEP 2: [Action] Wait → 3 days
   |
STEP 3: [Condition] If/Else — Contact has replied?
          (Use: "Contact Replied" condition OR check "Last Message Type" = "Inbound")
          |
          ├── YES → [Action] Update Opportunity
          |          → Pipeline: "New Patient Pipeline"
          |          → Stage: Move to "Interested"
          |          → Add Tag: "interested"
          |          → Internal Notification: "{{contact.first_name}} {{contact.last_name}} replied and is interested! Book them in."
          |          → Stop workflow
          |
          └── NO ↓
   |
STEP 4: [Action] Send SMS
          → Message: "Hi {{contact.first_name}}, we reached out a few days ago from Sunrise Family Clinic. Still interested in booking an appointment? Reply YES or call (555) 123-4567."
   |
STEP 5: [Action] Wait → 4 days (total 7 days now)
   |
STEP 6: [Condition] If/Else — Contact has replied?
          |
          ├── YES → [Action] Update Opportunity
          |          → Pipeline: "New Patient Pipeline"
          |          → Stage: Move to "Interested"
          |          → Add Tag: "interested"
          |          → Stop workflow
          |
          └── NO ↓
   |
STEP 7: [Action] Add Tag → "no-response"
   |
STEP 8: [Action] Update Opportunity
          → Pipeline: "New Patient Pipeline"
          → Stage: Move to "No Response"
```

**What happens:** After a lead is contacted, waits 3 days. If they replied → moves to "Interested". If not → sends a follow-up SMS. Waits 4 more days. If still no reply → marks as "No Response". This single workflow handles both the reply detection and the no-response follow-up.

---

#### WF-3: Appointment Booked — Update Patient Pipeline
**Workflow Name:** `WF-3 Appointment Booked`
**Pipeline:** New Patient Pipeline + Appointment Tracker
**Purpose:** When someone books via calendar, move them forward in New Patient Pipeline and create an entry in Appointment Tracker.

**Trigger:** `Appointment Status` > Status = `new`

```
STEP 1: [Trigger] Appointment Status → new
   |
STEP 2: [Action] Add Tag → "appointment-booked"
   |
STEP 3: [Action] Remove Tag → "new-patient"
   |
STEP 4: [Action] Remove Tag → "interested"
   |
STEP 5: [Action] Remove Tag → "no-response"
   |
STEP 6: [Action] Remove Tag → "no-show" (in case they rebook after a no-show)
   |
STEP 7: [Action] Send Email
          → Template: "Email - Appointment Confirmed"
   |
STEP 8: [Action] Send SMS
          → Template: "SMS - Appointment Confirmed"
   |
STEP 9: [Action] If/Else — Contact has tag "active-patient"?
          |
          ├── YES → Skip (already won, don't move backward)
          |
          └── NO → [Action] Update Opportunity
                    → Pipeline: "New Patient Pipeline"
                    → Stage: Move to "Appointment Booked"
   |
STEP 10: [Action] Create Opportunity
          → Pipeline: "Appointment Tracker"
          → Stage: "Upcoming"
          → Opportunity Name: Appt - {{contact.first_name}} {{contact.last_name}}
```

---

#### WF-4: Patient Visited — Mark Won
**Workflow Name:** `WF-4 Patient Visited`
**Pipeline:** New Patient Pipeline
**Purpose:** After visit is completed, move the patient to Won (active patient).

**Trigger:** `Appointment Status` > Status = `Showed`

```
STEP 1: [Trigger] Appointment Status → Showed
   |
STEP 2: [Action] Add Tag → "visited"
   |
STEP 3: [Action] Remove Tag → "appointment-booked"
   |
STEP 4: [Action] Update Opportunity
          → Pipeline: "New Patient Pipeline"
          → Stage: Move to "Visited"
   |
STEP 5: [Action] Wait → 24 hours
   |
STEP 6: [Action] Add Tag → "active-patient"
   |
STEP 7: [Action] Update Opportunity
          → Pipeline: "New Patient Pipeline"
          → Stage: Move to "Won — Active Patient"
```

**What happens:** After a visit, patient moves to "Visited" immediately. After 24 hours (giving time for any follow-up issues), auto-moves to "Won — Active Patient" and gets tagged for future re-engagement tracking.

---

### PIPELINE 2 WORKFLOWS: Appointment Tracker

These workflows track what happens to each booked appointment.

---

#### WF-5: 24hr Appointment Reminder
**Workflow Name:** `WF-5 24hr Reminder`
**Pipeline:** Appointment Tracker
**Purpose:** Remind the patient 24 hours before their appointment.

**Trigger:** `Appointment Status` > Status = `new`

```
STEP 1: [Trigger] Appointment Status → new
   |
STEP 2: [Action] Wait → Until event start time MINUS 24 hours
          (Wait action > "Wait until event start time" > Before > 24 hours)
   |
STEP 3: [Action] Send Email
          → Template: "Email - Appointment Reminder"
   |
STEP 4: [Action] Send SMS
          → Template: "SMS - 24hr Reminder"
   |
STEP 5: [Action] Wait → Until event start time MINUS 1 hour
          (Wait action > "Wait until event start time" > Before > 1 hour)
   |
STEP 6: [Action] Send SMS
          → Template: "SMS - 1hr Reminder"
```

**NOTE for setting the waits in GHL:**
- Add a "Wait" action
- Select **"Wait until event start time"**
- For 24hr: Set to **"Before"** > **"24 hours"**
- For 1hr: Set to **"Before"** > **"1 hour"**

---

#### WF-6: Patient Confirmed Appointment
**Workflow Name:** `WF-6 Appointment Confirmed`
**Pipeline:** Appointment Tracker
**Purpose:** When patient replies CONFIRM, update the tracker.

**Trigger:** `Customer Replied`

**Trigger Filters (inside the trigger setup screen):**
- **Reply channel** → select **`SMS`**
- Click **"+ Add filters"** and add:
  - **Contact Tag** → **contains** → `appointment-booked`
- Click **Save Trigger**

```
STEP 1: [Trigger] Customer Replied (Reply channel: SMS, Tag: appointment-booked)
   |
STEP 2: [Condition] If/Else — Reply contains "CONFIRM" or "YES" or "confirm"
          |
          ├── YES ↓
          |
          └── NO → Stop workflow
   |
STEP 3: [Action] Update Opportunity
          → Pipeline: "Appointment Tracker"
          → Stage: Move to "Confirmed"
   |
STEP 4: [Action] Add Tag → "appointment-confirmed"
   |
STEP 5: [Action] Send SMS
          → Message: "Thanks {{contact.first_name}}! Your appointment is confirmed. See you soon! - Sunrise Family Clinic"
```

---

#### WF-7: Appointment Completed
**Workflow Name:** `WF-7 Appointment Completed`
**Pipeline:** Appointment Tracker
**Purpose:** When appointment status changes to Showed, mark it as Completed.

**Trigger:** `Appointment Status` > Status = `Showed`

```
STEP 1: [Trigger] Appointment Status → Showed
   |
STEP 2: [Action] Remove Tag → "appointment-booked"
   |
STEP 3: [Action] Remove Tag → "appointment-confirmed"
   |
STEP 4: [Action] Update Opportunity
          → Pipeline: "Appointment Tracker"
          → Stage: Move to "Completed"
```

---

#### WF-8: No Show Follow Up
**Workflow Name:** `WF-8 No Show Follow Up`
**Pipeline:** Appointment Tracker
**Purpose:** When patient doesn't show up, update tracker and send follow-up.

**Trigger:** `Appointment Status` > Status = `No-show`

```
STEP 1: [Trigger] Appointment Status → No-show
   |
STEP 2: [Action] Remove Tag → "appointment-booked"
   |
STEP 3: [Action] Remove Tag → "appointment-confirmed"
   |
STEP 4: [Action] Add Tag → "no-show"
   |
STEP 5: [Action] Update Opportunity
          → Pipeline: "Appointment Tracker"
          → Stage: Move to "No Show"
   |
STEP 6: [Action] Wait → 1 hour
   |
STEP 7: [Action] Send SMS
          → Template: "SMS - Missed Appointment"
   |
STEP 8: [Action] Wait → 4 hours
   |
STEP 9: [Action] Send Email
          → Template: "Email - Missed Appointment"
```

---

#### WF-9: Appointment Cancelled
**Workflow Name:** `WF-9 Appointment Cancelled`
**Pipeline:** Appointment Tracker
**Purpose:** When a patient cancels, update tracker and offer rebooking.

**Trigger:** `Appointment Status` > Status = `cancelled`

```
STEP 1: [Trigger] Appointment Status → cancelled
   |
STEP 2: [Action] Remove Tag → "appointment-booked"
   |
STEP 3: [Action] Remove Tag → "appointment-confirmed"
   |
STEP 4: [Action] Update Opportunity
          → Pipeline: "Appointment Tracker"
          → Stage: Move to "Cancelled"
   |
STEP 5: [Action] Send SMS
          → Message: "Hi {{contact.first_name}}, we see you cancelled your appointment. No worries! When you're ready to reschedule, reply BOOK or call (555) 123-4567. - Sunrise Family Clinic"
```

---

### PIPELINE 3 WORKFLOWS: Review & Referral

These workflows run after a patient has visited and handle reputation building.

---

#### WF-10: Post Visit — Request Review
**Workflow Name:** `WF-10 Request Review`
**Pipeline:** Review & Referral
**Purpose:** After a completed visit, ask for a review via SMS and email.

**Trigger:** `Appointment Status` > Status = `Showed`

```
STEP 1: [Trigger] Appointment Status → Showed
   |
STEP 2: [Action] Wait → 2 hours
   |
STEP 3: [Action] Send SMS
          → Template: "SMS - Follow Up"
   |
STEP 4: [Action] Create Opportunity
          → Pipeline: "Review & Referral"
          → Stage: "Review Requested"
          → Opportunity Name: Review - {{contact.first_name}} {{contact.last_name}}
   |
STEP 5: [Action] Wait → 24 hours
   |
STEP 6: [Action] Send Email
          → Template: "Email - Review Request"
   |
STEP 7: [Action] Wait → 2 hours
   |
STEP 8: [Action] Send SMS
          → Template: "SMS - Review Request"
   |
STEP 9: [Action] Add Tag → "review-requested"
```

---

#### WF-11: Review Submitted
**Workflow Name:** `WF-11 Review Submitted`
**Pipeline:** Review & Referral
**Purpose:** When a patient submits the review form, move them to Review Received.

**Trigger:** `Form Submitted` > select form `Patient Review`

```
STEP 1: [Trigger] Form Submitted — "Patient Review"
   |
STEP 2: [Action] Add Tag → "review-received"
   |
STEP 3: [Action] Remove Tag → "review-requested"
   |
STEP 4: [Action] Update Opportunity
          → Pipeline: "Review & Referral"
          → Stage: Move to "Review Received"
   |
STEP 5: [Action] Send SMS
          → Message: "Thank you so much for your feedback, {{contact.first_name}}! We truly appreciate you taking the time. - Sunrise Family Clinic"
```

---

#### WF-12: Re-Engagement (Inactive Patient)
**Workflow Name:** `WF-12 Re-Engagement`
**Pipeline:** New Patient Pipeline (brings them back)
**Purpose:** If a patient hasn't visited in 90 days, send a re-engagement message.

**Trigger:** `Contact Tag` > Tag Added = `active-patient`

```
STEP 1: [Trigger] Tag Added — "active-patient"
   |
STEP 2: [Action] Wait → 90 days
   |
STEP 3: [Condition] If/Else — Last appointment date is more than 80 days ago?
          (Use built-in field: "Last Appointment Date" > "is before" > "80 days ago")
          |
          ├── YES (inactive) ↓
          |
          └── NO (recently visited) → Stop workflow
   |
STEP 4: [Action] Send SMS
          → Template: "SMS - Re-Engagement"
   |
STEP 5: [Action] Wait → 3 days
   |
STEP 6: [Action] Send Email
          → Subject: "We Miss You at Sunrise Family Clinic!"
          → Body: "Hi {{contact.first_name}}, it's been a while since your last visit. Regular check-ups help catch issues early. Book your next appointment or call us at (555) 123-4567."
   |
STEP 7: [Action] Add Tag → "re-engagement-sent"
```

**NOTE:** The 90-day condition check in GHL:
- Use an If/Else action
- Set condition to: **"Last Appointment Date"** > **"is before"** > **"80 days ago"**
- This is a built-in GHL field, no custom field needed

---

## 10. TAGS
> **You do this in GHL**

Tags are auto-created when used in workflows, but here's the full list:

| Tag Name | Created By | Purpose |
|---------|-----------|---------|
| `new-patient` | WF-1 | New lead from intake form |
| `interested` | WF-2 | Lead replied, showing interest |
| `no-response` | WF-2 | Lead never replied after 7 days |
| `appointment-booked` | WF-3 | Has an upcoming appointment |
| `appointment-confirmed` | WF-6 | Confirmed attendance via SMS |
| `visited` | WF-4 | Completed at least one visit |
| `active-patient` | WF-4 | Ongoing/regular patient |
| `no-show` | WF-8 | Missed an appointment |
| `review-requested` | WF-10 | Review request sent |
| `review-received` | WF-11 | Patient submitted the review form |
| `re-engagement-sent` | WF-12 | 90-day re-engagement sent |

**You don't need to create these manually** — they auto-create when the workflow runs.

---

## WORKFLOW-TO-PIPELINE MAP (Quick Reference)

| # | Workflow Name | Pipeline It Serves | Trigger |
|---|-------------|-------------------|---------|
| WF-1 | New Lead Intake | New Patient Pipeline | Form Submitted |
| WF-2 | No Response Follow Up | New Patient Pipeline | Opportunity Created / Stage Changed |
| WF-3 | Appointment Booked | New Patient + Appt Tracker | Appointment Status = new |
| WF-4 | Patient Visited | New Patient Pipeline | Appointment Status = Showed |
| WF-5 | 24hr Reminder | Appointment Tracker | Appointment Status = new (delayed) |
| WF-6 | Appointment Confirmed | Appointment Tracker | Customer Replied SMS |
| WF-7 | Appointment Completed | Appointment Tracker | Appointment Status = Showed |
| WF-8 | No Show Follow Up | Appointment Tracker | Appointment Status = No-show |
| WF-9 | Appointment Cancelled | Appointment Tracker | Appointment Status = cancelled |
| WF-10 | Request Review | Review & Referral | Appointment Status = Showed |
| WF-11 | Review Submitted | Review & Referral | Form Submitted |
| WF-12 | Re-Engagement | New Patient Pipeline | Tag Added |

---

## QUICK REFERENCE: What Was Done For You vs What You Do

### DONE BY CLAUDE (files ready to copy-paste):
| Item | Location |
|------|----------|
| 5 Email Templates (HTML) | `templates/emails/` folder |
| 8 SMS Snippets | `templates/sms/all-sms-snippets.md` |

### YOU DO IN GHL (follow the steps above):
| Item | Count |
|------|-------|
| Sub-Account | 1 |
| Custom Fields | 8 fields in 1 group (Contact) |
| Custom Values | 8 values |
| Calendar | 1 calendar |
| Pipelines | 3 pipelines (19 stages total) |
| Forms | 4 forms |
| Workflows/Automations | 12 workflows |
| Tags | 10 tags (auto-created) |

---

## SETUP ORDER (recommended)

Follow this order to avoid issues:

1. Create the Sub-Account and switch into it
2. Create Custom Fields (Settings > Custom Fields)
3. Create Custom Values (Settings > Custom Values)
4. Create the Calendar (Calendars)
5. Create all 3 Pipelines with their stages (Opportunities > Pipelines)
6. Paste all 5 Email Templates (Marketing > Emails)
7. Paste all 8 SMS Snippets (Marketing > Templates > SMS)
8. Create all 3 Forms (Sites > Forms)
9. Build workflows in this order (dependencies matter):
   - **First:** WF-1, WF-2 (New Patient Pipeline workflows)
   - **Then:** WF-3, WF-4 (Bridge workflows — connect pipelines)
   - **Then:** WF-5, WF-6, WF-7, WF-8, WF-9 (Appointment Tracker workflows)
   - **Finally:** WF-10, WF-11, WF-12 (Review & Re-engagement workflows)
10. Test by submitting the New Patient Intake form yourself

---

**Done! You now have a fully working Sunrise Family Clinic sub-account in GHL.**

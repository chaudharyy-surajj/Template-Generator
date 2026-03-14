"use client";

import { ReactNode, useMemo, useState } from "react";
import { Check, Copy, Layers, Sparkles, LayoutTemplate, MousePointer2, PlayCircle } from "lucide-react";

interface TemplateExample {
  id: string;
  name: string;
  summary: string;
  language: string;
  tags: string[];
  code: string;
  preview: ReactNode;
}

interface TemplateSection {
  id: string;
  title: string;
  accent: string;
  description: string;
  templates: TemplateExample[];
}

const createPreview = (title: string, subtitle: string, badge: string, gradient: string) => (
  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-lg shadow-black/30 transition-all duration-300 ease-out">
    <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${gradient} blur-3xl opacity-70`} />
    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white">
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      {badge}
    </div>
    <div className="mt-3 space-y-2">
      <p className="text-lg font-semibold text-white">{title}</p>
      <p className="text-sm text-slate-200">{subtitle}</p>
      <div className="flex flex-wrap gap-2 text-[11px] text-slate-100">
        <span className="rounded-full bg-white/10 px-2 py-1">Live preview</span>
        <span className="rounded-full bg-white/10 px-2 py-1">Tailwind</span>
      </div>
    </div>
  </div>
);

const templateSections: TemplateSection[] = [
  {
    id: "authentication",
    title: "Authentication Templates",
    accent: "from-purple-500 to-indigo-500",
    description: "User authentication and access control systems",
    templates: [
      {
        id: "email-password-login",
        name: "Email & Password Login System",
        summary: "Secure sign-in with email and password.",
        language: "tsx",
        tags: ["Auth", "Login"],
        code: `export function EmailPasswordLoginSystem() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Email & Password Login</h3>
      <p className="text-sm text-slate-300">Secure sign-in with validation and remember-me.</p>
    </div>
  );
}`,
        preview: createPreview("Email & Password Login", "Secure sign-in with form validation.", "Auth", "from-purple-500/30 via-indigo-500/20 to-slate-500/10")
      },
      {
        id: "jwt-auth",
        name: "JWT Authentication Boilerplate",
        summary: "Token-based auth with refresh support.",
        language: "tsx",
        tags: ["Auth", "JWT"],
        code: `export function JWTAuthBoilerplate() {
  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">JWT Authentication</h3>
      <p className="text-sm text-slate-300">Access tokens, refresh flow, and guards.</p>
    </div>
  );
}`,
        preview: createPreview("JWT Authentication", "Token-based auth with refresh flow.", "Auth", "from-indigo-500/30 via-purple-500/20 to-slate-500/10")
      },
      {
        id: "oauth-login",
        name: "OAuth Login (Google & GitHub)",
        summary: "OAuth sign-in with provider buttons.",
        language: "tsx",
        tags: ["Auth", "OAuth"],
        code: `export function OAuthLogin() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">OAuth Login</h3>
      <p className="text-sm text-slate-300">Google and GitHub provider buttons.</p>
    </div>
  );
}`,
        preview: createPreview("OAuth Login", "Google and GitHub login buttons.", "Auth", "from-sky-500/25 via-indigo-500/20 to-slate-500/10")
      },
      {
        id: "password-reset",
        name: "Password Reset Flow",
        summary: "Password reset with success state.",
        language: "tsx",
        tags: ["Auth", "Reset"],
        code: `export function PasswordResetFlow() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Reset Password</h3>
      <p className="text-sm text-slate-300">Email capture and success confirmation.</p>
    </div>
  );
}`,
        preview: createPreview("Password Reset", "Reset flow with success state.", "Auth", "from-emerald-500/25 via-cyan-500/20 to-slate-500/10")
      },
      {
        id: "email-verification",
        name: "Email Verification System",
        summary: "Verify user email with secure links.",
        language: "tsx",
        tags: ["Auth", "Verify"],
        code: `export function EmailVerificationSystem() {
  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Email Verification</h3>
      <p className="text-sm text-slate-300">Confirm email ownership with secure links.</p>
    </div>
  );
}`,
        preview: createPreview("Email Verification", "Verify user email with secure links.", "Auth", "from-indigo-500/25 via-purple-500/20 to-slate-500/10")
      },
      {
        id: "mfa-otp",
        name: "Multi-Factor Authentication (OTP)",
        summary: "OTP entry and verification screen.",
        language: "tsx",
        tags: ["Auth", "MFA"],
        code: `export function MultiFactorAuthenticationOTP() {
  return (
    <div className="rounded-2xl border border-purple-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Multi-Factor Authentication</h3>
      <p className="text-sm text-slate-300">Enter the 6-digit OTP to verify.</p>
    </div>
  );
}`,
        preview: createPreview("Multi-Factor Authentication", "OTP verification entry.", "Auth", "from-purple-500/30 via-indigo-500/20 to-slate-500/10")
      }
    ]
  },
  {
    id: "billing-payments",
    title: "Billing & Payment Templates",
    accent: "from-amber-500 to-orange-500",
    description: "Payment and monetization systems",
    templates: [
      {
        id: "stripe-subscription",
        name: "Stripe Subscription Integration",
        summary: "Stripe subscriptions with plan selection.",
        language: "tsx",
        tags: ["Billing", "Stripe"],
        code: `export function StripeSubscriptionIntegration() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Stripe Subscription</h3>
      <p className="text-sm text-slate-300">Plan selection and recurring billing.</p>
    </div>
  );
}`,
        preview: createPreview("Stripe Subscription", "Recurring billing with Stripe.", "Billing", "from-amber-500/30 via-orange-500/20 to-slate-500/10")
      },
      {
        id: "one-time-checkout",
        name: "One-Time Payment Checkout",
        summary: "Single purchase checkout flow.",
        language: "tsx",
        tags: ["Billing", "Checkout"],
        code: `export function OneTimePaymentCheckout() {
  return (
    <div className="rounded-2xl border border-orange-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">One-Time Checkout</h3>
      <p className="text-sm text-slate-300">Simple payment form and confirmation.</p>
    </div>
  );
}`,
        preview: createPreview("One-Time Checkout", "Single purchase checkout flow.", "Billing", "from-orange-500/30 via-amber-500/20 to-slate-500/10")
      },
      {
        id: "pricing-ui",
        name: "Pricing Page UI",
        summary: "Pricing tiers and plan highlights.",
        language: "tsx",
        tags: ["Billing", "Pricing"],
        code: `export function PricingPageUI() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Pricing Page UI</h3>
      <p className="text-sm text-slate-300">Plan cards with feature highlights.</p>
    </div>
  );
}`,
        preview: createPreview("Pricing Page UI", "Tiered pricing with highlights.", "Pricing", "from-amber-500/30 via-orange-500/20 to-slate-500/10")
      },
      {
        id: "invoice-generator",
        name: "Invoice Generator System",
        summary: "Generate downloadable invoices.",
        language: "tsx",
        tags: ["Billing", "Invoices"],
        code: `export function InvoiceGeneratorSystem() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Invoice Generator</h3>
      <p className="text-sm text-slate-300">Create and download invoices on demand.</p>
    </div>
  );
}`,
        preview: createPreview("Invoice Generator", "Generate invoices for customers.", "Billing", "from-amber-500/30 via-orange-500/20 to-slate-500/10")
      },
      {
        id: "billing-history",
        name: "Billing History Dashboard",
        summary: "Transaction history and receipts.",
        language: "tsx",
        tags: ["Billing", "History"],
        code: `export function BillingHistoryDashboard() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Billing History</h3>
      <p className="text-sm text-slate-300">Invoices, receipts, and payment status.</p>
    </div>
  );
}`,
        preview: createPreview("Billing History", "Transaction history dashboard.", "Billing", "from-amber-500/30 via-orange-500/20 to-slate-500/10")
      },
      {
        id: "coupon-discount",
        name: "Coupon & Discount System",
        summary: "Coupon codes and promo discounts.",
        language: "tsx",
        tags: ["Billing", "Discounts"],
        code: `export function CouponDiscountSystem() {
  return (
    <div className="rounded-2xl border border-orange-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Coupon & Discount</h3>
      <p className="text-sm text-slate-300">Apply coupons and promos at checkout.</p>
    </div>
  );
}`,
        preview: createPreview("Coupon & Discount", "Promo codes and discounts.", "Billing", "from-orange-500/30 via-amber-500/20 to-slate-500/10")
      }
    ]
  },
  {
    id: "subscription-management",
    title: "Subscription Management Templates",
    accent: "from-emerald-500 to-cyan-500",
    description: "Manage user plans and subscriptions",
    templates: [
      {
        id: "plan-upgrade-downgrade",
        name: "Plan Upgrade & Downgrade Logic",
        summary: "Switch plans with prorations.",
        language: "tsx",
        tags: ["Subscription", "Plans"],
        code: `export function PlanUpgradeDowngradeLogic() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Plan Changes</h3>
      <p className="text-sm text-slate-300">Upgrade, downgrade, and proration logic.</p>
    </div>
  );
}`,
        preview: createPreview("Plan Upgrade & Downgrade", "Switch plans with prorations.", "Plans", "from-emerald-500/30 via-cyan-500/20 to-slate-500/10")
      },
      {
        id: "feature-gating",
        name: "Free vs Paid Feature Gating",
        summary: "Gate features by plan tier.",
        language: "tsx",
        tags: ["Subscription", "Gating"],
        code: `export function FreeVsPaidFeatureGating() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Feature Gating</h3>
      <p className="text-sm text-slate-300">Lock premium features behind paid tiers.</p>
    </div>
  );
}`,
        preview: createPreview("Feature Gating", "Lock premium features by plan.", "Gating", "from-emerald-500/30 via-cyan-500/20 to-slate-500/10")
      },
      {
        id: "subscription-status",
        name: "Subscription Status Tracker",
        summary: "Active, trialing, past due states.",
        language: "tsx",
        tags: ["Subscription", "Status"],
        code: `export function SubscriptionStatusTracker() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Subscription Status</h3>
      <p className="text-sm text-slate-300">Track active, trialing, or past due.</p>
    </div>
  );
}`,
        preview: createPreview("Subscription Status", "Track subscription states.", "Status", "from-emerald-500/30 via-cyan-500/20 to-slate-500/10")
      },
      {
        id: "trial-period",
        name: "Trial Period System",
        summary: "Trial onboarding and expiry.",
        language: "tsx",
        tags: ["Subscription", "Trial"],
        code: `export function TrialPeriodSystem() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Trial Period</h3>
      <p className="text-sm text-slate-300">Trial countdown and conversion prompts.</p>
    </div>
  );
}`,
        preview: createPreview("Trial Period", "Trial onboarding and expiry.", "Trial", "from-emerald-500/30 via-cyan-500/20 to-slate-500/10")
      },
      {
        id: "usage-based-billing",
        name: "Usage-Based Billing System",
        summary: "Metered usage with limits.",
        language: "tsx",
        tags: ["Subscription", "Usage"],
        code: `export function UsageBasedBillingSystem() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Usage-Based Billing</h3>
      <p className="text-sm text-slate-300">Meter usage and bill by consumption.</p>
    </div>
  );
}`,
        preview: createPreview("Usage-Based Billing", "Meter usage by consumption.", "Usage", "from-emerald-500/30 via-cyan-500/20 to-slate-500/10")
      }
    ]
  },
  {
    id: "dashboard-ui",
    title: "Dashboard UI Templates",
    accent: "from-blue-500 to-cyan-500",
    description: "Core UI layouts for SaaS dashboards",
    templates: [
      {
        id: "admin-dashboard-ui",
        name: "Admin Dashboard UI",
        summary: "Overview dashboard for admins.",
        language: "tsx",
        tags: ["Dashboard", "Admin"],
        code: `export function AdminDashboardUI() {
  return (
    <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Admin Dashboard</h3>
      <p className="text-sm text-slate-300">Top-level metrics and controls.</p>
    </div>
  );
}`,
        preview: createPreview("Admin Dashboard", "Overview metrics for admins.", "Dashboard", "from-blue-500/30 via-cyan-500/20 to-slate-500/10")
      },
      {
        id: "user-dashboard-layout",
        name: "User Dashboard Layout",
        summary: "Personalized user dashboard layout.",
        language: "tsx",
        tags: ["Dashboard", "User"],
        code: `export function UserDashboardLayout() {
  return (
    <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">User Dashboard</h3>
      <p className="text-sm text-slate-300">Personalized widgets and summaries.</p>
    </div>
  );
}`,
        preview: createPreview("User Dashboard", "Personalized user layout.", "Dashboard", "from-blue-500/30 via-cyan-500/20 to-slate-500/10")
      },
      {
        id: "analytics-dashboard",
        name: "Analytics Dashboard (Charts)",
        summary: "Charts and KPI overview.",
        language: "tsx",
        tags: ["Dashboard", "Analytics"],
        code: `export function AnalyticsDashboardCharts() {
  return (
    <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Analytics Dashboard</h3>
      <p className="text-sm text-slate-300">Charts and KPI summaries.</p>
    </div>
  );
}`,
        preview: createPreview("Analytics Dashboard", "Charts and KPI overview.", "Analytics", "from-blue-500/30 via-cyan-500/20 to-slate-500/10")
      },
      {
        id: "saas-metrics-ui",
        name: "SaaS Metrics UI (MRR, Users)",
        summary: "MRR, churn, and growth panels.",
        language: "tsx",
        tags: ["Dashboard", "Metrics"],
        code: `export function SaaSMetricsUI() {
  return (
    <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">SaaS Metrics</h3>
      <p className="text-sm text-slate-300">MRR, users, churn, and growth.</p>
    </div>
  );
}`,
        preview: createPreview("SaaS Metrics", "MRR, users, and growth panels.", "Metrics", "from-blue-500/30 via-cyan-500/20 to-slate-500/10")
      },
      {
        id: "sidebar-navbar",
        name: "Sidebar + Navbar Layout",
        summary: "Standard SaaS navigation layout.",
        language: "tsx",
        tags: ["Dashboard", "Layout"],
        code: `export function SidebarNavbarLayout() {
  return (
    <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Sidebar + Navbar</h3>
      <p className="text-sm text-slate-300">Navigation layout for SaaS apps.</p>
    </div>
  );
}`,
        preview: createPreview("Sidebar + Navbar", "Navigation layout for dashboards.", "Layout", "from-blue-500/30 via-cyan-500/20 to-slate-500/10")
      }
    ]
  },
  {
    id: "user-management",
    title: "User Management Templates",
    accent: "from-rose-500 to-pink-500",
    description: "Manage users and permissions",
    templates: [
      {
        id: "user-profile",
        name: "User Profile System",
        summary: "Profile details and preferences.",
        language: "tsx",
        tags: ["Users", "Profile"],
        code: `export function UserProfileSystem() {
  return (
    <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">User Profile</h3>
      <p className="text-sm text-slate-300">Personal info and preferences.</p>
    </div>
  );
}`,
        preview: createPreview("User Profile", "Profile details and preferences.", "Users", "from-rose-500/30 via-pink-500/20 to-slate-500/10")
      },
      {
        id: "rbac",
        name: "Role-Based Access Control (RBAC)",
        summary: "Roles with permissions mapping.",
        language: "tsx",
        tags: ["Users", "RBAC"],
        code: `export function RoleBasedAccessControl() {
  return (
    <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Role-Based Access Control</h3>
      <p className="text-sm text-slate-300">Define roles and permission scopes.</p>
    </div>
  );
}`,
        preview: createPreview("RBAC", "Roles and permissions mapping.", "Users", "from-rose-500/30 via-pink-500/20 to-slate-500/10")
      },
      {
        id: "user-permissions",
        name: "User Permissions System",
        summary: "Fine-grained permission toggles.",
        language: "tsx",
        tags: ["Users", "Permissions"],
        code: `export function UserPermissionsSystem() {
  return (
    <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">User Permissions</h3>
      <p className="text-sm text-slate-300">Toggle granular access by feature.</p>
    </div>
  );
}`,
        preview: createPreview("User Permissions", "Granular access controls.", "Users", "from-rose-500/30 via-pink-500/20 to-slate-500/10")
      },
      {
        id: "account-settings",
        name: "Account Settings Page",
        summary: "Settings, preferences, and security.",
        language: "tsx",
        tags: ["Users", "Settings"],
        code: `export function AccountSettingsPage() {
  return (
    <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Account Settings</h3>
      <p className="text-sm text-slate-300">Update profile, password, and preferences.</p>
    </div>
  );
}`,
        preview: createPreview("Account Settings", "Settings and security controls.", "Users", "from-rose-500/30 via-pink-500/20 to-slate-500/10")
      },
      {
        id: "delete-account",
        name: "Delete Account Flow",
        summary: "Account deletion confirmation.",
        language: "tsx",
        tags: ["Users", "Security"],
        code: `export function DeleteAccountFlow() {
  return (
    <div className="rounded-2xl border border-rose-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Delete Account</h3>
      <p className="text-sm text-slate-300">Confirm deletion with safety checks.</p>
    </div>
  );
}`,
        preview: createPreview("Delete Account", "Deletion flow with confirmations.", "Users", "from-rose-500/30 via-pink-500/20 to-slate-500/10")
      }
    ]
  },
  {
    id: "email-notifications",
    title: "Email & Notification Templates",
    accent: "from-amber-500 to-lime-400",
    description: "Communication systems",
    templates: [
      {
        id: "welcome-email",
        name: "Welcome Email System",
        summary: "Welcome email with quick start links.",
        language: "tsx",
        tags: ["Email", "Welcome"],
        code: `export function WelcomeEmailSystem() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Welcome Email</h3>
      <p className="text-sm text-slate-300">Intro copy with onboarding links.</p>
    </div>
  );
}`,
        preview: createPreview("Welcome Email", "Welcome email with quick start links.", "Email", "from-amber-500/30 via-orange-500/20 to-slate-500/10")
      },
      {
        id: "password-reset-email",
        name: "Password Reset Email Template",
        summary: "Reset email with CTA button.",
        language: "tsx",
        tags: ["Email", "Reset"],
        code: `export function PasswordResetEmailTemplate() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Password Reset Email</h3>
      <p className="text-sm text-slate-300">CTA to reset the account password.</p>
    </div>
  );
}`,
        preview: createPreview("Password Reset Email", "Reset email with CTA.", "Email", "from-amber-500/30 via-orange-500/20 to-slate-500/10")
      },
      {
        id: "in-app-notifications",
        name: "In-App Notification System",
        summary: "Notification center and badges.",
        language: "tsx",
        tags: ["Notifications", "In-app"],
        code: `export function InAppNotificationSystem() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">In-App Notifications</h3>
      <p className="text-sm text-slate-300">Notification list with read states.</p>
    </div>
  );
}`,
        preview: createPreview("In-App Notifications", "Notification center with badges.", "Notify", "from-amber-500/30 via-orange-500/20 to-slate-500/10")
      },
      {
        id: "html-email-templates",
        name: "HTML Email Templates",
        summary: "Branded HTML email layouts.",
        language: "tsx",
        tags: ["Email", "HTML"],
        code: `export function HTMLEmailTemplates() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">HTML Email Templates</h3>
      <p className="text-sm text-slate-300">Branded HTML layouts and sections.</p>
    </div>
  );
}`,
        preview: createPreview("HTML Email Templates", "Branded HTML email layouts.", "Email", "from-amber-500/30 via-orange-500/20 to-slate-500/10")
      },
      {
        id: "smtp-integration",
        name: "SMTP Email Integration",
        summary: "SMTP setup and sending pipeline.",
        language: "tsx",
        tags: ["Email", "SMTP"],
        code: `export function SMTPEmailIntegration() {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">SMTP Integration</h3>
      <p className="text-sm text-slate-300">Connect SMTP and send transactional mail.</p>
    </div>
  );
}`,
        preview: createPreview("SMTP Integration", "SMTP setup and sending pipeline.", "Email", "from-amber-500/30 via-orange-500/20 to-slate-500/10")
      }
    ]
  },
  {
    id: "file-upload-storage",
    title: "File Upload & Storage Templates",
    accent: "from-teal-500 to-emerald-500",
    description: "File handling systems",
    templates: [
      {
        id: "file-upload",
        name: "File Upload System",
        summary: "Upload files with progress.",
        language: "tsx",
        tags: ["Files", "Upload"],
        code: `export function FileUploadSystem() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">File Upload</h3>
      <p className="text-sm text-slate-300">Drag-and-drop uploads with progress.</p>
    </div>
  );
}`,
        preview: createPreview("File Upload", "Drag-and-drop uploads with progress.", "Files", "from-emerald-500/30 via-teal-500/20 to-slate-500/10")
      },
      {
        id: "image-upload-preview",
        name: "Image Upload with Preview",
        summary: "Image preview and crop.",
        language: "tsx",
        tags: ["Files", "Images"],
        code: `export function ImageUploadWithPreview() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Image Upload Preview</h3>
      <p className="text-sm text-slate-300">Preview and crop before upload.</p>
    </div>
  );
}`,
        preview: createPreview("Image Upload Preview", "Preview and crop images.", "Images", "from-emerald-500/30 via-teal-500/20 to-slate-500/10")
      },
      {
        id: "cloud-storage",
        name: "Cloud Storage Integration (AWS S3)",
        summary: "S3 uploads and presigned URLs.",
        language: "tsx",
        tags: ["Files", "S3"],
        code: `export function CloudStorageIntegration() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Cloud Storage (S3)</h3>
      <p className="text-sm text-slate-300">Presigned uploads and CDN delivery.</p>
    </div>
  );
}`,
        preview: createPreview("Cloud Storage (AWS S3)", "S3 uploads with presigned URLs.", "Storage", "from-emerald-500/30 via-teal-500/20 to-slate-500/10")
      },
      {
        id: "profile-picture",
        name: "Profile Picture Upload",
        summary: "Avatar upload and resize.",
        language: "tsx",
        tags: ["Files", "Avatar"],
        code: `export function ProfilePictureUpload() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Profile Picture Upload</h3>
      <p className="text-sm text-slate-300">Upload, crop, and save avatars.</p>
    </div>
  );
}`,
        preview: createPreview("Profile Picture Upload", "Avatar upload and crop flow.", "Profile", "from-emerald-500/30 via-teal-500/20 to-slate-500/10")
      },
      {
        id: "document-management",
        name: "Document Management System",
        summary: "Organize, tag, and search files.",
        language: "tsx",
        tags: ["Files", "Docs"],
        code: `export function DocumentManagementSystem() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Document Management</h3>
      <p className="text-sm text-slate-300">Tag and search stored documents.</p>
    </div>
  );
}`,
        preview: createPreview("Document Management", "Organize and search documents.", "Docs", "from-emerald-500/30 via-teal-500/20 to-slate-500/10")
      }
    ]
  },
  {
    id: "analytics-tracking",
    title: "Analytics & Tracking Templates",
    accent: "from-sky-500 to-blue-500",
    description: "User and system tracking tools",
    templates: [
      {
        id: "user-activity-tracking",
        name: "User Activity Tracking",
        summary: "Track sessions and events.",
        language: "tsx",
        tags: ["Analytics", "Users"],
        code: `export function UserActivityTracking() {
  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">User Activity</h3>
      <p className="text-sm text-slate-300">Session and event tracking panels.</p>
    </div>
  );
}`,
        preview: createPreview("User Activity Tracking", "Session and event tracking.", "Analytics", "from-sky-500/30 via-blue-500/20 to-slate-500/10")
      },
      {
        id: "page-view-analytics",
        name: "Page View Analytics",
        summary: "Page views and funnels.",
        language: "tsx",
        tags: ["Analytics", "Pages"],
        code: `export function PageViewAnalytics() {
  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Page Views</h3>
      <p className="text-sm text-slate-300">Track page visits and trends.</p>
    </div>
  );
}`,
        preview: createPreview("Page View Analytics", "Track page views and trends.", "Analytics", "from-sky-500/30 via-blue-500/20 to-slate-500/10")
      },
      {
        id: "admin-analytics",
        name: "Admin Analytics Dashboard",
        summary: "Admin-level analytics overview.",
        language: "tsx",
        tags: ["Analytics", "Admin"],
        code: `export function AdminAnalyticsDashboard() {
  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Admin Analytics</h3>
      <p className="text-sm text-slate-300">Global metrics and system health.</p>
    </div>
  );
}`,
        preview: createPreview("Admin Analytics", "Admin metrics overview.", "Analytics", "from-sky-500/30 via-blue-500/20 to-slate-500/10")
      },
      {
        id: "event-tracking",
        name: "Event Tracking System",
        summary: "Event stream and filters.",
        language: "tsx",
        tags: ["Analytics", "Events"],
        code: `export function EventTrackingSystem() {
  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Event Tracking</h3>
      <p className="text-sm text-slate-300">Capture events and filter by source.</p>
    </div>
  );
}`,
        preview: createPreview("Event Tracking", "Capture events and filter sources.", "Analytics", "from-sky-500/30 via-blue-500/20 to-slate-500/10")
      },
      {
        id: "custom-charts",
        name: "Custom Chart Integration",
        summary: "Custom charts and embeds.",
        language: "tsx",
        tags: ["Analytics", "Charts"],
        code: `export function CustomChartIntegration() {
  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Custom Charts</h3>
      <p className="text-sm text-slate-300">Embed charts and analytics widgets.</p>
    </div>
  );
}`,
        preview: createPreview("Custom Charts", "Embed charts and analytics widgets.", "Charts", "from-sky-500/30 via-blue-500/20 to-slate-500/10")
      }
    ]
  },
  {
    id: "admin-panel",
    title: "Admin Panel Templates",
    accent: "from-fuchsia-500 to-rose-500",
    description: "Backend control panels",
    templates: [
      {
        id: "admin-dashboard-panel",
        name: "Admin Dashboard Panel",
        summary: "Admin overview and controls.",
        language: "tsx",
        tags: ["Admin", "Dashboard"],
        code: `export function AdminDashboardPanel() {
  return (
    <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Admin Panel</h3>
      <p className="text-sm text-slate-300">Overview controls and insights.</p>
    </div>
  );
}`,
        preview: createPreview("Admin Panel", "Overview controls and insights.", "Admin", "from-fuchsia-500/30 via-rose-500/20 to-slate-500/10")
      },
      {
        id: "user-management-admin",
        name: "User Management Admin View",
        summary: "Manage users and roles.",
        language: "tsx",
        tags: ["Admin", "Users"],
        code: `export function UserManagementAdminView() {
  return (
    <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">User Management</h3>
      <p className="text-sm text-slate-300">Search users and manage roles.</p>
    </div>
  );
}`,
        preview: createPreview("User Management Admin", "Manage users and roles.", "Admin", "from-fuchsia-500/30 via-rose-500/20 to-slate-500/10")
      },
      {
        id: "content-moderation",
        name: "Content Moderation System",
        summary: "Review and moderate content.",
        language: "tsx",
        tags: ["Admin", "Moderation"],
        code: `export function ContentModerationSystem() {
  return (
    <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Content Moderation</h3>
      <p className="text-sm text-slate-300">Queue and review flagged content.</p>
    </div>
  );
}`,
        preview: createPreview("Content Moderation", "Review and moderate content.", "Admin", "from-fuchsia-500/30 via-rose-500/20 to-slate-500/10")
      },
      {
        id: "analytics-overview-panel",
        name: "Analytics Overview Panel",
        summary: "High-level analytics summary.",
        language: "tsx",
        tags: ["Admin", "Analytics"],
        code: `export function AnalyticsOverviewPanel() {
  return (
    <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Analytics Overview</h3>
      <p className="text-sm text-slate-300">Summary of KPIs and growth.</p>
    </div>
  );
}`,
        preview: createPreview("Analytics Overview", "Summary of KPIs and growth.", "Admin", "from-fuchsia-500/30 via-rose-500/20 to-slate-500/10")
      },
      {
        id: "system-settings",
        name: "System Settings Panel",
        summary: "Global settings and toggles.",
        language: "tsx",
        tags: ["Admin", "Settings"],
        code: `export function SystemSettingsPanel() {
  return (
    <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">System Settings</h3>
      <p className="text-sm text-slate-300">Global settings and feature toggles.</p>
    </div>
  );
}`,
        preview: createPreview("System Settings", "Global settings and toggles.", "Admin", "from-fuchsia-500/30 via-rose-500/20 to-slate-500/10")
      }
    ]
  },
  {
    id: "ai-integration",
    title: "AI Integration Templates",
    accent: "from-indigo-500 to-violet-500",
    description: "AI-powered SaaS features",
    templates: [
      {
        id: "ai-chat",
        name: "AI Chat Interface",
        summary: "Chat UI for AI assistants.",
        language: "tsx",
        tags: ["AI", "Chat"],
        code: `export function AIChatInterface() {
  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">AI Chat Interface</h3>
      <p className="text-sm text-slate-300">Conversation layout and message stream.</p>
    </div>
  );
}`,
        preview: createPreview("AI Chat Interface", "Chat UI for AI assistants.", "AI", "from-indigo-500/30 via-violet-500/20 to-slate-500/10")
      },
      {
        id: "openai-integration",
        name: "OpenAI API Integration Module",
        summary: "OpenAI requests and responses.",
        language: "tsx",
        tags: ["AI", "API"],
        code: `export function OpenAIAPIIntegrationModule() {
  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">OpenAI Integration</h3>
      <p className="text-sm text-slate-300">Prompt requests and response handling.</p>
    </div>
  );
}`,
        preview: createPreview("OpenAI Integration", "API integration module.", "AI", "from-indigo-500/30 via-violet-500/20 to-slate-500/10")
      },
      {
        id: "ai-content-generator",
        name: "AI Content Generator UI",
        summary: "Generate content with AI.",
        language: "tsx",
        tags: ["AI", "Content"],
        code: `export function AIContentGeneratorUI() {
  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">AI Content Generator</h3>
      <p className="text-sm text-slate-300">Prompt input and generated output.</p>
    </div>
  );
}`,
        preview: createPreview("AI Content Generator", "Prompt to content UI.", "AI", "from-indigo-500/30 via-violet-500/20 to-slate-500/10")
      },
      {
        id: "prompt-management",
        name: "Prompt Management System",
        summary: "Store and organize prompts.",
        language: "tsx",
        tags: ["AI", "Prompts"],
        code: `export function PromptManagementSystem() {
  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">Prompt Management</h3>
      <p className="text-sm text-slate-300">Save, tag, and reuse prompts.</p>
    </div>
  );
}`,
        preview: createPreview("Prompt Management", "Store and organize prompts.", "AI", "from-indigo-500/30 via-violet-500/20 to-slate-500/10")
      },
      {
        id: "ai-dashboard",
        name: "AI Dashboard Interface",
        summary: "Monitor AI usage and costs.",
        language: "tsx",
        tags: ["AI", "Dashboard"],
        code: `export function AIDashboardInterface() {
  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-5 text-white">
      <h3 className="text-lg font-semibold">AI Dashboard</h3>
      <p className="text-sm text-slate-300">Usage, costs, and performance.</p>
    </div>
  );
}`,
        preview: createPreview("AI Dashboard", "Monitor AI usage and costs.", "AI", "from-indigo-500/30 via-violet-500/20 to-slate-500/10")
      }
    ]
  }
];

export default function TemplatesPage() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [hoveredTemplateId, setHoveredTemplateId] = useState<string | null>(null);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeSection = useMemo(() => templateSections.find(section => section.id === activeSectionId) ?? null, [activeSectionId]);

  const hoveredTemplate = useMemo(
    () => activeSection?.templates.find(t => t.id === hoveredTemplateId) ?? null,
    [activeSection, hoveredTemplateId]
  );
  const selectedTemplate = useMemo(
    () => (activeSection ? activeSection.templates.find(t => t.id === selectedTemplateId) ?? null : null),
    [activeSection, selectedTemplateId]
  );
  const previewTemplate = hoveredTemplate ?? selectedTemplate ?? null;

  const renderPreview = (template?: TemplateExample | null) => {
    if (!template) return null;
    switch (template.id) {
      case "aurora-hero":
        return (
          <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-10 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Launch ready</p>
            <h1 className="mt-3 text-4xl font-semibold">Ship pages that feel premium.</h1>
            <p className="mt-2 max-w-2xl text-slate-200">Use this hero for marketing landers. Includes badge, headline, subcopy, and two CTAs.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="btn-primary">Start free</button>
              <button className="btn-secondary">Book demo</button>
            </div>
          </section>
        );
      case "split-cta":
        return (
          <section className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-white">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-orange-200">New</p>
                <h2 className="text-3xl font-semibold text-white">Ship your next launch in hours.</h2>
                <p className="text-slate-300">Flexible layout with logo strip and secondary CTA.</p>
                <div className="flex flex-wrap gap-3">
                  <button className="btn-primary">Book demo</button>
                  <button className="btn-secondary">See components</button>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <p className="text-xs text-slate-400">Trusted by</p>
                <div className="mt-3 grid grid-cols-3 gap-3 text-sm font-medium text-white">
                  {"Zephyr,Northwind,Arc".split(",").map(logo => (
                    <div key={logo} className="rounded-lg border border-slate-800 bg-slate-900 p-3 text-center">
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case "pricing-tiles": {
        const tiers = [
          { name: "Starter", price: "$19", features: ["1k users", "Email support"], highlight: false },
          { name: "Growth", price: "$49", features: ["Priority SLAs", "A/B blocks"], highlight: true },
          { name: "Scale", price: "$129", features: ["SSO", "Custom themes"], highlight: false }
        ];
        return (
          <div className="grid gap-4 md:grid-cols-3">
            {tiers.map(tier => (
              <div
                key={tier.name}
                className={tier.highlight ? "rounded-2xl border border-orange-400/60 bg-orange-500/5 p-6" : "rounded-2xl border border-slate-800 bg-slate-950 p-6"}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                  {tier.highlight ? <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs text-orange-100">Popular</span> : null}
                </div>
                <p className="mt-3 text-3xl font-bold text-white">{tier.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {tier.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn-primary mt-6 w-full">Choose plan</button>
              </div>
            ))}
          </div>
        );
      }
      case "logo-strip": {
        const logos = ["Framer", "Linear", "Raycast", "Vercel", "Supabase", "Clerk"];
        return (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Trusted by teams</p>
            <div className="mt-3 grid grid-cols-3 gap-3 text-sm text-slate-100 sm:grid-cols-6">
              {logos.map(logo => (
                <div key={logo} className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-center">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        );
      }
      case "feature-row": {
        const items = [
          { title: "Blazing fast", copy: "98th percentile performance" },
          { title: "Secure", copy: "SOC2-ready defaults" },
          { title: "Composable", copy: "Drop-in sections" }
        ];
        return (
          <div className="grid gap-4 md:grid-cols-3 text-white">
            {items.map(item => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-300">{item.copy}</p>
              </div>
            ))}
          </div>
        );
      }
      case "metrics-ribbon": {
        const stats = [
          { label: "MRR", value: "$18.4k", delta: "+6.2%" },
          { label: "Active users", value: "12,104", delta: "+3.1%" },
          { label: "Error rate", value: "0.08%", delta: "-0.4%" }
        ];
        return (
          <div className="grid gap-3 rounded-2xl border border-emerald-500/30 bg-slate-950/80 p-4 md:grid-cols-3 text-white">
            {stats.map(stat => (
              <div key={stat.label} className="flex items-center justify-between rounded-xl bg-emerald-500/5 px-4 py-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-emerald-200">{stat.label}</p>
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-100">{stat.delta}</span>
              </div>
            ))}
          </div>
        );
      }
      case "billing-summary": {
        const invoices = [
          { id: "INV-2043", total: "$129", status: "Paid", date: "Mar 01" },
          { id: "INV-2042", total: "$129", status: "Paid", date: "Feb 01" },
          { id: "INV-2041", total: "$89", status: "Paid", date: "Jan 01" }
        ];
        return (
          <div className="rounded-2xl border border-cyan-500/30 bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-cyan-200">Current plan</p>
                <h3 className="text-xl font-semibold text-white">Growth</h3>
              </div>
              <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-100">Renews in 12d</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-slate-800">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-200">
              {invoices.map(invoice => (
                <div key={invoice.id} className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
                  <div>
                    <p className="font-medium">{invoice.id}</p>
                    <p className="text-xs text-slate-400">{invoice.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{invoice.total}</p>
                    <p className="text-xs text-emerald-200">{invoice.status}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-primary mt-4 w-full">Manage billing</button>
          </div>
        );
      }
      case "settings-panel":
        return (
          <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white">
            <div>
              <h3 className="text-lg font-semibold text-white">Workspace</h3>
              <p className="text-sm text-slate-400">Name, domain, and notifications.</p>
            </div>
            <div className="space-y-4">
              <label className="block text-sm text-slate-200">
                Workspace name
                <input className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm" placeholder="Arc Studio" />
              </label>
              <label className="block text-sm text-slate-200">
                Domain
                <div className="mt-2 flex rounded-lg border border-slate-800 bg-slate-900">
                  <span className="px-3 py-2 text-slate-400">https://</span>
                  <input className="flex-1 bg-transparent px-2 py-2 text-sm" placeholder="workspace.arc.app" />
                </div>
              </label>
              <label className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-3 py-3 text-sm text-slate-200">
                Enable weekly summary
                <input type="checkbox" className="h-4 w-4 accent-emerald-400" />
              </label>
            </div>
            <div className="flex gap-3">
              <button className="btn-secondary">Cancel</button>
              <button className="btn-primary">Save changes</button>
            </div>
          </div>
        );
      case "usage-cards": {
        const items = [
          { label: "API calls", value: "1.2M", fill: "70%" },
          { label: "Seats", value: "18 / 24", fill: "75%" }
        ];
        return (
          <div className="grid gap-4 md:grid-cols-2 text-white">
            {items.map(item => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-300">{item.label}</p>
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: item.fill }} />
                </div>
              </div>
            ))}
          </div>
        );
      }
      case "activity-list": {
        const events = [
          { title: "New deploy", meta: "Today • v1.3.4" },
          { title: "Plan upgraded", meta: "Yesterday • Growth" },
          { title: "User invited", meta: "Tue • @jamie" }
        ];
        return (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-white">
            <p className="text-sm font-semibold text-white">Recent activity</p>
            <div className="mt-3 divide-y divide-slate-800 text-sm text-slate-200">
              {events.map(event => (
                <div key={event.title} className="py-3">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-xs text-slate-400">{event.meta}</p>
                </div>
              ))}
            </div>
          </div>
        );
      }
      case "glow-login":
        return (
          <div className="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-slate-950 p-8 text-white">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-purple-500/25 via-indigo-500/15 to-cyan-500/10 blur-3xl" />
            <h2 className="text-2xl font-semibold">Welcome back</h2>
            <p className="text-sm text-slate-300">Access your workspace.</p>
            <form className="mt-6 space-y-4">
              <label className="block text-sm">
                Email
                <input type="email" className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" placeholder="you@studio.co" />
              </label>
              <label className="block text-sm">
                Password
                <input type="password" className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2" />
              </label>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 accent-purple-400" />
                  Remember me
                </label>
                <button className="text-purple-200" type="button">Forgot?</button>
              </div>
              <button className="btn-primary w-full" type="button">Sign in</button>
            </form>
          </div>
        );
      case "reset-flow":
        return (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white">
            <h3 className="text-lg font-semibold">Reset password</h3>
            <p className="text-sm text-slate-300">We will send a magic link to your inbox.</p>
            <form className="mt-4 space-y-3">
              <input type="email" className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm" placeholder="you@domain.com" />
              <button className="btn-primary w-full" type="button">Send reset link</button>
            </form>
          </div>
        );
      case "onboarding-steps": {
        const steps = [
          { title: "Create project", done: true },
          { title: "Connect billing", done: false },
          { title: "Invite teammates", done: false }
        ];
        return (
          <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Get set up</h3>
              <span className="text-sm text-indigo-200">{steps.filter(s => s.done).length}/3 done</span>
            </div>
            <div className="mt-4 space-y-3">
              {steps.map(step => (
                <label key={step.title} className="flex items-center gap-3 rounded-xl bg-slate-900 px-3 py-2 text-sm text-slate-200">
                  <input type="checkbox" checked={step.done} readOnly className="h-4 w-4 accent-indigo-400" />
                  <span className={step.done ? "text-emerald-200" : ""}>{step.title}</span>
                </label>
              ))}
            </div>
          </div>
        );
      }
      case "two-factor":
        return (
          <div className="max-w-md rounded-2xl border border-purple-500/30 bg-slate-950 p-6 text-white">
            <p className="text-sm text-purple-100">Step 2 of 2</p>
            <h3 className="mt-1 text-xl font-semibold">Enter the 6-digit code</h3>
            <div className="mt-4 grid grid-cols-6 gap-2">
              {Array.from({ length: 6 }).map((_, idx) => (
                <input key={idx} maxLength={1} className="h-12 rounded-lg border border-slate-800 bg-slate-900 text-center text-lg" />
              ))}
            </div>
            <button className="btn-primary mt-4 w-full" type="button">Verify</button>
          </div>
        );
      case "access-roles": {
        const roles = [
          { name: "Admin", color: "bg-purple-500/20 text-purple-100" },
          { name: "Editor", color: "bg-blue-500/20 text-blue-100" },
          { name: "Viewer", color: "bg-slate-500/20 text-slate-100" }
        ];
        const permissions = ["Manage billing", "Invite users", "Publish content"];
        return (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white">
            <p className="text-sm font-semibold text-white">Access roles</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {roles.map(role => (
                <span key={role.name} className={"rounded-full px-3 py-1 text-xs " + role.color}>{role.name}</span>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {permissions.map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      }
      case "receipt-email":
        return (
          <table width="100%" cellPadding="0" cellSpacing="0" style={{ fontFamily: "Inter, system-ui", background: "#0f172a", color: "#e2e8f0", padding: "24px" }}>
            <tbody>
              <tr>
                <td style={{ maxWidth: 640, margin: "0 auto", background: "#0b1224", borderRadius: 16, padding: 24, border: "1px solid #1e293b" }}>
                  <h2 style={{ margin: 0, color: "#fff" }}>Payment receipt</h2>
                  <p style={{ margin: "8px 0 16px", color: "#cbd5e1" }}>Thanks for your purchase. Here are the details.</p>
                  <div style={{ padding: 12, background: "#111827", borderRadius: 12 }}>
                    <p style={{ margin: 0, color: "#a5f3fc" }}>Plan: Growth</p>
                    <p style={{ margin: "4px 0 0" }}>Amount: $129</p>
                    <p style={{ margin: "4px 0 0" }}>Date: Mar 14, 2026</p>
                  </div>
                  <a href="#" style={{ display: "inline-block", marginTop: 16, padding: "10px 16px", background: "#f59e0b", color: "#0b1224", borderRadius: 12, fontWeight: 600 }}>View invoice</a>
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "plain-text":
        {
          const plainText = `Subject: Action needed on your workspace

Hi {{name}},

We noticed a spike in errors in {{workspace}}. Your error budget is at 82%.

- Last 10 minutes: {{errorRate}}
- Impacted services: {{services}}

Visit the dashboard to mute alerts or roll back.
https://app.yourdomain.com/releases/{{releaseId}}

Thanks,
Your reliability team`;
          return (
            <pre className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-100 whitespace-pre-wrap">
              {plainText}
            </pre>
          );
        }
      case "changelog": {
        const updates = [
          { title: "Templates library", tag: "Feature", date: "Mar 14" },
          { title: "Faster login", tag: "Improvement", date: "Mar 12" },
          { title: "Bug fixes", tag: "Fix", date: "Mar 10" }
        ];
        return (
          <div className="rounded-2xl border border-amber-500/40 bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-amber-200">Changelog</p>
                <h3 className="text-lg font-semibold">What shipped this week</h3>
              </div>
              <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs text-amber-100">Weekly</span>
            </div>
            <div className="mt-4 space-y-3">
              {updates.map(update => (
                <div key={update.title} className="flex items-center justify-between rounded-xl bg-slate-900 px-3 py-2">
                  <div>
                    <p className="font-medium">{update.title}</p>
                    <p className="text-xs text-slate-400">{update.date}</p>
                  </div>
                  <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs text-amber-100">{update.tag}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary mt-4 w-full">Read full notes</button>
          </div>
        );
      }
      case "invite-email":
        return (
          <table width="100%" cellPadding="0" cellSpacing="0" style={{ fontFamily: "Inter, system-ui", background: "#0f172a", color: "#e2e8f0", padding: "24px" }}>
            <tbody>
              <tr>
                <td style={{ maxWidth: 640, margin: "0 auto", background: "#0b1224", borderRadius: 16, padding: 24, border: "1px solid #1e293b" }}>
                  <p style={{ margin: "0 0 8px", color: "#cbd5e1" }}>You have been invited to</p>
                  <h2 style={{ margin: 0, color: "#fff" }}>Studio Workspace</h2>
                  <p style={{ margin: "12px 0 16px", color: "#cbd5e1" }}>Accept the invite to join projects, view dashboards, and collaborate.</p>
                  <a href="#" style={{ display: "inline-block", padding: "10px 16px", background: "#22d3ee", color: "#0b1224", borderRadius: 12, fontWeight: 600 }}>Accept invite</a>
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "incident-note":
        {
          const incidentCopy = `Subject: Incident update

We are investigating elevated error rates impacting the EU region.

Current impact:
- API error rate: 7.2%
- Affected services: api, web

Next update in 20 minutes. Thank you for your patience.`;
          return (
            <pre className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-100 whitespace-pre-wrap">
              {incidentCopy}
            </pre>
          );
        }
      case "upsell-banner":
        return (
          <div className="rounded-2xl border border-fuchsia-500/40 bg-fuchsia-500/10 p-4 text-white">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-200">Limited</p>
                <p className="text-lg font-semibold">Upgrade now and save 20%</p>
                <p className="text-sm text-fuchsia-100">Unlock unlimited projects and priority support.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">Save 20%</span>
                <button className="btn-primary">Upgrade</button>
              </div>
            </div>
          </div>
        );
      case "cross-sell-grid": {
        const items = [
          { title: "Analytics", copy: "Insights pack", badge: "New" },
          { title: "Automation", copy: "Workflow builder", badge: "Popular" },
          { title: "Support", copy: "Priority SLAs", badge: "Pro" }
        ];
        return (
          <div className="grid gap-3 md:grid-cols-3">
            {items.map(item => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-white">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
                  <span>{item.badge}</span>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[11px]">Add-on</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.copy}</p>
                <button className="btn-secondary mt-3 w-full">Add for $19</button>
              </div>
            ))}
          </div>
        );
      }
      case "exit-intent-modal":
        return (
          <div className="max-w-lg rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Wait</p>
            <h3 className="mt-2 text-2xl font-semibold">Get 20% off your first month.</h3>
            <p className="mt-2 text-slate-300">Apply the discount and keep your progress—no credit card changes needed.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="btn-primary">Apply discount</button>
              <button className="btn-secondary">Keep browsing</button>
            </div>
          </div>
        );
      case "article-spotlight":
        return (
          <article className="rounded-2xl border border-blue-500/30 bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between text-xs uppercase tracking-wide text-blue-200">
              <span>Feature</span>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] text-white">5 min read</span>
            </div>
            <h3 className="mt-2 text-2xl font-semibold">How we ship SaaS in hours</h3>
            <p className="mt-2 text-slate-300">A practical playbook for founders shipping faster with a solid starter kit.</p>
            <div className="mt-3 flex items-center gap-3 text-sm text-slate-200">
              <span className="rounded-full bg-blue-500/15 px-3 py-1 text-blue-100">Product</span>
              <span className="text-slate-400">12k reads</span>
            </div>
          </article>
        );
      case "newsletter-cta":
        return (
          <div className="rounded-2xl border border-purple-500/30 bg-slate-950 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-200">Stay updated</p>
            <h3 className="mt-2 text-2xl font-semibold">Get launch patterns in your inbox</h3>
            <p className="mt-2 text-slate-300">Short, tactical notes on SaaS UX and billing.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm" placeholder="you@company.com" />
              <button className="btn-primary w-full sm:w-auto">Subscribe</button>
            </div>
            <p className="mt-2 text-xs text-slate-400">Join 4,200 founders • No spam</p>
          </div>
        );
      case "author-bio":
        return (
          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 text-white">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
            <div className="space-y-1">
              <p className="text-lg font-semibold">Jamie Patel</p>
              <p className="text-sm text-slate-300">Founder, shipping fast with SaaS kits.</p>
              <div className="flex gap-3 text-xs text-slate-400">
                <span>12k readers</span>
                <span>42 posts</span>
                <span>Based in SF</span>
              </div>
            </div>
            <button className="btn-secondary ml-auto">Follow</button>
          </div>
        );
      case "welcome-drip":
        return (
          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-rose-200">Day 0</p>
            <h3 className="text-2xl font-semibold">Welcome to Templates</h3>
            <p className="mt-2 text-slate-200">Kick off with quick links to activate new users.</p>
            <div className="mt-4 grid gap-2 text-sm">
              {["Pick a template", "Invite teammate", "Connect billing"].map(item => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2">
                  <span>{item}</span>
                  <span className="text-emerald-200">→</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "reactivation-email":
        return (
          <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Winback</p>
            <h3 className="text-xl font-semibold">We saved your seat — here’s 25% off</h3>
            <p className="mt-2 text-slate-200">Highlight the incentive and what’s new.</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-100">
              {"Projects saved|New funnels and billing|Custom code blocks".split("|").map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              <button className="btn-primary">Use code</button>
              <button className="btn-secondary">Maybe later</button>
            </div>
          </div>
        );
      case "nudge-card":
        return (
          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-5 text-white">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Finish setup</p>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs">2 steps left</span>
            </div>
            <div className="mt-3 space-y-2 text-sm">
              {[{ title: "Connect Stripe", done: false }, { title: "Add a hero block", done: true }, { title: "Invite a teammate", done: false }].map(task => (
                <label key={task.title} className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
                  <input type="checkbox" checked={task.done} readOnly className="h-4 w-4 accent-rose-400" />
                  <span className={task.done ? "text-emerald-100 line-through" : "text-white"}>{task.title}</span>
                </label>
              ))}
            </div>
            <button className="btn-primary mt-4 w-full">Complete setup</button>
          </div>
        );
      case "winback-modal":
        return (
          <div className="max-w-lg rounded-2xl border border-amber-500/40 bg-slate-950 p-6 text-white shadow-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Come back</p>
            <h3 className="mt-2 text-2xl font-semibold">We’d love to keep you.</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              {"Save 20% on your next month|Keep all projects and data|New engagement templates added".split("|").map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="btn-primary">Redeem 20% off</button>
              <button className="btn-secondary">Maybe later</button>
            </div>
          </div>
        );
      case "status-banner":
        return (
          <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-white">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                All systems operational
              </div>
              <a className="text-sm font-semibold text-cyan-100" href="#">
                View status →
              </a>
            </div>
          </div>
        );
      case "faq-accordion": {
        const items = [
          { q: "How do I invite teammates?", a: "Go to Settings → Team and send invites via email." },
          { q: "Do you support SSO?", a: "Yes, SAML SSO is available on the Scale plan." },
          { q: "Can I export data?", a: "Exports are available in Settings → Data." }
        ];
        return (
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950 p-5 text-white">
            {items.map(item => (
              <details key={item.q} className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                <summary className="cursor-pointer text-sm font-semibold">{item.q}</summary>
                <p className="mt-2 text-sm text-slate-300">{item.a}</p>
              </details>
            ))}
          </div>
        );
      }
      case "contact-support":
        return (
          <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-5 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Need help?</p>
            <h3 className="mt-2 text-xl font-semibold">Talk to support</h3>
            <p className="mt-2 text-sm text-slate-300">Live chat, email, and priority support on Scale.</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
                <span>Email</span>
                <span className="text-slate-300">support@templates.app</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
                <span>Live chat</span>
                <span className="text-slate-300">~2 min avg</span>
              </div>
            </div>
            <button className="btn-primary mt-4 w-full">Open ticket</button>
          </div>
        );
      case "ticket-list": {
        const tickets = [
          { id: "#4281", subject: "Billing update", status: "Open" },
          { id: "#4274", subject: "SSO setup", status: "Pending" },
          { id: "#4260", subject: "API rate limits", status: "Resolved" }
        ];
        return (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-white">
            <p className="text-sm font-semibold">Your tickets</p>
            <div className="mt-3 space-y-2 text-sm text-slate-200">
              {tickets.map(ticket => (
                <div key={ticket.id} className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
                  <div>
                    <p className="font-medium">{ticket.subject}</p>
                    <p className="text-xs text-slate-400">{ticket.id}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">{ticket.status}</span>
                </div>
              ))}
            </div>
          </div>
        );
      }
      case "api-keys": {
        const keys = [
          { name: "Server key", value: "sk-live-1234", scope: "write", created: "Mar 2026" },
          { name: "Public key", value: "pk-live-5678", scope: "read", created: "Feb 2026" }
        ];
        return (
          <div className="space-y-3 rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
            {keys.map(key => (
              <div key={key.name} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{key.name}</p>
                    <p className="text-xs text-slate-400">{key.created}</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-100">{key.scope}</span>
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-sm">
                  <span className="font-mono text-emerald-100">{key.value}</span>
                  <button className="text-xs text-emerald-200">Regenerate</button>
                </div>
              </div>
            ))}
          </div>
        );
      }
      case "webhook-logs": {
        const events = [
          { id: "evt_01", status: "Delivered", time: "2m ago" },
          { id: "evt_02", status: "Retrying", time: "5m ago" },
          { id: "evt_03", status: "Failed", time: "10m ago" }
        ];
        return (
          <div className="rounded-2xl border border-blue-500/30 bg-slate-950 p-5 text-white">
            <p className="text-sm font-semibold">Webhook deliveries</p>
            <div className="mt-3 space-y-2 text-sm">
              {events.map(evt => (
                <div key={evt.id} className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
                  <div>
                    <p className="font-mono text-emerald-100">{evt.id}</p>
                    <p className="text-xs text-slate-400">{evt.time}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">{evt.status}</span>
                </div>
              ))}
            </div>
            <button className="btn-secondary mt-4 w-full">View dashboard</button>
          </div>
        );
      }
      case "integration-gallery": {
        const items = [
          { name: "Slack", tag: "Collab" },
          { name: "Zapier", tag: "Automation" },
          { name: "Notion", tag: "Docs" },
          { name: "Stripe", tag: "Payments" }
        ];
        return (
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 text-white">
            {items.map(item => (
              <div key={item.name} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-lg font-semibold">{item.name}</p>
                <span className="mt-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-slate-100">{item.tag}</span>
                <p className="mt-2 text-sm text-slate-300">Connect in one click.</p>
              </div>
            ))}
          </div>
        );
      }
      case "api-cta":
        return (
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Developers</p>
            <h3 className="mt-2 text-2xl font-semibold">Build with the Templates API</h3>
            <p className="mt-2 text-sm text-slate-300">REST + webhooks with typed SDKs.</p>
            <pre className="mt-4 overflow-auto rounded-xl bg-slate-900 p-4 text-xs text-emerald-100">{`fetch('https://api.templates.app/v1/sites', {
  method: 'POST',
  headers: { Authorization: 'Bearer sk_live_123' },
  body: JSON.stringify({ name: 'New project' })
})`}</pre>
            <div className="mt-3 flex flex-wrap gap-3">
              <button className="btn-primary">View docs</button>
              <button className="btn-secondary">Generate key</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSectionSelect = (sectionId: string) => {
    setActiveSectionId(sectionId);
    setSelectedTemplateId(null);
    setHoveredTemplateId(null);
  };

  const handleBackToTopics = () => {
    setActiveSectionId(null);
    setSelectedTemplateId(null);
    setHoveredTemplateId(null);
    setCopiedId(null);
  };

  const copyCode = async () => {
    if (!selectedTemplate) return;
    await navigator.clipboard.writeText(selectedTemplate.code);
    setCopiedId(selectedTemplate.id);
    setTimeout(() => setCopiedId(null), 1200);
  };

  return (
    <div className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#f59e0b22,_transparent_45%),radial-gradient(circle_at_30%_20%,_#34d39922,_transparent_30%),radial-gradient(circle_at_80%_10%,_#6366f122,_transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-12 space-y-10">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-amber-200">
            <Sparkles className="h-3.5 w-3.5" /> Templates
          </div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold leading-tight">Browse by topic. Hover to see it. Click to copy the code.</h1>
              <p className="max-w-2xl text-base text-slate-300">Pick a topic to load its templates. Hover a name to view the live preview above. Click to lock it and reveal the code.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-200">
              <div className="flex items-center gap-2 font-semibold"><PlayCircle className="h-4 w-4 text-amber-300" /> How it works</div>
              <p className="mt-1 text-slate-300">1) Choose a topic. 2) Hover to preview. 3) Click to show code.</p>
            </div>
          </div>
        </header>

        {!activeSection ? (
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
              <Layers className="h-4 w-4" /> Topics
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {templateSections.map(section => (
                <button
                  key={section.id}
                  onClick={() => handleSectionSelect(section.id)}
                  className={`w-full rounded-xl border px-4 py-4 text-left transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-white/60 hover:bg-white/5 shadow-sm shadow-black/10`}
                >
                  <div className={`text-xs font-semibold uppercase tracking-[0.18em] bg-clip-text text-transparent bg-gradient-to-r ${section.accent}`}>
                    {section.title}
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{section.description}</p>
                  <p className="mt-2 text-xs text-slate-400">{section.templates.length} templates</p>
                </button>
              ))}
            </div>
          </section>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleBackToTopics}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-white/40 hover:bg-slate-900/80"
              >
                ← Back to topics
              </button>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="rounded-full bg-slate-800 px-2 py-1 text-xs uppercase tracking-wide text-slate-100">Selected</span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${activeSection.accent}`}>{activeSection.title}</span>
              </div>
            </div>

            <section className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <LayoutTemplate className="h-4 w-4" /> Template names
                  <span className="rounded-full border border-slate-800 px-2 py-0.5 text-[11px] text-slate-300">Hover to preview</span>
                </div>
                <div className="grid gap-3 lg:grid-cols-1">
                  {activeSection.templates.map(template => {
                    const active = template.id === selectedTemplate?.id;
                    return (
                      <button
                        key={template.id}
                        onMouseEnter={() => setHoveredTemplateId(template.id)}
                        onClick={() => setSelectedTemplateId(template.id)}
                        className={`group w-full rounded-xl border px-4 py-3 text-left transition-all duration-200 hover:border-white/50 hover:bg-white/5 ${
                          active ? "border-white/70 bg-white/5 shadow-lg shadow-black/20" : "border-slate-800 bg-slate-950"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="text-base font-semibold text-white">{template.name}</p>
                            <p className="text-sm text-slate-300">{template.summary}</p>
                          </div>
                          <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] uppercase tracking-wide text-slate-200">{template.language}</span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {template.tags.map(tag => (
                            <span key={tag} className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-200 transition group-hover:bg-white/10">{tag}</span>
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <MousePointer2 className="h-4 w-4" /> Preview {selectedTemplate ? "& code" : "on hover"}
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 shadow-inner shadow-black/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{activeSection.title}</p>
                      <h3 className="text-xl font-semibold text-white">{previewTemplate?.name ?? "Hover a template"}</h3>
                      <p className="text-sm text-slate-300">Hover to preview; click to lock and view code.</p>
                    </div>
                    <button
                      onClick={copyCode}
                      disabled={!selectedTemplate}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition hover:border-white/30 hover:shadow-lg hover:shadow-emerald-500/10 ${
                        selectedTemplate ? "border-slate-800 bg-slate-900 text-slate-100" : "border-slate-800 bg-slate-900/70 text-slate-500 cursor-not-allowed"
                      }`}
                    >
                      {copiedId === selectedTemplate?.id ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
                      {copiedId === selectedTemplate?.id ? "Copied" : "Copy code"}
                    </button>
                  </div>

                  <div className="mt-4">
                    {previewTemplate ? (
                      <div className="relative max-h-[460px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-lg shadow-black/40">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#22d3ee22,transparent_40%),radial-gradient(circle_at_80%_0%,#f472b622,transparent_35%),radial-gradient(circle_at_50%_100%,#8b5cf622,transparent_45%)]" />
                        <div className="relative max-h-[460px] overflow-auto p-3">
                          <div className="relative rounded-xl border border-slate-800/80 bg-slate-900/85 p-4 shadow-inner shadow-black/30">
                            <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-white/5" />
                            <div className="relative">{renderPreview(previewTemplate)}</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/60 px-4 py-8 text-sm text-slate-400">
                        Hover a template name to see its preview here.
                      </div>
                    )}
                  </div>

                  {previewTemplate?.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {previewTemplate.tags.map(tag => (
                        <span key={tag} className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-200">{tag}</span>
                      ))}
                    </div>
                  ) : null}

                  {selectedTemplate ? (
                    <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900">
                      <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2 text-xs text-slate-300">
                        <span>{selectedTemplate.name}.tsx</span>
                        <span>Tailwind + TSX</span>
                      </div>
                      <pre className="max-h-[320px] overflow-auto px-4 py-3 text-[13px] leading-relaxed text-slate-100 font-mono whitespace-pre">
                        <code>{selectedTemplate.code}</code>
                      </pre>
                    </div>
                  ) : (
                    <p className="mt-4 text-sm text-slate-400">Click a template name to lock it and view the code.</p>
                  )}
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

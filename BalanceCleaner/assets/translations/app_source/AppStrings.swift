//
//  File: AS.swift
//  Project: BalanceCleanerApp
//
//  Created by Hakob Ghlijyan on 8/25/26
//  Copyright © 2026. All rights reserved.
//

import Foundation

typealias AS = AppStrings

/// A single source of truth for all user-facing localized strings in the app.
/// Use `String(localized:)` with the raw value key from this enum in all views.
///
/// Usage:
///   `Text(AS.Dashboard.title)`
enum AppStrings {
    static let appName: String = "Balance Cleaner"
    static let localCurrencyCode: String = "USD"
    static let pro: String = "PRO"
    
    static let userDefaultsSuiteName: String = "group.com.hakobghlijyan.BalanceCleanerApp"
    static let premiumKey: String = "isPremium"
    
    static let developerSupport: String = "By Developer Hakob Ghlijyan"
    static let developerSupportMail: String = "hakobghlijyan@gmail.com"
    static let subjectMail: String = String(localized: "subject.mail", defaultValue: "Question or Feedback and Suggestions by Balance Cleaner")
    
    //OpenURL Constant
    static let urlScheme: String = "balancecleaner"
    static let urlHost: String = "smartcleaner"
    
    static let category: String = "Category: "
    
    //App Storage Key
    static let starfieldBackgroundPremium: String = "StarfieldBackgroundPremium"
    static let isRatingInteractionComplete: String = "isRatingInteractionComplete"
    static let isInitialPromptComplete: String = "isInitialPromptComplete"
    static let hasZeroBalance: String = "hasZeroBalance"
    static let hasCanceledSubscriptions: String = "hasCanceledSubscriptions"
    static let hasLeftFamilySharing: String = "hasLeftFamilySharing"
    static let intentViewPremium: String = "IntentViewPremium"
    static let userAppleIDBalance: String = "userAppleIDBalance"
    static let openSmartCleanerFromDeepLink: String = "openSmartCleanerFromDeepLink"
    static let screenCount: String = "ScreenCount"
    static let swipeOpenMode: String = "swipeOpenMode"

    //Alerts
    static let ratingAlert = String(localized: "alert.ratingAlert", defaultValue: "Would you like to rate the app?")
    static let yes = String(localized: "alert.yes", defaultValue: "yes")
    static let yesContinue = String(localized: "alert.yesContinue", defaultValue: "Yes, Continue!")
    static let nope = String(localized: "alert.nope", defaultValue: "Nope")
    static let askLater = String(localized: "alert.askLater", defaultValue: "Ask Later")
    static let askNever = String(localized: "alert.askNever", defaultValue: "Never Ask Me Again")
    
    //Swipe Action
    static let onetime = String(localized: "swipeAction.onetime", defaultValue: "One at a time")
    static let several = String(localized: "swipeAction.several", defaultValue: "Several at once")
    static let deleteLabel = String(localized: "delete.label", defaultValue: "Delete")
    static let swipeMode = String(localized: "swipe.mode", defaultValue: "Swipe mode")
    
    // MARK: - Dashboard
    enum Dashboard {
        /// "Find Balance in"
        static let titleLine1 = String(localized: "dashboard.title_line1", defaultValue: "Find Balance in")
        /// "your Apple ID."
        static let titleLine2 = String(localized: "dashboard.title_line2", defaultValue: "your Apple ID.")
        /// Subtitle description
        static let subtitle = String(localized: "dashboard.subtitle", defaultValue: "Take a moment to zero out your balance and prepare your account for a region change.")
        /// "Current Balance"
        static let balanceLabel = String(localized: "dashboard.balance.label", defaultValue: "Current Balance")
        /// "Today"
        static let today = String(localized: "dashboard.today", defaultValue: "Today")
        /// "Need Solutions?"
        static let needSolutions = String(localized: "dashboard.need_solutions", defaultValue: "Need Solutions?")
        /// "Smart Clean"
        static let smartClean = String(localized: "dashboard.smart_clean", defaultValue: "Smart Clean")
        /// "Auto-match purchases to reach 0.00"
        static let smartCleanSubtitle = String(localized: "dashboard.smart_clean_subtitle", defaultValue: "Auto-match purchases to reach 0.00")
        /// "Region Checklist"
        static let regionChecklist = String(localized: "dashboard.region_checklist", defaultValue: "Region Checklist")
        /// "Prepare account"
        static let regionChecklistSubtitle = String(localized: "dashboard.region_checklist_subtitle", defaultValue: "Prepare account")
        /// "Apple ID"
        static let appleIDLabel = String(localized: "dashboard.apple_id_label", defaultValue: "Apple ID")
        
        static let cleanBalance = String(localized: "dashboard.clean_balance", defaultValue: "Clean Balance")
        static let historySubtitle = String(localized: "dashboard.history_subtitle", defaultValue: "View your past balance clears")
    }
    
    // MARK: - Checkout / Smart Balance Matcher
    enum Checkout {
        /// "Smart Balance Matcher"
        static let title = String(localized: "checkout.title", defaultValue: "Smart Balance Matcher")
        /// "Target Amount"
        static let subtitle = String(localized: "checkout.subtitle", defaultValue: "You can enter your current amount, see all parts and start clean.")
        static let targetAmount = String(localized: "checkout.target_amount", defaultValue: "Target Amount")
        /// "0.00"
        static let placeholder = String(localized: "checkout.placeholder", defaultValue: "0.00")
        /// "Optimal Combination"
        static let optimalCombination = String(localized: "checkout.optimal_combination", defaultValue: "Optimal Combination")
        /// "Zero Out Balance"
        static let zeroButton = String(localized: "checkout.zero_button", defaultValue: "Zero Out Balance")
        /// "Processing..."
        static let processing = String(localized: "checkout.processing", defaultValue: "Processing...")
                static func cardChargeFootnote(balance: String, diff: String) -> String {
            String(localized: "checkout.card_charge_footnote \(balance) \(diff)")
        }
        static let contentUnavailableTitle = String(localized: "contentUnavailable.title", defaultValue: "Amount no available")
        static let contentUnavailableDescription = String(localized: "contentUnavailable.description", defaultValue: "Please enter amount and see part for clean")
    }
    
    // MARK: - History (WishGallery)
    enum History {
        /// "History"
        static let title = String(localized: "history.title", defaultValue: "History")
        /// Subtitle description
        static let subtitle = String(localized: "history.subtitle", defaultValue: "Review your past cleanup sessions, storage activity, and transaction history.")
        // Обзор истории: Просматривайте прошедшие сеансы очистки, историю операций с памятью и список транзакций.
        /// "No history yet."
        static let empty = String(localized: "history.empty", defaultValue: "No history yet.")
    }
    
    // MARK: - Region Checklist
    enum Region {
        /// "Region Switcher"
        static let title = String(localized: "region.title", defaultValue: "Region Switcher")
        /// "Pre-requisites"
        static let prerequisites = String(localized: "region.prerequisites", defaultValue: "Pre-requisites")
        
        // Section 1 — Balance
        static let balanceHeader = String(localized: "region.balance_header", defaultValue: "Apple ID balance")
        /// "Apple ID Balance is 0.00"
        static let zeroBalance = String(localized: "region.zero_balance", defaultValue: "Apple ID Balance is 0.00")
        static let zeroBalanceDesc = String(localized: "region.zero_balance_desc", defaultValue: "Your Apple ID balance must be exactly zero before Apple allows you to change regions. Use the Smart Clean feature on the main screen to drain it.")
        
        // Section 2 — Subscriptions
        static let subscriptionsHeader = String(localized: "region.subscriptions_header", defaultValue: "Subscriptions")
        /// "All Subscriptions Canceled"
        static let subscriptionsCanceled = String(localized: "region.subscriptions_canceled", defaultValue: "All Subscriptions Canceled")
        static let subscriptionsCanceledDesc = String(localized: "region.subscriptions_canceled_desc", defaultValue: "Cancel all active subscriptions (Apple Music, iCloud+, Netflix, etc.) in Settings → Apple ID → Subscriptions. They will remain active until the end of the paid period.")
        
        // Section 3 — Family
        static let familyHeader = String(localized: "region.family_header", defaultValue: "Family Sharing")
        /// "Left Family Sharing Group"
        static let familySharing = String(localized: "region.family_sharing", defaultValue: "Left Family Sharing Group")
        static let familySharingDesc = String(localized: "region.family_sharing_desc", defaultValue: "If you are part of a Family Sharing group, you must leave it before switching regions. Go to Settings → Apple ID → Family Sharing → Leave Family.")
        
        // Section 4 — Ready
        static let readyHeader = String(localized: "region.ready_header", defaultValue: "Ready to switch")
        static let readyDesc = String(localized: "region.ready_desc", defaultValue: "Once all checkmarks are green, tap the button below to open the App Store settings page where you can change your country or region.")
        
        /// "Proceed to App Store Settings"
        static let proceed = String(localized: "region.proceed", defaultValue: "Proceed to App Store Settings")
    }
    
    // MARK: - Tab Bar
    enum Tabs {
        /// "Clean"
        static let clean = String(localized: "tabs.clean", defaultValue: "Clean")
        /// "History"
        static let history = String(localized: "tabs.history", defaultValue: "History")
        /// "Info"
        static let info = String(localized: "tabs.info", defaultValue: "Info")
        ///Settings
        static let settings = String(localized: "tabs.settings", defaultValue: "Settings")
    }
    
    // MARK: - TipKit
    enum Tips {
        static let hasZeroBalanceEvent: String = "hasZeroBalanceEvent"
        /// "Ready to Switch?"
        static let regionTitle = String(localized: "tips.region.title", defaultValue: "Ready to Switch?")
        /// Body message for region tip
        static let regionBody = String(localized: "tips.region.body", defaultValue: "Your balance must be exactly zero before Apple allows changing regions.")
    }
    
    // MARK: - Settings
    enum Settings {
        static let title = String(localized: "settings.title", defaultValue: "Settings")
        /// Subtitle description
        static let subtitle = String(localized: "settings.subtitle", defaultValue: "Manage your app preferences, privacy controls, and storage cleanup rules.")
        static let version = String(localized: "settings.version", defaultValue: "Version 1.0.0")
        
        static let premiumSection = String(localized: "settings.premium_section", defaultValue: "PREMIUM")
        static let premiumUnlocked = String(localized: "settings.premium_unlocked", defaultValue: "Premium Unlocked")
        static let unlockPremium = String(localized: "settings.unlock_premium", defaultValue: "Unlock Premium")
        static func oneTimePurchase(price: String) -> String { String(localized: "settings.one_time_purchase \(price)") }
        
        static let restorePurchases = String(localized: "settings.restore_purchases", defaultValue: "Restore Purchases")
        static let recoverPurchases = String(localized: "settings.recover_purchases", defaultValue: "Recover previous purchases")
        
        static let backgroundPurchasesTitle = String(localized: "settings.backgroundPurchasesTitle", defaultValue: "Background")
        static let backgroundPurchasesSubtitle = String(localized: "settings.backgroundPurchasesSubtitle", defaultValue: "Pro User can change App background for Starfield")
        
        static let ringCirclePurchasesTitle = String(localized: "settings.ringCirclePurchasesTitle", defaultValue: "Amount Ring Design")
        static let ringCirclePurchasesSubtitle = String(localized: "settings.bringCirclePurchasesSubtitle", defaultValue: "Pro User can change Amount Ring Apple Glow Intent Design")
        
        static let dataSection = String(localized: "settings.data_section", defaultValue: "Data")
        static let exportHistory = String(localized: "settings.export_history", defaultValue: "Export History")
        static let exportHistoryDescCSV = String(localized: "settings.export_history_desccsv", defaultValue: "Export clear history to CSV")
        static let exportHistoryDescPDF = String(localized: "settings.export_history_descpdf", defaultValue: "Export clear history to PDF")
        
        static let premiumFeatureTitle = String(localized: "settings.premium_feature_title", defaultValue: "Premium Feature")
        static let premiumFeatureMessage = String(localized: "settings.premium_feature_message", defaultValue: "Exporting history is a premium feature. Unlock Premium to access this and future pro tools!")
        static func unlockFor(price: String) -> String { String(localized: "settings.unlock_for \(price)") }
        static let cancel = String(localized: "settings.cancel", defaultValue: "Cancel")
        
        static let aboutSection = String(localized: "settings.about_section", defaultValue: "About App")
        static let ratingSection = String(localized: "settings.rating_Section", defaultValue: "Rating")
        static let howItWorks = String(localized: "settings.how_it_works", defaultValue: "How it works")
        static let howItWorksDesc = String(localized: "settings.how_it_works_desc", defaultValue: "Zero out your Apple ID balance instantly to prepare for a region change.")
        
        static let privacyPolicy = String(localized: "settings.privacy_policy", defaultValue: "Privacy Policy")
        static let privacyPolicyDesc = String(localized: "settings.privacy_policy_desc", defaultValue: "We do not store or track your Apple ID data.")
        
        static let rateApp = String(localized: "settings.rate_app", defaultValue: "Rate App")
        static let rateAppDesc = String(localized: "settings.rate_app_desc", defaultValue: "Leave a review on the App Store.")
        
        static let supportSection = String(localized: "settings.support_section", defaultValue: "Support")
        static let contactUs = String(localized: "settings.contact_us", defaultValue: "Contact Us")
        static let supportEmail = String(localized: "settings.support_email", defaultValue: "hakobghlijyan@gmail.com")
        
        static let done = String(localized: "settings.done", defaultValue: "Done")
        static let appPro = String(localized: "settings.appPro", defaultValue: "All pro features are active")
        static let generatingCSV = String(localized: "settings.generatingCSV", defaultValue: "Generating CSV...")
        static let generatingPDF = String(localized: "settings.generatingPDF", defaultValue: "Generating PDF...")
        
        static let seeOnboarding = String(localized: "settings.seeOnboarding", defaultValue: "Onboarding")
        static let showOnboarding = String(localized: "settings.showOnboarding", defaultValue: "Show Onboarding Again")
        static let replayOnboarding = String(localized: "settings.replayOnboarding", defaultValue: "Replays the welcome screens. You can see again demo, how clean balance.")
    }
    
    // MARK: - Purchase Record
    enum Purchase {
        /// "Zeroed out {amount} to find equilibrium."
        static func successMessage(amount: String) -> String {
            String(localized: "purchase.success_message \(amount)")
        }
    }
    
    // MARK: - BalanceCleanerConstants OnBoarding
    enum BalanceCleanerConstants {
        static let welcomeTitle = String(localized: "welcomeTitle", defaultValue: "Welcome to")
        static let footnoteText = String(localized: "footnoteText", defaultValue: "Your data remains private. All scan and cleanup processing is done locally on your iPhone.")
        
        //Onboarding
        static let cardOneTitle = String(localized: "cardOneTitle", defaultValue: "Smart Cleanup")
        static let cardOneSubTitle = String(localized: "cardOneSubTitle", defaultValue: "Quickly scan and clean up unnecessary media files and cached data to free up your device storage.")
        
        static let cardTwoTitle = String(localized: "cardTwoTitle", defaultValue: "Transaction History")
        static let cardTwoSubTitle = String(localized: "cardTwoSubTitle", defaultValue: "Track all your past activity, balance changes, and completed operations in one organized log.")
        
        static let cardThreeTitle = String(localized: "cardThreeTitle", defaultValue: "Region Checklist")
        static let cardThreeSubTitle = String(localized: "cardThreeSubTitle", defaultValue: "Prepare your account for a region change step by step and ensure your balance is fully zeroed out.")
    }
        
    // MARK: - Navigation Titles
    enum Navigation {
        static let guideTitle = String(localized: "guide.navigation.title", defaultValue: "Guide & Support")
        static let guideSubtitle = String(localized: "guide.navigation.guideSubtitle", defaultValue: "Read the complete guide to learn how to clear your balance. Review all instructions to clear your balance correctly.")
        static let onboardingTitle = String(localized: "onboarding.navigation.title", defaultValue: "Onboarding")
        static let closeButton = String(localized: "guide.navigation.close", defaultValue: "Done")
        static let continueButton = String(localized: "onboarding.navigation.continue", defaultValue: "Continue")
        static let startButton = String(localized: "onboarding.navigation.start", defaultValue: "Get Started")
        static let nextButton = String(localized: "onboarding.navigation.Next", defaultValue: "Next")
    }
    
    enum SplitPayment {
        static let totalPurchases = String(localized: "splitPayment.Next", defaultValue: "Total purchases")
        static let appleid = String(localized: "splitPayment.appleid", defaultValue: "From Apple ID balance")
        static let creditCard = String(localized: "splitPayment.creditCard", defaultValue: "From credit card")
    }
    
    enum OnboardingContent {
        // MARK: - Page 1: Welcome & Smart Cleaner
        
        /// **EN:** Page 1 Title - Welcome and Smart Cleaner launch
        /// **RU:** Страница 1 Заголовок - Приветствие и смарт-клинер
        static let page1Title = String(
            localized: "onboarding.page1.title",
            defaultValue: "Smart Balance Cleaner"
        )
        
        /// **EN:** Page 1 Description - Choose custom amount to clear leftover App Store credit
        /// **RU:** Страница 1 Описание - Выбор точной суммы для списания остатка App Store
        static let page1Desc = String(
            localized: "onboarding.page1.desc",
            defaultValue: "Easily select or enter the exact custom amount you want to zero out in your Apple account balance."
        )
        
        // MARK: - Page 2: Smart Balance Calculation
        
        /// **EN:** Page 2 Title - Calculation and split breakdown
        /// **RU:** Страница 2 Заголовок - Расчет и разбивка списания
        static let page2Title = String(
            localized: "onboarding.page2.title",
            defaultValue: "Calculate & Split Pay"
        )
        
        /// **EN:** Page 2 Description - Detailed split preview between store credit and payment
        /// **RU:** Страница 2 Описание - Наглядное распределение списания на отдельные части
        static let page2Desc = String(
            localized: "onboarding.page2.desc",
            defaultValue: "See the precise breakdown of your remaining balance and calculated parts before confirming the operation."
        )
        
        // MARK: - Page 3: History & Overview
        
        /// **EN:** Page 3 Title - Transaction and activity history
        /// **RU:** Страница 3 Заголовок - История операций и транзакций
        static let page3Title = String(
            localized: "onboarding.page3.title",
            defaultValue: "Track Every Cleared Balance"
        )
        
        /// **EN:** Page 3 Description - Keep records of all previous balance clears
        /// **RU:** Страница 3 Описание - Хранение истории всех прошлых списаний в одном месте
        static let page3Desc = String(
            localized: "onboarding.page3.desc",
            defaultValue: "Access your complete history of cleared balances and keep full control over past transactions."
        )
        
        // MARK: - Page 4: Guidelines & Developer Support
        
        /// **EN:** Page 4 Title - Information, terms, and developer tips
        /// **RU:** Страница 4 Заголовок - Информация, условия и поддержка проекта
        static let page4Title = String(
            localized: "onboarding.page4.title",
            defaultValue: "How It Works & Support"
        )
        
        /// **EN:** Page 4 Description - Explain conditions and small donation support
        /// **RU:** Страница 4 Описание - Ознакомительная часть по условиям и поддержка разработки
        static let page4Desc = String(
            localized: "onboarding.page4.desc",
            defaultValue: "Review fulfilled conditions and how clears work, while supporting indie app development with small tips."
        )
        
        // MARK: - Page 5: Free Features & Settings
        
        /// **EN:** Page 5 Title - Standard features for free tier users
        /// **RU:** Страница 5 Заголовок - Базовые возможности бесплатной версии
        static let page5Title = String(
            localized: "onboarding.page5.title",
            defaultValue: "Free Tier Features"
        )
        
        /// **EN:** Page 5 Description - What free users get out of the box
        /// **RU:** Страница 5 Описание - Описание основных стандартных опций для обычных пользователей
        static let page5Desc = String(
            localized: "onboarding.page5.desc",
            defaultValue: "Standard calculations, basic history view, and essential balance management tools are free for everyone."
        )
        
        // MARK: - Page 6: Pro Upgrade & PDF Export
        
        /// **EN:** Page 6 Title - Pro features, PDF export, and supporting authors
        /// **RU:** Страница 6 Заголовок - Премиум-версия, экспорт в PDF и поддержка
        static let page6Title = String(
            localized: "onboarding.page6.title",
            defaultValue: "Unlock Pro & Export"
        )
        
        /// **EN:** Page 6 Description - Export transactions to PDF, unlock full history, and support creators
        /// **RU:** Страница 6 Описание - Экспорт истории в PDF, дополнительные настройки и поддержка авторов
        static let page6Desc = String(
            localized: "onboarding.page6.desc",
            defaultValue: "Export your transaction history to PDF, customize advanced settings, and support future updates with Pro."
        )
    }

    // MARK: - Main Guide Sections
    enum Guide {
        // Section: Overview
        static let overviewHeader = String(localized: "guide.overview.header", defaultValue: "Overview")
        static let overviewTitle = String(localized: "guide.overview.title", defaultValue: "Clear Apple ID Balance")
        static let overviewDescription = String(localized: "guide.overview.description", defaultValue: "To change your Apple ID region, your account balance must be exactly zero.")
        
        // Section: How to Clear
        static let clearHeader = String(localized: "guide.clear.header", defaultValue: "How to Zero Your Balance")
        static let step1Title = String(localized: "guide.clear.step1.title", defaultValue: "Check Your Remaining Balance")
        static let step1Desc = String(localized: "guide.clear.step1.desc", defaultValue: "Open App Store account settings and find your exact remaining store credit.")
        static let step2Title = String(localized: "guide.clear.step2.title", defaultValue: "Calculate and Purchase")
        static let step2Desc = String(localized: "guide.clear.step2.desc", defaultValue: "Buy an item or tip in the app. If price exceeds balance, Apple charges the rest from your credit card.")
        static let step3Title = String(localized: "guide.clear.step3.title", defaultValue: "Change Region Successfully")
        static let step3Desc = String(localized: "guide.clear.step3.desc", defaultValue: "Once zeroed, return to Apple ID settings and freely switch to your new region.")
        
        // Section: Donation Impact
        static let donationHeader = String(localized: "guide.donation.header", defaultValue: "Project Support")
        static let donationTitle = String(localized: "guide.donation.title", defaultValue: "Your Payment as a Donation")
        static let donationDesc = String(localized: "guide.donation.desc", defaultValue: "When you pay your remaining balance ($0.50, $1.00, etc.), you are donating directly to support independent iOS development.")
        static let donationFooter = String(localized: "guide.donation.footer", defaultValue: "Thank you for helping keep this tool alive and free of ads!")
        
        // Section: Apple Support
        static let supportHeader = String(localized: "guide.support.header", defaultValue: "Need Help?")
        static let supportTitle = String(localized: "guide.support.title", defaultValue: "Contact Apple Support")
        static let supportDesc = String(localized: "guide.support.desc", defaultValue: "If you have a balance lower than any purchase price, contact Apple Support directly to manually zero it out.")
        static let supportPhoneTitle = String(localized: "guide.support.phone.title", defaultValue: "Phone Support")
        static let supportPhoneValue = String(localized: "guide.support.phone.value", defaultValue: "Apple Support")
        static let supportWebTitle = String(localized: "guide.support.web.title", defaultValue: "Apple Billing & Subscriptions")
        static let supportWebUrl = "https://support.apple.com/billing"
    }

    enum StoreError {
        static let transactionStatus = String(localized: "storeError.transactionStatus", defaultValue: "Transaction finished")
        static let success = String(localized: "storeError.success", defaultValue: "Transaction finished")
        static let failedVerification = String(localized: "storeError.failedVerification", defaultValue: "Failed verification for transaction")
        static let failedFetchProducts = String(localized: "storeError.failedFetchProducts", defaultValue: "Failed to fetch products")
        static let successRestorePurchases = String(localized: "storeError.successRestorePurchases", defaultValue: "Purchases successfully restored")
        static let failureRestorePurchases = String(localized: "storeError.failureRestorePurchases", defaultValue: "Failed to restore purchases")
        static let cancel = String(localized: "storeError.cancel", defaultValue: "Purchase cancelled")
        static let pending = String(localized: "storeError.pending", defaultValue: "Purchase pending approval")
        static let unknown = String(localized: "storeError.unknown", defaultValue: "Unknown purchase status")
        static let error = String(localized: "storeError.error", defaultValue: "Payment error")
    }
    
    enum StackedGlassToasts {
        static let loading = String(localized: "toasts.loading", defaultValue: "Loading Transaction...")
    }
}

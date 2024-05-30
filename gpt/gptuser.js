var obj = JSON.parse($response.body);
obj ={
    "beta_settings": {
        "plugins": true,
        "code_interpreter": true
    },
    "announcements": {
        "oai/apps/hasSeenGizmoOnboarding": "2023-11-14T12:37:23.968925",
        "oai/apps/hasSeenGizmoGPTsOnboarding": "2023-11-14T12:38:13.847137",
        "oai/apps/hasSeenOnboarding": "2023-11-14T12:42:55.115657",
        "oai/apps/hasSeenPluginsDisclaimer": "2023-11-14T13:00:12.487013",
        "oai/apps/hasUserContextFirstTime/2023-06-29": "2024-01-08T16:22:07.606584",
        "oai/apps/hasSeenMemoryOnboarding": "2024-04-23T23:50:40.753407",
        "oai/apps/hasSeenExploreGPTs2": "2024-01-11T00:02:44.137604",
        "oai/apps/hasSeenMentionGPTs": "2024-05-11T06:28:51.597824",
        "oai/apps/hasSeenArchiveConversationOnboarding": "2024-02-10T09:38:47.079510",
        "oai/apps/hasSeenLocaleBanner": "2024-03-04T17:45:10.827791",
        "oai/apps/hasSeenDalleEditingOnboarding": "2024-04-06T09:21:56.626551",
        "oai/apps/hasSeenTemporaryChatOnboarding": "2024-04-25T01:55:42.027592",
        "oai/apps/hasSeenGptVisionAnnouncement/2023-09-18": "2024-05-13T04:12:24.894683",
        "oai/apps/hasDismissedAG8PqS2q": "2024-05-14T00:34:03.064793",
        "oai/apps/hasDismissedUseSidekick": "2024-05-16T03:50:23.589927",
        "oai/apps/newVoiceModeComingSoon/2024-05-14": "2024-05-17T23:58:17.755028",
        "oai/apps/hasSeenContextConnectorTooltip": "2024-05-21T19:27:34.951093"
    },
    "eligible_announcements": [
        "oai/apps/hasSeenGptVisionFreeAnnouncement/2024-03-26",
        "oai/apps/hasSeenSidekickLauncherOnboarding",
        "oai/apps/hasSeenExploreGPTsNewNux",
        "oai/apps/hasDismissedSonicSidebar",
        "oai/apps/hasSeenModelSwitcherAutoDowngrade",
        "oai/apps/hasSeenModelTunerDisclaimer",
        "oai/apps/hasSeenSncWelcomeNux",
        "oai/apps/hasSeenMultiToolAnnouncement"
    ],
    "settings": {
        "sunshine": true,
        "training_allowed": true,
        "show_expanded_code_view": false,
        "voice_name": "cove"
    }
};
$done({body: JSON.stringify(obj)});

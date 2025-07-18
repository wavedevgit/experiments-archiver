import fs from "fs/promises";
import { exec } from "child_process";
import { promisify } from "util";
import zlib from "zlib";

const execAsync = promisify(exec);
let n = (e) => new TextEncoder().encode(e);
function v3(e, t) {
  let r, i, a, o, s, l;
  "string" == typeof e && (e = n(e)),
    (r = 3 & e.length),
    (i = e.length - r),
    (a = t);
  for (l = 0; l < i; )
    (s =
      (255 & e[l]) |
      ((255 & e[++l]) << 8) |
      ((255 & e[++l]) << 16) |
      ((255 & e[++l]) << 24)),
      ++l,
      (a ^= s =
        ((65535 &
          (s =
            ((s =
              ((65535 & s) * 3432918353 +
                ((((s >>> 16) * 3432918353) & 65535) << 16)) &
              4294967295) <<
              15) |
            (s >>> 17))) *
          461845907 +
          ((((s >>> 16) * 461845907) & 65535) << 16)) &
        4294967295),
      (a =
        (65535 &
          (o =
            ((65535 & (a = (a << 13) | (a >>> 19))) * 5 +
              ((((a >>> 16) * 5) & 65535) << 16)) &
            4294967295)) +
        27492 +
        ((((o >>> 16) + 58964) & 65535) << 16));
  switch (((s = 0), r)) {
    case 3:
      s ^= (255 & e[l + 2]) << 16;
    case 2:
      s ^= (255 & e[l + 1]) << 8;
    case 1:
      (s ^= 255 & e[l]),
        (a ^= s =
          ((65535 &
            (s =
              ((s =
                ((65535 & s) * 3432918353 +
                  ((((s >>> 16) * 3432918353) & 65535) << 16)) &
                4294967295) <<
                15) |
              (s >>> 17))) *
            461845907 +
            ((((s >>> 16) * 461845907) & 65535) << 16)) &
          4294967295);
  }
  return (
    (a ^= e.length),
    (a ^= a >>> 16),
    (a =
      ((65535 & a) * 2246822507 + ((((a >>> 16) * 2246822507) & 65535) << 16)) &
      4294967295),
    (a ^= a >>> 13),
    (a =
      ((65535 & a) * 3266489909 + ((((a >>> 16) * 3266489909) & 65535) << 16)) &
      4294967295),
    (a ^= a >>> 16) >>> 0
  );
}
function compressZlib(obj) {
  const json = JSON.stringify(obj);
  return zlib.deflateSync(Buffer.from(json));
}

function deCompressZlib(zlibBinary) {
  return zlib.inflateSync(zlibBinary);
}

async function main() {
  const gistUrl =
    "https://gist.github.com/DiscrapperManager/05962f6137eacd9dbbc589d97c8ece3f";
  if ((await fs.readdir("./")).includes("gist"))
    await fs.rm("./gist", { force: true, recursive: true });
  if (!(await fs.readdir("./")).includes("data")) await fs.mkdir("./data");
  if (!(await fs.readdir("./data")).includes("definitions"))
    await fs.mkdir("./data/definitions");
  // source: (mostly gist, discordlookup was used only on few exps) https://gist.github.com/XYZenix/95de40ff80091c0ff7b0cfd610bd10d7 & discordlookup
  const bultIn = {
    2710924848: {
      kind: "guild",
      id: "2023-04_guild_alert_mode",
      label: "Guild Alert Mode",
      defaultConfig: {},
      treatments: [
        {
          id: 1,
          label: "Show alert mode experience",
          config: {},
        },
        {
          id: 2,
          label: "Show alert mode experience with member safety",
          config: {},
        },
      ],
    },
    2225390567: {
      kind: "guild",
      id: "2023-08_guild_alert_mode_friend_server",
      label: "Guild Alert Mode (friend servers only)",
      defaultConfig: {},
      treatments: [
        {
          id: 1,
          label: "Show alert mode experience",
          config: {},
        },
        {
          id: 2,
          label: "Show alert mode experience with member safety",
          config: {},
        },
      ],
    },
    3080965400: {
      kind: "guild",
      id: "2023-08_guild_alert_mode_friend_server",
      label: "Gaming stats exposure setup",
      defaultConfig: {},
      treatments: [
        {
          id: 1,
          label: "trigger gaming stats data",
          config: {},
        },
      ],
    },
    3997016690: {
      kind: "guild",
      id: "2023-11_voice_activity_notification_guild",
      label: "General Voice Channel Notifications for Guild",
      defaultConfig: {},
      treatments: [
        {
          id: 1,
          label:
            "Deadchat notifs enabled, voice channel activity notifs disabled",
          config: {},
        },
        {
          id: 2,
          label:
            "Deadchat notifs disabled, voice channel activity notifs enabled",
          config: {},
        },
        {
          id: 3,
          label:
            "Deadchat notifs enabled, voice channel activity notifs enabled",
          config: {},
        },
      ],
    },
    433559228: {
      kind: "user",
      id: "2023-12_request_mobile_app_review_feature_flag",
      label: "Request Mobile App Review Feature Flag",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    738080167: {
      kind: "user",
      id: "2023-02_super_reactions_ordering",
      label: "Super Reactions Ordering",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    747043176: {
      kind: "guild",
      id: "2023-03_cr_accept_new_terms",
      label: "Server Subscriptions Accept New Terms",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    848173753: {
      kind: "guild",
      id: "2022-10_text_in_stage",
      label: "Text-In-Stage",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    897631700: {
      kind: "user",
      id: "2025-04_mobile_activity_controller_icon",
      label: "Activities Controller Icon - Mobile",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    996399186: {
      kind: "user",
      id: "2025-01_direct_jump_new_messages",
      label: "Jump directly to new messages",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    1034661306: {
      kind: "user",
      id: "2022-06_native_mobile_role_subscription_management",
      label: "Mobile Guild Role Subscription Management",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    1066520209: {
      kind: "user",
      id: "2024-03_mobile_app_review_request",
      label: "Request In-App Review Feature Flag",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    1338782680: {
      kind: "user",
      id: "2024-09_quests_mobile_quest_dock",
      label: "Quests: Mobile Quest Dock",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    1398673921: {
      kind: "user",
      id: "2022-04_alt_text_on_mobile",
      label: "Image Descriptions (Alt Text) on Mobile",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    1496165720: {
      kind: "guild",
      id: "2024-02_viewerside_cliping_guild_test",
      label: "",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    1549543958: {
      kind: "user",
      id: "2022-09_sticker_upload_resize",
      label: "Sticker Upload Resize",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    1788933951: {
      kind: "user",
      id: "2023-01_nitro_basic_hd_streaming_upsell",
      label: "Nitro Basic HD Streaming Upsell",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    1804122827: {
      kind: "guild",
      id: "2022-09_guild_onboarding_admin_only",
      label: "Guild Onboarding Admin only",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    1865413295: {
      kind: "guild",
      id: "2023-09_member_safety_release_coachmark",
      label: "Members Safety Release Coachmark Experiment",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    1884426471: {
      kind: "user",
      id: "2023-07_pause_verified_server_applications",
      label: "PAUSE_VERIFIED_SERVER_APPLICATIONS",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    1983344817: {
      kind: "user",
      id: "2023-12_create_guild_modal_themeing",
      label: "Create Guild Modal Force Light Theme",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    1990672009: {
      kind: "guild",
      id: "2022-04_guild_role_subscription_purchase_feedback_loop",
      label: "Guild Role Subscription Purchase Feedback Loop",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    2001176293: {
      kind: "guild",
      id: "2023-02_free_form",
      label: "Automod Server Policy",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    2014775304: {
      kind: "guild",
      id: "2023-02_burst_reaction_guild_experiment",
      label: "Burst Reactions",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    2292925561: {
      kind: "user",
      id: "2022-01_go_live_notification_holdout",
      label: "Go Live notification holdout",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    2319433682: {
      kind: "user",
      id: "2025-06_chat_input_actions_collapse_to_media",
      label: "Chat Input Actions Collapse to Media",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    2491943447: {
      kind: "user",
      id: "2024-04_keyboard_type_ios",
      label: "Change the keyboard type on iOS to default instead of twitter",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    2617218444: {
      kind: "user",
      id: "2021-03_contact_sync_main",
      label: "Contact sync base population experiment with holdout",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    2701598838: {
      kind: "guild",
      id: "2023-05_clyde_ai_guild_personality",
      label: "Modify Clyde's Personality",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    2803184680: {
      kind: "guild",
      id: "2023-07_p13n_summarization_model_swap_guild",
      label: "Guild channel summarization model swapping",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    2810205487: {
      kind: "user",
      id: "2020-08_ios_persist_local_messages",
      label: "Local Message Caching",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3035674767: {
      kind: "user",
      id: "2021-03_mobile_in_app_reports_guild_flow",
      label: "Mobile In App Reports - Guilds",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3041932109: {
      kind: "guild",
      id: "2023-07_clyde_ai_proactive_guilds",
      label: "Proactive Clyde",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3101260054: {
      kind: "guild",
      id: "2023-02_temporary_invite_discoverability",
      label: "",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3124003316: {
      kind: "user",
      id: "2022-07_swp_discover_nav_bar",
      label: "SWP_DISCOVER_NAV_BAR",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3143066071: {
      kind: "guild",
      id: "2023-06_clyde_ai_channel_based_personality",
      label: "Modify Clyde's Personality",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3194028601: {
      kind: "guild",
      id: "2023-03_self_demonetization",
      label: "Self Demonetization",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3283745071: {
      kind: "user",
      id: "2023-03_p13n_summarization_user",
      label: "Channel Summaries User Experiment",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3376236088: {
      kind: "user",
      id: "2022-10_free_user_video_quality_default_medium",
      label: "Free User Video Quality Default Medium",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3450899088: {
      kind: "user",
      id: "2022-01_email_change_confirmation",
      label: "Email Change Confirmation",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3482834131: {
      kind: "user",
      id: "2023-03_activities_release_tools",
      label: "Activities Release Tools",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3497865233: {
      kind: "user",
      id: "2023-10_poll_users",
      label: "Polls User Experiment",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3510816342: {
      kind: "guild",
      id: "2022-03_role_subscription_analytics_portal",
      label: "Guild Role Subscription Analytics",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3619430206: {
      kind: "user",
      id: "2025-04_quest_dock_animated_background",
      label: "",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3643362751: {
      kind: "user",
      id: "2021-04_network_action_logging",
      label: "Standard Analytics: Log Network Actions",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3674963204: {
      kind: "guild",
      id: "2022-03_discovery_guild_seo",
      label: "Guild Settings Discovery Landing Page Tab Experiment",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    3738976194: {
      kind: "guild",
      id: "2023-03_onboarding_soft_requirement_for_partnership",
      label: "Hide onboarding soft requirement for partnership",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    4049571159: {
      kind: "user",
      id: "2022-08_consoles_connect_request_nonce",
      label: "Fast Xbox voice transfer cancelation",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    4135158941: {
      kind: "user",
      id: "2023-09_redesignnufchannels",
      label: "NUF channels in redesign",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
    4221006726: {
      kind: "user",
      id: "2022-03_highlights_settings",
      label: "Display highlights notification settings for a users guilds",
      defaultConfig: {},
      treatments: [],
      note: "missing data",
    },
  };
  const bultInIds = {};

  for (let [hash, definition] of Object.entries(bultIn)) {
    bultIn[hash] = definition.id;
    await fs.writeFile(
      `./data/definitions/${hash}.json`,
      JSON.stringify(definition, null, 4)
    );
  }

  const cloneCmd = `git clone ${gistUrl} gist`;
  await execAsync(cloneCmd);
  // list all commits
  const commits = await execAsync("cd ./gist && git rev-list --all");
  const commitsDone = JSON.parse(
    await fs.readFile("./commitsDone.json", "utf-8")
  );
  let ids = {};
  try {
    ids = JSON.parse(await fs.readFile("./data/ids.json"));
  } catch {}
  for (let commit of commits.stdout.split("\n")) {
    if (!commitsDone.includes(commit)) {
      console.log("at commit", commit);
      // download experiments.json from commit
      await execAsync("cd ./gist && git checkout ".concat(commit));
      const content = JSON.parse(
        await fs.readFile("./gist/experiments.json", "utf-8")
      );
      for (let experiment of content) {
        const idHashed = v3(experiment.id);
        await fs.writeFile(
          `./data/definitions/${idHashed}.json`,
          JSON.stringify(experiment, null, 4),
          "utf-8"
        );
        if (!ids[idHashed]) ids[idHashed] = experiment.id;
      }
      commitsDone.push(commit);
    }
  }
  await fs.writeFile(
    "./commitsDone.json",
    JSON.stringify(commitsDone, null, 4)
  );
  await fs.writeFile(
    "./data/ids.json",
    JSON.stringify({ ...ids, ...bultInIds }, null, 4)
  );
  await fs.rm("./gist", { recursive: true, force: true });
}
main();

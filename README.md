# Tornei Scuola

Piattaforma web statica per gestire tornei scolastici con Supabase: tornei, squadre, calendario, live match, firme capitani, report, atletica, QR campo, Telegram, archivio e modalita offline.

Il frontend e HTML/CSS/JavaScript vanilla. Supabase gestisce Auth, PostgreSQL, RLS, RPC, trigger, Edge Functions e dati realtime.

## Funzionalita principali

- Portale pubblico con tornei, classifiche, partite, albo d'oro, pagina squadra e vista campo via QR.
- Dashboard admin multi-ruolo con calendario, campi, squadre, report, atletica, Telegram, impostazioni e Centro di controllo.
- Centro di controllo riservato al Super Admin con checklist pre-giornata, stato campi, postazioni, ritardi, problemi e analytics.
- Gestione admin dentro Impostazioni Superadmin: creazione Auth, ruoli, nome visualizzato, ultimo accesso e postazione associata.
- Calendario tabellare e vista calendario con drag-and-drop per spostare match mantenendo ora/durata.
- Formati torneo disponibili nell'interfaccia: gironi ed eliminazione diretta.
- Live match con lock, snapshot, timer, punteggio, roster, presenze, falli, MVP, cartellini e cronologia opzionale.
- Chiusura match con referto finale, staff gara e doppia firma elettronica dei capitani.
- Offline professionale: Service Worker, IndexedDB, cache match, bozze locali, coda operazioni e gestione conflitti.
- Registro modifiche con utente/postazione, valori precedenti, nuovi valori, data/ora e motivazione.
- Backup/ripristino, privacy pubblica configurabile, squalifiche da confermare, rinvii e controlli conflitti.
- Atletica con eventi, risultati, tentativi, ranking, batterie/corsie, qualificazioni/finali, record d'istituto, staffette e stati atleta.
- Test statici, sintassi JavaScript, test Playwright desktop/mobile e CI GitHub.

## Pagine

- `/` o `index.html`: pagina pubblica studenti/docenti.
- `/admin/`: dashboard amministrativa canonica.
- `admin.html` e `admin/admin.html`: redirect verso `/admin/`.
- `live.html?match=<id>`: gestione live del match.
- `gym.html`: schermo palestra/proiettore.
- `bracket-demo.html`: demo quadro eliminazione con dati realistici.

## Ruoli

- `super_admin`: accesso completo, Centro di controllo, gestione globale campi/postazioni e risultati ufficiali.
- `match_manager`: gestione match/live e report consentiti.
- `report_viewer`: consultazione report.

Le regole lato UI sono in `js/auth.js`; la protezione reale va mantenuta con RLS/RPC nel database.

## Setup rapido

1. Crea o apri il progetto Supabase.
2. Apri SQL Editor.
3. Esegui tutte le migrazioni `sql/*.sql` in ordine crescente.
4. Configura `js/app-config.js` con `supabaseUrl` e `supabaseAnonKey`.
5. Deploya le Edge Functions Telegram se vuoi inviare messaggi automatici.
6. Deploya `manage-admin-user` se vuoi creare/modificare admin dalla dashboard.
7. Pubblica i file statici su GitHub Pages o avvia un server locale.
8. Apri `/` per il pubblico e `/admin/` per la dashboard.

Per dati demo puoi eseguire `sql/002_seed_demo_tornei.sql` dopo lo schema base.

## Migrazioni SQL

- `001_refactor_hybrid.sql`: schema principale, RLS, view e RPC.
- `002_seed_demo_tornei.sql`: dati demo.
- `003_mvp_config_per_torneo.sql`: configurazione MVP.
- `004_fix_legacy_foreign_keys.sql`: correzioni FK legacy.
- `005_fix_finalize_match_ambiguous.sql`: fix finalizzazione.
- `006_fix_allow_mvp_schema_cache.sql`: compatibilita `allow_mvp`.
- `007_atletica_attempts_limits.sql`: tentativi/limiti atletica.
- `008_hard_guards_matches_and_orphans.sql`: guardie e pulizia orfani.
- `009_schedule_push_archive_signatures.sql`: campi, orari, capitani, firme, QR, albo.
- `010_notifications_archive_card_limits.sql`: limiti cartellini e compatibilita.
- `011_save_team_captain_rpc.sql`: RPC salvataggio squadre/capitani.
- `012_fix_team_and_sport_admin_rpc.sql`: RPC admin squadre/tornei.
- `015_disable_web_push_use_telegram.sql`: disattiva Web Push legacy.
- `016_telegram_match_reminders.sql`: promemoria match Telegram.
- `017_drop_web_push_legacy.sql`: elimina tabelle/RPC Web Push legacy.
- `018_telegram_team_notifications.sql`: notifiche squadra Telegram.
- `019_fix_finalize_match_with_signatures_ambiguous.sql`: fix firme capitani.
- `020_fix_finalize_signature_conflict_targets.sql`: fix conflict target statistiche/firme.
- `021_audit_reopen_emergency_foundation.sql`: audit, correzioni controllate, ranking/privacy.
- `022_complete_operational_modules.sql`: staff, disponibilita, eventi live, squalifiche, rinvii, backup, privacy, atletica avanzata.
- `023_devices_admin_offline_audit.sql`: dispositivi/postazioni e audit con origine dispositivo.
- `024_platform_professional_completion.sql`: dashboard oggi, notifiche interne, stati operativi, check-in, template comunicazioni, salute sistema.
- `025_official_ops_devices_validation_logs.sql`: registro dispositivi, log errori, log accessi sensibili, impostazioni piattaforma, validatore pre-evento.
- `026_admin_users_formats_migration_check.sql`: formati torneo avanzati, vincolo corsie atletica e registro migrazioni verificabile dalla dashboard.
- `027_fix_platform_backup_restore_players.sql`: ripristino backup completo anche su squadre, giocatori e capitani.
- `028_public_notifications_superadmin.sql`: notifiche pubbliche visibili dal campanello della home.
- `029_admin_profile_resolution.sql`: risoluzione profilo admin.
- `030_admin_uuid_only.sql`: controllo admin basato su UUID Auth.
- `031_limit_tournament_formats.sql`: limita i formati esposti a gironi ed eliminazione diretta.
- `032_issue_reports_rpc.sql`: RPC per segnalazioni problemi pubbliche e lettura admin.
- `033_regia_operational_control.sql`: ruolo Regia, Centro Operativo, postazioni match, stati campo, ritardi, approvazione ufficiale e scadenza notifiche.
- `034_regia_permissions_patch.sql`: allinea RPC e policy precedenti al ruolo Regia.
- `035_auto_shift_after_late_finish.sql`: slitta automaticamente i match successivi dello stesso campo quando una live viene chiusa in ritardo.
- `037_regia_live_permissions.sql`: abilita correttamente Regia sulle RPC live storiche che usano `can_manage_matches`.
- `038_disable_regia_emergency_controls.sql`: rimuove dalla superficie applicativa i controlli globali Emergenza/Riprendi evento.
- `039_remove_regia_role.sql`: converte eventuali utenti Regia in Super Admin e rimuove il ruolo Regia dalla piattaforma.

## Telegram

1. Crea un bot con BotFather.
2. Aggiungilo come amministratore del canale.
3. Imposta i secrets:

```powershell
supabase secrets set TELEGRAM_BOT_TOKEN="TOKEN_BOT" TELEGRAM_CHAT_ID="@itsoscup" --project-ref nalxfsbjeinptjflvndp
supabase functions deploy send-telegram-match --project-ref nalxfsbjeinptjflvndp
supabase functions deploy send-telegram-team --project-ref nalxfsbjeinptjflvndp
```

Nel pannello admin puoi inviare un promemoria dal menu a tre puntini del match o una comunicazione dalla tabella squadre. La sezione Telegram mostra anche il QR del canale e i template messaggio.

## Gestione admin

La gestione utenti in `/admin/` e visibile ai profili autorizzati. Solo i Super Admin possono creare, modificare o cancellare altri account amministrativi.

```powershell
supabase functions deploy manage-admin-user --project-ref nalxfsbjeinptjflvndp
```

La funzione usa `SUPABASE_SERVICE_ROLE_KEY` solo lato Supabase Edge Function. Non inserirla mai in `js/app-config.js`.

Secrets richiesti per la funzione:

```powershell
supabase secrets set SUPABASE_URL="https://nalxfsbjeinptjflvndp.supabase.co" SUPABASE_ANON_KEY="ANON_KEY" SUPABASE_SERVICE_ROLE_KEY="SERVICE_ROLE_KEY" --project-ref nalxfsbjeinptjflvndp
```

## Uso online/offline

### Preparazione online

1. Entra in `/admin/` da ogni dispositivo.
2. Verifica nome postazione e login.
3. Crea tornei, squadre, campi e calendario.
4. Nel calendario clicca `Prepara offline`.
5. Verifica che i match live necessari si aprano almeno una volta sul dispositivo.

### Evento offline

1. Apri il live match dal dispositivo preparato.
2. Se Supabase non risponde, il live usa la cache IndexedDB.
3. Salva snapshot: la bozza resta locale e viene messa in coda.
4. In emergenza usa anche il referto cartaceo.

### Ritorno online

1. Riapri il live quando Internet torna disponibile.
2. La bozza viene sincronizzata.
3. Se il match e cambiato anche online, scegli dal popup conflitto.
4. Controlla registro modifiche e chiudi con firme capitani.

## Sicurezza

- Nel frontend devono esserci solo chiavi Supabase pubbliche `anon`.
- Nessuna password operativa e nessuna service role key in JavaScript.
- `APP_CONFIG.allowDirectTableFallbacks` e disabilitato di default.
- RLS e RPC sono obbligatorie per operazioni critiche.
- Il log errori e il log accessi sensibili sono gestiti da migrazione `025`.
- La dashboard mostra le migrazioni applicate lette da `platform_migrations`; se manca `039`, applica l'ultimo file SQL e ricarica la pagina.

## Struttura

```text
.
|-- admin/
|   `-- index.html
|-- admin.html
|-- index.html
|-- live.html
|-- gym.html
|-- bracket-demo.html
|-- manifest.webmanifest
|-- sw.js
|-- css/
|   |-- style.css
|   `-- admin-modules.css
|-- js/
|   |-- admin-users.js
|   |-- admin-users-panel.js
|   |-- admin-system.js
|   |-- app-config.js
|   |-- auth.js
|   |-- db.js
|   |-- error-logger.js
|   |-- main-admin.js
|   |-- main-index.js
|   |-- main-live.js
|   |-- matches.js
|   |-- offline-db.js
|   |-- offline-store.js
|   |-- platform-ops.js
|   `-- utils.js
|-- sql/
|-- supabase/functions/
|   |-- manage-admin-user/
|   |-- send-telegram-match/
|   `-- send-telegram-team/
|-- tests/
`-- vendor/
```

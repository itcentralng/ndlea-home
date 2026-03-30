@echo off
:: Launch the app directly in Edge (no server needed for static files)
@REM start "" "msedge" --app=file:///%~dp0index.html
start "" "msedge" --kiosk file:///%~dp0index.html --edge-kiosk-type=fullscreen --no-first-run --disable-features=msEdgeEnterpriseModePolicies
#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
"/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge" \
  --kiosk "file://$DIR/index.html" \
  --edge-kiosk-type=fullscreen \
  --no-first-run \
  --disable-features=msEdgeEnterpriseModePolicies

# Check arguments
if [ -z "$1" ]; then
  echo "Usage: ./install-aab.sh C:/Users/a_nun/OneDrive/Área de Trabalho/application-271d2a76-2548-4b04-aecc-9aead7bb6af8.aab"
  exit 1
fi

AAB_PATH=$1
BUNDLETOOL_JAR="./scripts/bundletool-all-1.18.1.jar"
APK_OUTPUT_DIR="./output-apks"
APK_OUTPUT_ZIP="$APK_OUTPUT_DIR/app.apks"
UNIVERSAL_APK="$APK_OUTPUT_DIR/universal.apk"

# Check for bundletool
if [ ! -f "$BUNDLETOOL_JAR" ]; then
  echo "Error: $BUNDLETOOL_JAR not found!"
  echo "Download it from https://github.com/google/bundletool"
  exit 1
fi

# Clean old output
rm -rf "$APK_OUTPUT_DIR"
mkdir "$APK_OUTPUT_DIR"

echo "➡️ Building universal APK from AAB..."
java -jar "$BUNDLETOOL_JAR" build-apks \
  --bundle="$AAB_PATH" \
  --output="$APK_OUTPUT_ZIP" \
  --mode=universal \
  --overwrite

echo "📦 Extracting APK..."
unzip "$APK_OUTPUT_ZIP" universal.apk -d "$APK_OUTPUT_DIR"

echo "📱 Installing APK to emulator..."
adb install -r "$UNIVERSAL_APK"

echo "✅ Done!"
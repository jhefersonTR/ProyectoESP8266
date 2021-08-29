/**
   PostHTTPClient.ino
    Created on: 21.11.2016
*/
#include <DHT.h>
#include <DHT_U.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

/* this can be run with an emulated server on host:
        cd esp8266-core-root-dir
        cd tests/host
        make ../../libraries/ESP8266WebServer/examples/PostServer/PostServer
        bin/PostServer/PostServer
   then put your PC's IP address in SERVER_IP below, port 9080 (instead of default 80):
*/
//#define SERVER_IP "10.0.1.7:9080" // PC address with emulation on host
#define SERVER_IP "192.168.1.3:8080"

#ifndef STASSID
#define STASSID "Tilinennuestro<3"
#define STAPSK  "Tilinmipastor!"
#endif


float  temp ,hume;
String temperatura ,humedad,urlenviada;
DHT dht(D2,DHT11);
void setup() {

  Serial.begin(9600);

    dht.begin();

  WiFi.begin(STASSID, STAPSK);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected! IP address: ");
  Serial.println(WiFi.localIP());

}

void loop() {
  // wait for WiFi connection
  hume=dht.readHumidity();
  temp=dht.readTemperature();

  humedad.concat(hume);
  if ((WiFi.status() == WL_CONNECTED)) {

    WiFiClient client;
    HTTPClient http;

   
    http.begin(client, "http://" SERVER_IP "/backend/registrar.php/"); //HTTP
    http.addHeader("Content-Type", "application/x-www-form-urlencoded");

    urlenviada="temperatura=";
    urlenviada.concat(temp);
    urlenviada.concat("&humedad=");
    urlenviada.concat(hume);
    
    Serial.print(urlenviada);

    
    int httpCode = http.POST(urlenviada);

    // httpCode will be negative on error
    if (httpCode > 0) {
  
      if (httpCode == HTTP_CODE_OK) {
        const String& payload = http.getString();
        Serial.println("received payload:\n<<");
     
      }
    } else {
      Serial.printf("[HTTP] POST... failed, error: %s\n", http.errorToString(httpCode).c_str());
    }
 
    http.end();
  }
  temperatura="";
  humedad="";
  urlenviada="";

  delay(10000);
}

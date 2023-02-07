# TileDB-Tableau-Connector
Custom Tableau connector for the [TileDB-Cloud JDBC driver](https://github.com/TileDB-Inc/TileDB-Cloud-JDBC).

# Usage

Follow these steps to connect the [TileDB-Cloud JDBC driver](https://github.com/TileDB-Inc/TileDB-Cloud-JDBC) with Tableau.
## Step 1:

To connect with Tableau, the TileDB-Cloud JDBC driver requires the use of this custom Tableau Connector.
Tableau has a built-in store for connectors, however, this TileDB connector is not currently available for download and needs to be manually placed in the appropriate directory.

To do this, copy the ```connector``` directory from this repo (ignoring the LICENSE and README files) to the following location:

- MacOS
    <br>```~/Documents/My\ Tableau\ Repository/Connectors```


- Windows 
  <br> ```C:\Users\[Windows User]\Documents\My Tableau Repository\Connectors```

## Step 2:
In addition to the connector placement, ensure that you have also placed the TileDB-Cloud JDBC driver ```(.jar file)``` in the appropriate directory. If the directory doesn't already exist, create it.

- MacOS
  <br>```~/Library/Tableau/Drivers```


- Windows
  <br> ```C:\Program Files\Tableau\Drivers```


## Step 3:
To launch Tableau, use the following commands:

- MacOS
  <br>```/Applications/Tableau\ Desktop\ [version].app/Contents/MacOS/Tableau -DConnectPluginsPath=/Users/<USER>/Documents/My\ Tableau\ Repository/Connectors```


- Windows
  <br>```tableau.exe -DConnectPluginsPath=C:\Users\[Windows User]\Documents\My Tableau Repository\Connectors```

## Step 4:
Once Tableau launches, choose ```TileDB-Cloud JDBC, by TileDB``` from the left sidebar and enter your credentials to login.
<br>


## Notes / Known issues
- Please note that skipping the steps above will result in Tableau opening without the TileDB connector being available.
- Some users may experience authentication failure when using a username/password combination. 
In such cases, use your TileDB token instead, which can be found at your [TileDB console.](https://console.tiledb.com)
- If you choose to enable the  ```Remember me``` option, your credentials will be stored at ```~/.tiledb/cloud.json``` and you will not have to enter them again during subsequent logins.



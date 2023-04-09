import { MachineInstance } from './MachineInstance';

export const TERMINALS: MachineInstance[] = [
    {
        machineName: 'Machine 1',
        machinePrefix: 'C:\\>systeminfo\n',
        machineDetails: `Host Name: GLFAR427634TX
        Original Install Date:     29/10/2020, 22:09:48
        System Boot Time:          28/08/2022, 02:21:10
        System Manufacturer:       HP
        System Model:              ProLiant m710x Server Cartridge
        System Type:               x64-based PC
        Processor(s):              1 Processor(s) Installed.
                                   [01]: Intel64 Family 6 Model 94 Stepping 3 GenuineIntel ~2496 Mhz
        BIOS Version:              HP H07, 17/07/2017
        Windows Directory:         C:\windows
        System Directory:          C:\windows\system32
        Boot Device:               \Device\HarddiskVolume1
        System Locale:             en-gb;English (United Kingdom)
        Input Locale:              N/A
        Time Zone:                 (UTC+00:00) Dublin, Edinburgh, Lisbon, London
        Total Physical Memory:     65,405 MB
        Available Physical Memory: 33,803 MB
        Virtual Memory: Max Size:  130,942 MB
        Virtual Memory: Available: 108,001 MB
        Virtual Memory: In Use:    22,941 MB
        Page File Location(s):     C:\pagefile.sys
        Domain:                    www.glasgowsciencecentre.org
        Logon Server:              \\SERVER08742
        OS Name:                   Microsoft Windows Server 2016 Standard
        OS Version:                10.0.14393 N/A Build 14393
        OS Manufacturer:           Microsoft Corporation
        OS Configuration:          Member Server
        OS Build Type:             Multiprocessor Free
        Registered Owner:          Glasgow Science Centre
        Registered Organization:   Glasgow Science Centre
        Product ID:                00001-10000-00000-BB666
        Hotfix(s):                 25 Hotfix(s) Installed.
                                     [01]: KB5016373
                                     [02]: KB3192137
                                     [03]: KB4132216
                                     [04]: KB4465659
                                     [05]: KB4485447
                                     [06]: KB4486129
                                     [07]: KB4503537
                                     [08]: KB4520724
                                     [09]: KB4521858
                                     [10]: KB4535680
                                     [11]: KB4537759
                                     [12]: KB4550994
                                     [13]: KB4561600
                                     [14]: KB4565912
                                     [15]: KB4576750
                                     [16]: KB4580325
                                     [17]: KB4589210
                                     [18]: KB5001078
                                     [19]: KB5001402
                                     [20]: KB5005698
                                     [21]: KB5011570
                                     [22]: KB5014026
                                     [23]: KB5016058
                                     [24]: KB5017095
                                     [25]: KB5016622
        Network Card(s):           2 NIC(s) Installed.
                                   [01]: Mellanox ConnectX-3 Ethernet Adapter
                                         Connection Name: Embedded LOM 1 Port 1
                                         DHCP Enabled:    Yes
                                         DHCP Server:     N/A
                                         IP address(es)
                                   [02]: Mellanox ConnectX-3 Ethernet Adapter
                                         Connection Name: Embedded LOM 1 Port 1 2
                                         DHCP Enabled:    Yes
                                         DHCP Server:     N/A
                                         IP address(es)
        Hyper-V Requirements:      A hypervisor has been detected. Features required for Hyper-V will not be displayed.`,
        toString: MachineInstance.prototype.toString
    },
    {
        machineName: 'Machine 2',
        machinePrefix: 'C:\\>systeminfo\n',
        machineDetails: `Host Name: COFQR457C35N3
        Original Install Date:     29/10/2020, 22:19:28
        System Boot Time:          28/08/2022, 02:11:10
        System Manufacturer:       HP
        System Model:              ProLiant m710x Server Cartridge
        System Type:               x64-based PC
        Processor(s):              1 Processor(s) Installed.
                                    [01]: Intel64 Family 6 Model 94 Stepping 3 GenuineIntel ~2496 Mhz
        BIOS Version:              HP H07, 17/07/2017
        Windows Directory:         C:\windows
        System Directory:          C:\windows\system32
        Boot Device:               \Device\HarddiskVolume1
        System Locale:             en-gb;English (United Kingdom)
        Input Locale:              N/A
        Time Zone:                 (UTC+00:00) Dublin, Edinburgh, Lisbon, London
        Total Physical Memory:     65,405 MB
        Available Physical Memory: 43,803 MB
        Virtual Memory: Max Size:  130,942 MB
        Virtual Memory: Available: 108,001 MB
        Virtual Memory: In Use:    22,941 MB
        Page File Location(s):     C:\pagefile.sys
        Domain:                    www.glasgowsciencecentre.org
        Logon Server:              \\SERVER087543
        OS Name:                   Microsoft Windows Server 2016 Standard
        OS Version:                10.0.14393 N/A Build 14393
        OS Manufacturer:           Microsoft Corporation
        OS Configuration:          Member Server
        OS Build Type:             Multiprocessor Free
        Registered Owner:          Glasgow Science Centre
        Registered Organization:   Glasgow Science Centre
        Product ID:                00001-10000-00000-BB666
        Hotfix(s):                 25 Hotfix(s) Installed.
                                    [01]: KB5016373
                                    [02]: KB3192137
                                    [03]: KB4132216
                                    [04]: KB4465659
                                    [05]: KB4485447
                                    [06]: KB4486129
                                    [07]: KB4503537
                                    [08]: KB4520724
                                    [09]: KB4521858
                                    [10]: KB4535680
                                    [11]: KB4537759
                                    [12]: KB4550994
                                    [13]: KB4561600
                                    [14]: KB4565912
                                    [15]: KB4576750
                                    [16]: KB4580325
                                    [17]: KB4589210
                                    [18]: KB5001078
                                    [19]: KB5001402
                                    [20]: KB5005698
                                    [21]: KB5011570
                                    [22]: KB5014026
                                    [23]: KB5016058
                                    [24]: KB5017095
                                    [25]: KB5016622
        Network Card(s):           3 NIC(s) Installed.
                                    [01]: Mellanox ConnectX-3 Ethernet Adapter
                                        Connection Name: Embedded LOM 1 Port 1
                                        DHCP Enabled:    Yes
                                        DHCP Server:     N/A
                                        IP address(es)
                                    [02]: Mellanox ConnectX-3 Ethernet Adapter
                                        Connection Name: Embedded LOM 1 Port 1 2
                                        DHCP Enabled:    Yes
                                        DHCP Server:     N/A
                                        IP address(es)
                                    [03]: Microsoft Network Adapter Multiplexor Driver
                                        Connection Name: Team1
                                        DHCP Enabled:    Yes
                                        DHCP Server:     168.125.55.102
                                        IP address(es)
                                        [01]: 11.12.90.150
                                        [02]: fe60::488q5:1554:a45g:g44557
        Hyper-V Requirements:      A hypervisor has been detected. Features required for Hyper-V will not be displayed.`,
        toString: MachineInstance.prototype.toString
},
{
        machineName: 'Machine 3',
        machinePrefix: 'C:\\>systeminfo\n',
        machineDetails: `Host Name: CQFAR427C34N1
        Original Install Date:     29/10/2020, 22:15:49
        System Boot Time:          28/08/2022, 02:01:00
        System Manufacturer:       HP
        System Model:              ProLiant m710x Server Cartridge
        System Type:               x64-based PC
        Processor(s):              1 Processor(s) Installed.
                                    [01]: Intel64 Family 6 Model 94 Stepping 3 GenuineIntel ~2496 Mhz
        BIOS Version:              HP H07, 17/07/2017
        Windows Directory:         C:\windows
        System Directory:          C:\windows\system32
        Boot Device:               \Device\HarddiskVolume1
        System Locale:             en-gb;English (United Kingdom)
        Input Locale:              N/A
        Time Zone:                 (UTC+00:00) Dublin, Edinburgh, Lisbon, London
        Total Physical Memory:     32,405 MB
        Available Physical Memory: 12,803 MB
        Virtual Memory: Max Size:  100,942 MB
        Virtual Memory: Available: 98,001 MB
        Virtual Memory: In Use:    2,941 MB
        Page File Location(s):     C:\pagefile.sys
        Domain:                    www.glasgowsciencecentre.org
        Logon Server:              \\SERVER06557
        OS Name:                   Microsoft Windows Server 2016 Standard
        OS Version:                10.0.14393 N/A Build 14393
        OS Manufacturer:           Microsoft Corporation
        OS Configuration:          Member Server
        OS Build Type:             Multiprocessor Free
        Registered Owner:          Glasgow Science Centre
        Registered Organization:   Glasgow Science Centre
        Product ID:                00001-10000-00000-BB666
        Hotfix(s):                 25 Hotfix(s) Installed.
                                    [01]: KB5016373
                                    [02]: KB3192137
                                    [03]: KB4132216
                                    [04]: KB4465659
                                    [05]: KB4485447
                                    [06]: KB4486129
                                    [07]: KB4503537
                                    [08]: KB4520724
                                    [09]: KB4521858
                                    [10]: KB4535680
                                    [11]: KB4537759
                                    [12]: KB4550994
                                    [13]: KB4561600
                                    [14]: KB4565912
                                    [15]: KB4576750
                                    [16]: KB4580325
                                    [17]: KB4589210
                                    [18]: KB5001078
                                    [19]: KB5001402
                                    [20]: KB5005698
                                    [21]: KB5011570
                                    [22]: KB5014026
                                    [23]: KB5016058
                                    [24]: KB5017095
                                    [25]: KB5016622
        Network Card(s):           3 NIC(s) Installed.
                                    [01]: Mellanox ConnectX-3 Ethernet Adapter
                                        Connection Name: Embedded LOM 1 Port 1
                                        DHCP Enabled:    Yes
                                        DHCP Server:     N/A
                                        IP address(es)
                                    [02]: Mellanox ConnectX-3 Ethernet Adapter
                                        Connection Name: Embedded LOM 1 Port 1 2
                                        DHCP Enabled:    Yes
                                        DHCP Server:     N/A
                                        IP address(es)
                                    [03]: Microsoft Network Adapter Multiplexor Driver
                                        Connection Name: Team1
                                        DHCP Enabled:    Yes
                                        DHCP Server:     168.128.50.105
                                        IP address(es)
                                        [01]: 10.98.90.151
                                        [02]: fe8250::44a7:14954:a85g:g455
        Hyper-V Requirements:      A hypervisor has been detected. Features required for Hyper-V will not be displayed.`,
        toString: MachineInstance.prototype.toString
},
{
        machineName: 'Machine 4',
        machinePrefix: 'C:\\>systeminfo\n',
        machineDetails: `Host Name: THFAR46AC34N1
        Original Install Date:     21/11/2019, 21:39:48
        System Boot Time:          28/08/2022, 01:51:20
        System Manufacturer:       HP
        System Model:              ProLiant m710x Server Cartridge
        System Type:               x64-based PC
        Processor(s):              1 Processor(s) Installed.
                                    [01]: Intel64 Family 6 Model 94 Stepping 3 GenuineIntel ~2496 Mhz
        BIOS Version:              HP H07, 17/07/2017
        Windows Directory:         C:\windows
        System Directory:          C:\windows\system32
        Boot Device:               \Device\HarddiskVolume1
        System Locale:             en-gb;English (United Kingdom)
        Input Locale:              N/A
        Time Zone:                 (UTC+00:00) Dublin, Edinburgh, Lisbon, London
        Total Physical Memory:     65,405 MB
        Available Physical Memory: 43,803 MB
        Virtual Memory: Max Size:  130,942 MB
        Virtual Memory: Available: 108,001 MB
        Virtual Memory: In Use:    22,941 MB
        Page File Location(s):     C:\pagefile.sys
        Domain:                    www.glasgowsciencecentre.org
        Logon Server:              \\SERVER06542
        OS Name:                   Microsoft Windows Server 2016 Standard
        OS Version:                8.1.1593 N/A Build 1593
        OS Manufacturer:           Microsoft Corporation
        OS Configuration:          Member Server
        OS Build Type:             Multiprocessor Free
        Registered Owner:          Glasgow Science Centre
        Registered Organization:   Glasgow Science Centre
        Product ID:                00001-10000-00000-BB666
        Hotfix(s):                 18 Hotfix(s) Installed.
                                    [01]: KB5016373
                                    [02]: KB3192137
                                    [03]: KB4132216
                                    [04]: KB4465659
                                    [05]: KB4485447
                                    [06]: KB4486129
                                    [07]: KB4503537
                                    [08]: KB4520724
                                    [09]: KB4521858
                                    [10]: KB4535680
                                    [11]: KB4537759
                                    [12]: KB4550994
                                    [13]: KB4561600
                                    [14]: KB4565912
                                    [15]: KB4576750
                                    [16]: KB4580325
                                    [17]: KB4589210
                                    [18]: KB5001078
        Network Card(s):           2 NIC(s) Installed.
                                    [01]: Mellanox ConnectX-3 Ethernet Adapter
                                        Connection Name: Embedded LOM 1 Port 1
                                        DHCP Enabled:    Yes
                                        DHCP Server:     N/A
                                        IP address(es)
                                    [02]: Mellanox ConnectX-3 Ethernet Adapter
                                        Connection Name: Embedded LOM 1 Port 1 2
                                        DHCP Enabled:    Yes
                                        DHCP Server:     N/A
                                        IP address(es)
        Hyper-V Requirements:      A hypervisor has been detected. Features required for Hyper-V will not be displayed.`,
        toString: MachineInstance.prototype.toString
},
{
        machineName: 'Machine 5',
        machinePrefix: 'C:\\>systeminfo\n',
        machineDetails: `Host Name:                 CHFAR427C34N1
        Original Install Date:     29/10/2020, 22:09:48
        System Boot Time:          28/08/2022, 02:11:10
        System Manufacturer:       HP
        System Model:              ProLiant m710x Server Cartridge
        System Type:               x64-based PC
        Processor(s):              1 Processor(s) Installed.
                                    [01]: Intel64 Family 6 Model 94 Stepping 3 GenuineIntel ~2496 Mhz
        BIOS Version:              HP H07, 17/07/2017
        Windows Directory:         C:\windows
        System Directory:          C:\windows\system32
        Boot Device:               \Device\HarddiskVolume1
        System Locale:             en-gb;English (United Kingdom)
        Input Locale:              N/A
        Time Zone:                 (UTC+00:00) Dublin, Edinburgh, Lisbon, London
        Total Physical Memory:     65,405 MB
        Available Physical Memory: 43,803 MB
        Virtual Memory: Max Size:  130,942 MB
        Virtual Memory: Available: 108,001 MB
        Virtual Memory: In Use:    22,941 MB
        Page File Location(s):     C:\pagefile.sys
        Domain:                    www.glasgowsciencecentre.org
        Logon Server:              \\SERVER01453
        OS Name:                   Microsoft Windows Server 2016 Standard
        OS Version:                10.0.14393 N/A Build 14393
        OS Manufacturer:           Microsoft Corporation
        OS Configuration:          Member Server
        OS Build Type:             Multiprocessor Free
        Registered Owner:          Glasgow Science Centre
        Registered Organization:   Glasgow Science Centre
        Product ID:                00001-10000-00000-BB666
        Hotfix(s):                 25 Hotfix(s) Installed.
                                    [01]: KB5016373
                                    [02]: KB3192137
                                    [03]: KB4132216
                                    [04]: KB4465659
                                    [05]: KB4485447
                                    [06]: KB4486129
                                    [07]: KB4503537
                                    [08]: KB4520724
                                    [09]: KB4521858
                                    [10]: KB4535680
                                    [11]: KB4537759
                                    [12]: KB4550994
                                    [13]: KB4561600
                                    [14]: KB4565912
                                    [15]: KB4576750
                                    [16]: KB4580325
                                    [17]: KB4589210
                                    [18]: KB5001078
                                    [19]: KB5001402
                                    [20]: KB5005698
                                    [21]: KB5011570
                                    [22]: KB5014026
                                    [23]: KB5016058
                                    [24]: KB5017095
                                    [25]: KB5016622
        Network Card(s):           3 NIC(s) Installed.
                                    [01]: Mellanox ConnectX-3 Ethernet Adapter
                                        Connection Name: Embedded LOM 1 Port 1
                                        DHCP Enabled:    Yes
                                        DHCP Server:     N/A
                                        IP address(es)
                                    [02]: Mellanox ConnectX-3 Ethernet Adapter
                                        Connection Name: Embedded LOM 1 Port 1 2
                                        DHCP Enabled:    Yes
                                        DHCP Server:     N/A
                                        IP address(es)
                                    [03]: Microsoft Network Adapter Multiplexor Driver
                                        Connection Name: Team1
                                        DHCP Enabled:    Yes
                                        DHCP Server:     168.12.55.112
                                        IP address(es)
                                        [01]: 11.90.10.151
                                        [02]: fe80::4437:1904:a485:g445
        Hyper-V Requirements:      A hypervisor has been detected. Features required for Hyper-V will not be displayed.`,
        toString: MachineInstance.prototype.toString
}
];
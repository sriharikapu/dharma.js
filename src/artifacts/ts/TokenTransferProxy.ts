export const TokenTransferProxy = {
    contractName: "TokenTransferProxy",
    abi: [
        {
            constant: false,
            inputs: [
                {
                    name: "_agent",
                    type: "address",
                },
            ],
            name: "addAuthorizedTransferAgent",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_token",
                    type: "address",
                },
                {
                    name: "_from",
                    type: "address",
                },
                {
                    name: "_to",
                    type: "address",
                },
                {
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "transferFrom",
            outputs: [
                {
                    name: "_success",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [],
            name: "unpause",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "paused",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [],
            name: "pause",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [
                {
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_agent",
                    type: "address",
                },
            ],
            name: "revokeTransferAgentAuthorization",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "getAuthorizedTransferAgents",
            outputs: [
                {
                    name: "authorizedAgents",
                    type: "address[]",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "transferOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            anonymous: false,
            inputs: [],
            name: "Pause",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [],
            name: "Unpause",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "previousOwner",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "OwnershipTransferred",
            type: "event",
        },
    ],
    bytecode:
        "0x606060405260008060146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610c938061006d6000396000f300606060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630a8f7b521461009e57806315dacbea146100d75780633f4ba83a1461016f5780635c975abb146101845780638456cb59146101b15780638da5cb5b146101c657806394ae6e711461021b5780639c20030214610254578063f2fde38b146102be575b600080fd5b34156100a957600080fd5b6100d5600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506102f7565b005b34156100e257600080fd5b610155600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610369565b604051808215151515815260200191505060405180910390f35b341561017a57600080fd5b61018261048e565b005b341561018f57600080fd5b61019761054c565b604051808215151515815260200191505060405180910390f35b34156101bc57600080fd5b6101c461055f565b005b34156101d157600080fd5b6101d961061f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561022657600080fd5b610252600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610644565b005b341561025f57600080fd5b6102676106b6565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102aa57808201518184015260208101905061028f565b505050509050019250505060405180910390f35b34156102c957600080fd5b6102f5600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506106cd565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561035257600080fd5b61036681600161082290919063ffffffff16565b50565b600061037f33600161093b90919063ffffffff16565b151561038a57600080fd5b8473ffffffffffffffffffffffffffffffffffffffff166323b872dd8585856000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b151561046957600080fd5b6102c65a03f1151561047a57600080fd5b505050604051805190509050949350505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104e957600080fd5b600060149054906101000a900460ff16151561050457600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105ba57600080fd5b600060149054906101000a900460ff161515156105d657600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561069f57600080fd5b6106b381600161099490919063ffffffff16565b50565b6106be610bd6565b6106c86001610b3e565b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561072857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561076457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b8160000160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156109375760018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160010180548060010182816108e79190610bea565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b5050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055600090505b8260010180549050811015610b39578173ffffffffffffffffffffffffffffffffffffffff168360010182815481101515610a2357fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610b2c57826001016001846001018054905003815481101515610a8657fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168360010182815481101515610ac357fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018360010181818054905003915081610b269190610c16565b50610b39565b80806001019150506109ec565b505050565b610b46610bd6565b81600101805480602002602001604051908101604052809291908181526020018280548015610bca57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610b80575b50505050509050919050565b602060405190810160405280600081525090565b815481835581811511610c1157818360005260206000209182019101610c109190610c42565b5b505050565b815481835581811511610c3d57818360005260206000209182019101610c3c9190610c42565b5b505050565b610c6491905b80821115610c60576000816000905550600101610c48565b5090565b905600a165627a7a7230582048716bcbdb1cfa43dc0e78b6646da4ebf6a73e947869f6dedd10a88b1351ae090029",
    deployedBytecode:
        "0x606060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630a8f7b521461009e57806315dacbea146100d75780633f4ba83a1461016f5780635c975abb146101845780638456cb59146101b15780638da5cb5b146101c657806394ae6e711461021b5780639c20030214610254578063f2fde38b146102be575b600080fd5b34156100a957600080fd5b6100d5600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506102f7565b005b34156100e257600080fd5b610155600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610369565b604051808215151515815260200191505060405180910390f35b341561017a57600080fd5b61018261048e565b005b341561018f57600080fd5b61019761054c565b604051808215151515815260200191505060405180910390f35b34156101bc57600080fd5b6101c461055f565b005b34156101d157600080fd5b6101d961061f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561022657600080fd5b610252600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610644565b005b341561025f57600080fd5b6102676106b6565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102aa57808201518184015260208101905061028f565b505050509050019250505060405180910390f35b34156102c957600080fd5b6102f5600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506106cd565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561035257600080fd5b61036681600161082290919063ffffffff16565b50565b600061037f33600161093b90919063ffffffff16565b151561038a57600080fd5b8473ffffffffffffffffffffffffffffffffffffffff166323b872dd8585856000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b151561046957600080fd5b6102c65a03f1151561047a57600080fd5b505050604051805190509050949350505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104e957600080fd5b600060149054906101000a900460ff16151561050457600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105ba57600080fd5b600060149054906101000a900460ff161515156105d657600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561069f57600080fd5b6106b381600161099490919063ffffffff16565b50565b6106be610bd6565b6106c86001610b3e565b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561072857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561076457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b8160000160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156109375760018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160010180548060010182816108e79190610bea565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b5050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055600090505b8260010180549050811015610b39578173ffffffffffffffffffffffffffffffffffffffff168360010182815481101515610a2357fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610b2c57826001016001846001018054905003815481101515610a8657fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168360010182815481101515610ac357fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018360010181818054905003915081610b269190610c16565b50610b39565b80806001019150506109ec565b505050565b610b46610bd6565b81600101805480602002602001604051908101604052809291908181526020018280548015610bca57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610b80575b50505050509050919050565b602060405190810160405280600081525090565b815481835581811511610c1157818360005260206000209182019101610c109190610c42565b5b505050565b815481835581811511610c3d57818360005260206000209182019101610c3c9190610c42565b5b505050565b610c6491905b80821115610c60576000816000905550600101610c48565b5090565b905600a165627a7a7230582048716bcbdb1cfa43dc0e78b6646da4ebf6a73e947869f6dedd10a88b1351ae090029",
    sourceMap:
        "1247:1389:7:-;;;268:5:25;247:26;;;;;;;;;;;;;;;;;;;;509:10:27;501:5;;:18;;;;;;;;;;;;;;;;;;1247:1389:7;;;;;;",
    deployedSourceMap:
        "1247:1389:7:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1515:148;;;;;;;;;;;;;;;;;;;;;;;;;;;;2325:309;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:25;;;;;;;;;;;;;;247:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85;;;;;;;;;;;;;;238:20:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1771:164:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;2030:186;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;832:169:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;1515:148:7;653:5:27;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1614:42:7;1649:6;1614:24;:34;;:42;;;;:::i;:::-;1515:148;:::o;2325:309::-;2475:13;2512:49;2550:10;2512:24;:37;;:49;;;;:::i;:::-;2504:58;;;;;;;;2586:6;2580:26;;;2607:5;2614:3;2619:7;2580:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2573:54;;2325:309;;;;;;:::o;833:87:25:-;653:5:27;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:25;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;666:85::-;653:5:27;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:25;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:27:-;;;;;;;;;;;;;:::o;1771:164:7:-;653:5:27;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1876:52:7;1921:6;1876:24;:44;;:52;;;;:::i;:::-;1771:164;:::o;2030:186::-;2114:26;;:::i;:::-;2163:46;:24;:44;:46::i;:::-;2156:53;;2030:186;:::o;832:169:27:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;753:227:11:-;849:4;:15;;:22;865:5;849:22;;;;;;;;;;;;;;;;;;;;;;;;;848:23;844:130;;;912:4;887;:15;;:22;903:5;887:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;930:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;957:5;930:33;;;;;;;;;;;;;;;;;;;;;;;844:130;753:227;;:::o;1466:166::-;1576:4;1603;:15;;:22;1619:5;1603:22;;;;;;;;;;;;;;;;;;;;;;;;;1596:29;;1466:166;;;;:::o;986:474::-;1131:6;1094:4;:15;;:22;1110:5;1094:22;;;;;;;;;;;;;;;;1087:29;;;;;;;;;;;1140:1;1131:10;;1126:328;1147:4;:21;;:28;;;;1143:1;:32;1126:328;;;1228:5;1200:33;;:4;:21;;1222:1;1200:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;:33;;;1196:248;;;1300:4;:21;;1353:1;1322:4;:21;;:28;;;;:32;1300:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;1253:4;:21;;1275:1;1253:24;;;;;;;;;;;;;;;;;;;:102;;;;;;;;;;;;;;;;;;1405:1;1373:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;1424:5;;1196:248;1177:3;;;;;;;1126:328;;;986:474;;;:::o;1638:162::-;1740:9;;:::i;:::-;1772:4;:21;;1765:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1638:162;;;:::o;1247:1389:7:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    source:
        '/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the "License");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an "AS IS" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport "./DebtRegistry.sol";\nimport "zeppelin-solidity/contracts/lifecycle/Pausable.sol";\nimport "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";\n\n\n/**\n * The TokenTransferProxy is a proxy contract for transfering principal\n * and fee payments and repayments between agents and keepers in the Dharma\n * ecosystem.  It is decoupled from the DebtKernel in order to make upgrades to the\n * protocol contracts smoother -- if the DebtKernel or RepyamentRouter is upgraded to a new contract,\n * creditors will not have to grant new transfer approvals to a new contract\'s address.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract TokenTransferProxy is Pausable {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    PermissionsLib.Permissions internal tokenTransferPermissions;\n\n    /**\n     * Add address to list of agents authorized to initiate `transferFrom` calls\n     */\n    function addAuthorizedTransferAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenTransferPermissions.authorize(_agent);\n    }\n\n    /**\n     * Remove address from list of agents authorized to initiate `transferFrom` calls\n     */\n    function revokeTransferAgentAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenTransferPermissions.revokeAuthorization(_agent);\n    }\n\n    /**\n     * Return list of agents authorized to initiate `transferFrom` calls\n     */\n    function getAuthorizedTransferAgents()\n        public\n        view\n        returns (address[] authorizedAgents)\n    {\n        return tokenTransferPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Transfer specified token amount from _from address to _to address on give token\n     */\n    function transferFrom(\n        address _token,\n        address _from,\n        address _to,\n        uint _amount\n    )\n        public\n        returns (bool _success)\n    {\n        require(tokenTransferPermissions.isAuthorized(msg.sender));\n\n        return ERC20(_token).transferFrom(_from, _to, _amount);\n    }\n}\n',
    sourcePath:
        "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/TokenTransferProxy.sol",
    ast: {
        attributes: {
            absolutePath:
                "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/TokenTransferProxy.sol",
            exportedSymbols: {
                TokenTransferProxy: [2382],
            },
        },
        children: [
            {
                attributes: {
                    literals: ["solidity", "0.4", ".18"],
                },
                id: 2301,
                name: "PragmaDirective",
                src: "584:23:7",
            },
            {
                attributes: {
                    SourceUnit: 1605,
                    absolutePath:
                        "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/DebtRegistry.sol",
                    file: "./DebtRegistry.sol",
                    scope: 2383,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 2302,
                name: "ImportDirective",
                src: "609:28:7",
            },
            {
                attributes: {
                    SourceUnit: 5456,
                    absolutePath: "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                    file: "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                    scope: 2383,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 2303,
                name: "ImportDirective",
                src: "638:60:7",
            },
            {
                attributes: {
                    SourceUnit: 5749,
                    absolutePath: "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
                    file: "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
                    scope: 2383,
                    symbolAliases: [null],
                    unitAlias: "",
                },
                id: 2304,
                name: "ImportDirective",
                src: "699:59:7",
            },
            {
                attributes: {
                    contractDependencies: [5455, 5609],
                    contractKind: "contract",
                    documentation:
                        "The TokenTransferProxy is a proxy contract for transfering principal\nand fee payments and repayments between agents and keepers in the Dharma\necosystem.  It is decoupled from the DebtKernel in order to make upgrades to the\nprotocol contracts smoother -- if the DebtKernel or RepyamentRouter is upgraded to a new contract,\ncreditors will not have to grant new transfer approvals to a new contract's address.\n * Author: Nadav Hollander -- Github: nadavhollander",
                    fullyImplemented: true,
                    linearizedBaseContracts: [2382, 5455, 5609],
                    name: "TokenTransferProxy",
                    scope: 2383,
                },
                children: [
                    {
                        attributes: {
                            arguments: [null],
                        },
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "Pausable",
                                    referencedDeclaration: 5455,
                                    type: "contract Pausable",
                                },
                                id: 2305,
                                name: "UserDefinedTypeName",
                                src: "1278:8:7",
                            },
                        ],
                        id: 2306,
                        name: "InheritanceSpecifier",
                        src: "1278:8:7",
                    },
                    {
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "PermissionsLib",
                                    referencedDeclaration: 2961,
                                    type: "library PermissionsLib",
                                },
                                id: 2307,
                                name: "UserDefinedTypeName",
                                src: "1299:14:7",
                            },
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "PermissionsLib.Permissions",
                                    referencedDeclaration: 2842,
                                    type: "struct PermissionsLib.Permissions storage pointer",
                                },
                                id: 2308,
                                name: "UserDefinedTypeName",
                                src: "1318:26:7",
                            },
                        ],
                        id: 2309,
                        name: "UsingForDirective",
                        src: "1293:52:7",
                    },
                    {
                        attributes: {
                            constant: false,
                            name: "tokenTransferPermissions",
                            scope: 2382,
                            stateVariable: true,
                            storageLocation: "default",
                            type: "struct PermissionsLib.Permissions storage ref",
                            value: null,
                            visibility: "internal",
                        },
                        children: [
                            {
                                attributes: {
                                    contractScope: null,
                                    name: "PermissionsLib.Permissions",
                                    referencedDeclaration: 2842,
                                    type: "struct PermissionsLib.Permissions storage pointer",
                                },
                                id: 2310,
                                name: "UserDefinedTypeName",
                                src: "1351:26:7",
                            },
                        ],
                        id: 2311,
                        name: "VariableDeclaration",
                        src: "1351:60:7",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: false,
                            name: "addAuthorizedTransferAgent",
                            payable: false,
                            scope: 2382,
                            stateMutability: "nonpayable",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_agent",
                                            scope: 2325,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 2312,
                                                name: "ElementaryTypeName",
                                                src: "1551:7:7",
                                            },
                                        ],
                                        id: 2313,
                                        name: "VariableDeclaration",
                                        src: "1551:14:7",
                                    },
                                ],
                                id: 2314,
                                name: "ParameterList",
                                src: "1550:16:7",
                            },
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 2317,
                                name: "ParameterList",
                                src: "1604:0:7",
                            },
                            {
                                attributes: {
                                    arguments: [null],
                                },
                                children: [
                                    {
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 5583,
                                            type: "modifier ()",
                                            value: "onlyOwner",
                                        },
                                        id: 2315,
                                        name: "Identifier",
                                        src: "1590:9:7",
                                    },
                                ],
                                id: 2316,
                                name: "ModifierInvocation",
                                src: "1590:9:7",
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: true,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "authorize",
                                                            referencedDeclaration: 2873,
                                                            type:
                                                                "function (struct PermissionsLib.Permissions storage pointer,address)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2311,
                                                                    type:
                                                                        "struct PermissionsLib.Permissions storage ref",
                                                                    value:
                                                                        "tokenTransferPermissions",
                                                                },
                                                                id: 2318,
                                                                name: "Identifier",
                                                                src: "1614:24:7",
                                                            },
                                                        ],
                                                        id: 2320,
                                                        name: "MemberAccess",
                                                        src: "1614:34:7",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2313,
                                                            type: "address",
                                                            value: "_agent",
                                                        },
                                                        id: 2321,
                                                        name: "Identifier",
                                                        src: "1649:6:7",
                                                    },
                                                ],
                                                id: 2322,
                                                name: "FunctionCall",
                                                src: "1614:42:7",
                                            },
                                        ],
                                        id: 2323,
                                        name: "ExpressionStatement",
                                        src: "1614:42:7",
                                    },
                                ],
                                id: 2324,
                                name: "Block",
                                src: "1604:59:7",
                            },
                        ],
                        id: 2325,
                        name: "FunctionDefinition",
                        src: "1515:148:7",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: false,
                            name: "revokeTransferAgentAuthorization",
                            payable: false,
                            scope: 2382,
                            stateMutability: "nonpayable",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_agent",
                                            scope: 2339,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 2326,
                                                name: "ElementaryTypeName",
                                                src: "1813:7:7",
                                            },
                                        ],
                                        id: 2327,
                                        name: "VariableDeclaration",
                                        src: "1813:14:7",
                                    },
                                ],
                                id: 2328,
                                name: "ParameterList",
                                src: "1812:16:7",
                            },
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 2331,
                                name: "ParameterList",
                                src: "1866:0:7",
                            },
                            {
                                attributes: {
                                    arguments: [null],
                                },
                                children: [
                                    {
                                        attributes: {
                                            argumentTypes: null,
                                            overloadedDeclarations: [null],
                                            referencedDeclaration: 5583,
                                            type: "modifier ()",
                                            value: "onlyOwner",
                                        },
                                        id: 2329,
                                        name: "Identifier",
                                        src: "1852:9:7",
                                    },
                                ],
                                id: 2330,
                                name: "ModifierInvocation",
                                src: "1852:9:7",
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: true,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "revokeAuthorization",
                                                            referencedDeclaration: 2933,
                                                            type:
                                                                "function (struct PermissionsLib.Permissions storage pointer,address)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2311,
                                                                    type:
                                                                        "struct PermissionsLib.Permissions storage ref",
                                                                    value:
                                                                        "tokenTransferPermissions",
                                                                },
                                                                id: 2332,
                                                                name: "Identifier",
                                                                src: "1876:24:7",
                                                            },
                                                        ],
                                                        id: 2334,
                                                        name: "MemberAccess",
                                                        src: "1876:44:7",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2327,
                                                            type: "address",
                                                            value: "_agent",
                                                        },
                                                        id: 2335,
                                                        name: "Identifier",
                                                        src: "1921:6:7",
                                                    },
                                                ],
                                                id: 2336,
                                                name: "FunctionCall",
                                                src: "1876:52:7",
                                            },
                                        ],
                                        id: 2337,
                                        name: "ExpressionStatement",
                                        src: "1876:52:7",
                                    },
                                ],
                                id: 2338,
                                name: "Block",
                                src: "1866:69:7",
                            },
                        ],
                        id: 2339,
                        name: "FunctionDefinition",
                        src: "1771:164:7",
                    },
                    {
                        attributes: {
                            constant: true,
                            implemented: true,
                            isConstructor: false,
                            modifiers: [null],
                            name: "getAuthorizedTransferAgents",
                            payable: false,
                            scope: 2382,
                            stateMutability: "view",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                attributes: {
                                    parameters: [null],
                                },
                                children: [],
                                id: 2340,
                                name: "ParameterList",
                                src: "2066:2:7",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "authorizedAgents",
                                            scope: 2350,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address[] memory",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    length: null,
                                                    type: "address[] storage pointer",
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            name: "address",
                                                            type: "address",
                                                        },
                                                        id: 2341,
                                                        name: "ElementaryTypeName",
                                                        src: "2114:7:7",
                                                    },
                                                ],
                                                id: 2342,
                                                name: "ArrayTypeName",
                                                src: "2114:9:7",
                                            },
                                        ],
                                        id: 2343,
                                        name: "VariableDeclaration",
                                        src: "2114:26:7",
                                    },
                                ],
                                id: 2344,
                                name: "ParameterList",
                                src: "2113:28:7",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            functionReturnParameters: 2344,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    arguments: [null],
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "address[] memory",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [null],
                                                            isConstant: false,
                                                            isLValue: true,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "getAuthorizedAgents",
                                                            referencedDeclaration: 2960,
                                                            type:
                                                                "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    overloadedDeclarations: [null],
                                                                    referencedDeclaration: 2311,
                                                                    type:
                                                                        "struct PermissionsLib.Permissions storage ref",
                                                                    value:
                                                                        "tokenTransferPermissions",
                                                                },
                                                                id: 2345,
                                                                name: "Identifier",
                                                                src: "2163:24:7",
                                                            },
                                                        ],
                                                        id: 2346,
                                                        name: "MemberAccess",
                                                        src: "2163:44:7",
                                                    },
                                                ],
                                                id: 2347,
                                                name: "FunctionCall",
                                                src: "2163:46:7",
                                            },
                                        ],
                                        id: 2348,
                                        name: "Return",
                                        src: "2156:53:7",
                                    },
                                ],
                                id: 2349,
                                name: "Block",
                                src: "2146:70:7",
                            },
                        ],
                        id: 2350,
                        name: "FunctionDefinition",
                        src: "2030:186:7",
                    },
                    {
                        attributes: {
                            constant: false,
                            implemented: true,
                            isConstructor: false,
                            modifiers: [null],
                            name: "transferFrom",
                            payable: false,
                            scope: 2382,
                            stateMutability: "nonpayable",
                            superFunction: null,
                            visibility: "public",
                        },
                        children: [
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_token",
                                            scope: 2381,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 2351,
                                                name: "ElementaryTypeName",
                                                src: "2356:7:7",
                                            },
                                        ],
                                        id: 2352,
                                        name: "VariableDeclaration",
                                        src: "2356:14:7",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_from",
                                            scope: 2381,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 2353,
                                                name: "ElementaryTypeName",
                                                src: "2380:7:7",
                                            },
                                        ],
                                        id: 2354,
                                        name: "VariableDeclaration",
                                        src: "2380:13:7",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_to",
                                            scope: 2381,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "address",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "address",
                                                    type: "address",
                                                },
                                                id: 2355,
                                                name: "ElementaryTypeName",
                                                src: "2403:7:7",
                                            },
                                        ],
                                        id: 2356,
                                        name: "VariableDeclaration",
                                        src: "2403:11:7",
                                    },
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_amount",
                                            scope: 2381,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "uint256",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "uint",
                                                    type: "uint256",
                                                },
                                                id: 2357,
                                                name: "ElementaryTypeName",
                                                src: "2424:4:7",
                                            },
                                        ],
                                        id: 2358,
                                        name: "VariableDeclaration",
                                        src: "2424:12:7",
                                    },
                                ],
                                id: 2359,
                                name: "ParameterList",
                                src: "2346:96:7",
                            },
                            {
                                children: [
                                    {
                                        attributes: {
                                            constant: false,
                                            name: "_success",
                                            scope: 2381,
                                            stateVariable: false,
                                            storageLocation: "default",
                                            type: "bool",
                                            value: null,
                                            visibility: "internal",
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    name: "bool",
                                                    type: "bool",
                                                },
                                                id: 2360,
                                                name: "ElementaryTypeName",
                                                src: "2475:4:7",
                                            },
                                        ],
                                        id: 2361,
                                        name: "VariableDeclaration",
                                        src: "2475:13:7",
                                    },
                                ],
                                id: 2362,
                                name: "ParameterList",
                                src: "2474:15:7",
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "tuple()",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_bool",
                                                                    typeString: "bool",
                                                                },
                                                            ],
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 6136,
                                                            type: "function (bool) pure",
                                                            value: "require",
                                                        },
                                                        id: 2363,
                                                        name: "Identifier",
                                                        src: "2504:7:7",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            isStructConstructorCall: false,
                                                            lValueRequested: false,
                                                            names: [null],
                                                            type: "bool",
                                                            type_conversion: false,
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: [
                                                                        {
                                                                            typeIdentifier:
                                                                                "t_address",
                                                                            typeString: "address",
                                                                        },
                                                                    ],
                                                                    isConstant: false,
                                                                    isLValue: true,
                                                                    isPure: false,
                                                                    lValueRequested: false,
                                                                    member_name: "isAuthorized",
                                                                    referencedDeclaration: 2948,
                                                                    type:
                                                                        "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 2311,
                                                                            type:
                                                                                "struct PermissionsLib.Permissions storage ref",
                                                                            value:
                                                                                "tokenTransferPermissions",
                                                                        },
                                                                        id: 2364,
                                                                        name: "Identifier",
                                                                        src: "2512:24:7",
                                                                    },
                                                                ],
                                                                id: 2365,
                                                                name: "MemberAccess",
                                                                src: "2512:37:7",
                                                            },
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    lValueRequested: false,
                                                                    member_name: "sender",
                                                                    referencedDeclaration: null,
                                                                    type: "address",
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 6133,
                                                                            type: "msg",
                                                                            value: "msg",
                                                                        },
                                                                        id: 2366,
                                                                        name: "Identifier",
                                                                        src: "2550:3:7",
                                                                    },
                                                                ],
                                                                id: 2367,
                                                                name: "MemberAccess",
                                                                src: "2550:10:7",
                                                            },
                                                        ],
                                                        id: 2368,
                                                        name: "FunctionCall",
                                                        src: "2512:49:7",
                                                    },
                                                ],
                                                id: 2369,
                                                name: "FunctionCall",
                                                src: "2504:58:7",
                                            },
                                        ],
                                        id: 2370,
                                        name: "ExpressionStatement",
                                        src: "2504:58:7",
                                    },
                                    {
                                        attributes: {
                                            functionReturnParameters: 2362,
                                        },
                                        children: [
                                            {
                                                attributes: {
                                                    argumentTypes: null,
                                                    isConstant: false,
                                                    isLValue: false,
                                                    isPure: false,
                                                    isStructConstructorCall: false,
                                                    lValueRequested: false,
                                                    names: [null],
                                                    type: "bool",
                                                    type_conversion: false,
                                                },
                                                children: [
                                                    {
                                                        attributes: {
                                                            argumentTypes: [
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_address",
                                                                    typeString: "address",
                                                                },
                                                                {
                                                                    typeIdentifier: "t_uint256",
                                                                    typeString: "uint256",
                                                                },
                                                            ],
                                                            isConstant: false,
                                                            isLValue: false,
                                                            isPure: false,
                                                            lValueRequested: false,
                                                            member_name: "transferFrom",
                                                            referencedDeclaration: 5730,
                                                            type:
                                                                "function (address,address,uint256) external returns (bool)",
                                                        },
                                                        children: [
                                                            {
                                                                attributes: {
                                                                    argumentTypes: null,
                                                                    isConstant: false,
                                                                    isLValue: false,
                                                                    isPure: false,
                                                                    isStructConstructorCall: false,
                                                                    lValueRequested: false,
                                                                    names: [null],
                                                                    type: "contract ERC20",
                                                                    type_conversion: true,
                                                                },
                                                                children: [
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: [
                                                                                {
                                                                                    typeIdentifier:
                                                                                        "t_address",
                                                                                    typeString:
                                                                                        "address",
                                                                                },
                                                                            ],
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 5748,
                                                                            type:
                                                                                "type(contract ERC20)",
                                                                            value: "ERC20",
                                                                        },
                                                                        id: 2371,
                                                                        name: "Identifier",
                                                                        src: "2580:5:7",
                                                                    },
                                                                    {
                                                                        attributes: {
                                                                            argumentTypes: null,
                                                                            overloadedDeclarations: [
                                                                                null,
                                                                            ],
                                                                            referencedDeclaration: 2352,
                                                                            type: "address",
                                                                            value: "_token",
                                                                        },
                                                                        id: 2372,
                                                                        name: "Identifier",
                                                                        src: "2586:6:7",
                                                                    },
                                                                ],
                                                                id: 2373,
                                                                name: "FunctionCall",
                                                                src: "2580:13:7",
                                                            },
                                                        ],
                                                        id: 2374,
                                                        name: "MemberAccess",
                                                        src: "2580:26:7",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2354,
                                                            type: "address",
                                                            value: "_from",
                                                        },
                                                        id: 2375,
                                                        name: "Identifier",
                                                        src: "2607:5:7",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2356,
                                                            type: "address",
                                                            value: "_to",
                                                        },
                                                        id: 2376,
                                                        name: "Identifier",
                                                        src: "2614:3:7",
                                                    },
                                                    {
                                                        attributes: {
                                                            argumentTypes: null,
                                                            overloadedDeclarations: [null],
                                                            referencedDeclaration: 2358,
                                                            type: "uint256",
                                                            value: "_amount",
                                                        },
                                                        id: 2377,
                                                        name: "Identifier",
                                                        src: "2619:7:7",
                                                    },
                                                ],
                                                id: 2378,
                                                name: "FunctionCall",
                                                src: "2580:47:7",
                                            },
                                        ],
                                        id: 2379,
                                        name: "Return",
                                        src: "2573:54:7",
                                    },
                                ],
                                id: 2380,
                                name: "Block",
                                src: "2494:140:7",
                            },
                        ],
                        id: 2381,
                        name: "FunctionDefinition",
                        src: "2325:309:7",
                    },
                ],
                id: 2382,
                name: "ContractDefinition",
                src: "1247:1389:7",
            },
        ],
        id: 2383,
        name: "SourceUnit",
        src: "584:2053:7",
    },
    compiler: {
        name: "solc",
        version: "0.4.18+commit.9cf6e910.Emscripten.clang",
    },
    networks: {
        "70": {
            events: {},
            links: {},
            address: "0x7b79a84b92b41a4626fa85a8c2db9b09df063caf",
        },
    },
    schemaVersion: "1.0.1",
    updatedAt: "2018-02-10T23:43:14.710Z",
};
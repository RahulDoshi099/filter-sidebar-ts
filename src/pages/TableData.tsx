import React from "react";
import { TokenInfo } from "../maintypes";
import "./table.scss";
import Sidebar from "../Component/Sidebar";

export const Datarray = [
  {
    metadata: {
      name: "Redhound #27",
      description:
        "BetNFT Greyhound - A unique NFT Asset with each greyhound having varying visual and hidden attributes for participating in our races.",
      image: "ipfs://QmRC7qTcDdRpEmaMWuxJvjQkYrSfM94xuq8tQhb7LFKQyT/27.png",
      dna: "ce2760ba2bd75819933490b52674ce0559c781f3",
      edition: 27,
      date: 1646138760254,
      attributes: [
        {
          trait_type: "Bloodline",
          value: "G1 Black Top",
        },
        {
          trait_type: "Breed level",
          value: "B.L 001",
        },
        {
          trait_type: "Gender",
          value: "Dog",
        },
        {
          trait_type: "Skin Pattern",
          value: "Space",
        },
        {
          trait_type: "Coat Colour4",
          value: "Copper",
        },
      ],
      compiler: "HashLips Art Engine",
    },
    ownerAddress: "0xe163f04d59e0b1c65e5f2a469c2677461d0f64a2",
    tokenFamily: "LottoMint1",
    tokenId: 27,
  },
  {
    metadata: {
      name: "Greyhound #28",
      description:
        "BetNFT Greyhound - A unique NFT Asset with each greyhound having varying visual and hidden attributes for participating in our races.",
      image: "ipfs://QmRC7qTcDdRpEmaMWuxJvjQkYrSfM94xuq8tQhb7LFKQyT/27.png",
      dna: "ce2760ba2bd75819933490b52674ce0559c781f3",
      edition: 28,
      date: 1646138760254,
      attributes: [
        {
          trait_type: "Bloodline",
          value: "G2 Zoom Top",
        },
        {
          trait_type: "Breed level",
          value: "B.L 001",
        },
        {
          trait_type: "Gender",
          value: "Dog",
        },
        {
          trait_type: "Skin Pattern",
          value: "Space",
        },
        {
          trait_type: "Coat Colour4",
          value: "Copper",
        },
      ],
      compiler: "HashLips Art Engine",
    },
    ownerAddress: "0xe163f04d59e0b1c65e5f2a469c2677461d0f64a2",
    tokenFamily: "LottoMint1",
    tokenId: 28,
  },
  {
    metadata: {
      name: "Whitehound #29",
      description:
        "BetNFT Greyhound - A unique NFT Asset with each greyhound having varying visual and hidden attributes for participating in our races.",
      image: "ipfs://QmRC7qTcDdRpEmaMWuxJvjQkYrSfM94xuq8tQhb7LFKQyT/27.png",
      dna: "ce2760ba2bd75819933490b52674ce0559c781f3",
      edition: 29,
      date: 1646138760254,
      attributes: [
        {
          trait_type: "Bloodline",
          value: "G3 Temlee",
        },
        {
          trait_type: "Breed level",
          value: "B.L 001",
        },
        {
          trait_type: "Gender",
          value: "Bitch",
        },
        {
          trait_type: "Skin Pattern",
          value: "Space",
        },
        {
          trait_type: "Coat Colour4",
          value: "Copper",
        },
      ],
      compiler: "HashLips Art Engine",
    },
    ownerAddress: "0xe163f04d59e0b1c65e5f2a469c2677461d0f64a2",
    tokenFamily: "LottoMint1",
    tokenId: 29,
  },
  {
    metadata: {
      name: "Whitehound #31",
      description:
        "BetNFT Greyhound - A unique NFT Asset with each greyhound having varying visual and hidden attributes for participating in our races.",
      image: "ipfs://QmRC7qTcDdRpEmaMWuxJvjQkYrSfM94xuq8tQhb7LFKQyT/27.png",
      dna: "ce2760ba2bd75819933490b52674ce0559c781f3",
      edition: 31,
      date: 1646138760254,
      attributes: [
        {
          trait_type: "Bloodline",
          value: "G4 Half Your Luck",
        },
        {
          trait_type: "Breed level",
          value: "B.L 001",
        },
        {
          trait_type: "Gender",
          value: "Bitch",
        },
        {
          trait_type: "Skin Pattern",
          value: "Space",
        },
        {
          trait_type: "Coat Colour4",
          value: "Copper",
        },
      ],
      compiler: "HashLips Art Engine",
    },
    ownerAddress: "0xe163f04d59e0b1c65e5f2a469c2677461d0f64a2",
    tokenFamily: "LottoMint1",
    tokenId: 31,
  },
];

type SidebarState = {
  isOpen?: boolean;
  bloodlineOpen: boolean;
  genderOpen: boolean;
  percentageOpen: boolean;
  bloodline: string[];
  gender: string[];
  percentage: string[];
};

const TableData = () => {
  const [filterTokenData, setFilterTokenData] = React.useState<TokenInfo[]>([]);
  const [state, setState] = React.useState<SidebarState>({
    isOpen: false,
    bloodlineOpen: false,
    genderOpen: false,
    percentageOpen: false,
    bloodline: [],
    gender: [],
    percentage: [],
  });
  const [filterString, setFilterString] = React.useState<string>("");

  const toggleSidebar = (): void => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  React.useEffect(() => {
    const filteredArray =
      Datarray.length > 0
        ? Datarray?.filter((item) =>
            item?.metadata?.name
              .toLowerCase()
              .includes(filterString.toLowerCase())
          )
        : [];
    setFilterTokenData(filteredArray);
  }, [filterString]);


  const FilterDatas = React.useMemo(() => {
    if (state.gender.length === 0 && state.bloodline.length === 0) {
      return filterTokenData;
    }

    if (state.bloodline.length === 0) {
      // If bloodline is empty, filter only by gender
      return filterTokenData?.filter((item: TokenInfo) => {
        const metadata = item.metadata;
        if (
          state.genderOpen &&
          !state.gender.includes(metadata?.attributes[2].value)
        ) {
          return false;
        }
        return true;
      });
    } else if (state.gender.length === 0) {
      // If gender is empty, filter only by bloodline
      return filterTokenData?.filter((item: TokenInfo) => {
        const metadata = item.metadata;
        if (
          state.bloodlineOpen &&
          !state.bloodline.includes(metadata?.attributes[0].value)
        ) {
          return false;
        }
        return true;
      });
    } else {
      // If both are non-empty, filter by both gender and bloodline
      return filterTokenData?.filter((item: TokenInfo) => {
        const metadata = item.metadata;
        if (
          state.bloodlineOpen &&
          !state.bloodline.includes(metadata?.attributes[0].value)
        ) {
          return false;
        }
        if (
          state.genderOpen &&
          !state.gender.includes(metadata?.attributes[2].value)
        ) {
          return false;
        }
        return true;
      });
    }
  }, [
    state.bloodline,
    state.gender,
    state.genderOpen,
    state.bloodlineOpen,
    filterTokenData,
  ]);


  return (
    <>
      <input
        type="text"
        placeholder="Search by name"
        // value={search}
        onChange={(e) => setFilterString(e.target.value.toLowerCase())}
      />
      <button onClick={toggleSidebar}>filter</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Bloodline</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {FilterDatas.map((dog) => {
            console.log("dog========", dog);
            return (
              <tr key={dog.tokenId}>
                <td>{dog.metadata?.name}</td>
                {dog.metadata?.attributes
                  .filter((item: any) => item.trait_type === "Bloodline")
                  .map((item: any) => {
                    return <td key={item.trait_type}>{item.value}</td>;
                  })}
                {dog.metadata?.attributes
                  .filter((item: any) => item.trait_type === "Gender")
                  .map((item: any) => {
                    return <td key={item.trait_type}>{item.value}</td>;
                  })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {state.isOpen && (
        <>
          <Sidebar state={state} setState={setState} />
        </>
      )}
    </>
  );
};

export default TableData;

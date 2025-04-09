import {useState} from "react";

type TypeMoney = "All" | "Dollar" | "Ruble"
type BanknoteType = {
    banknote: string;
    nominal: number;
    number: string;
};

export const FilterComponent = () => {
    const [money] = useState<BanknoteType[]>([
        {banknote: "dollar", nominal: 100, number: "i8satbhytq"},
        {banknote: "ruble", nominal: 5000, number: "9j4cw5yl99"},
        {banknote: "dollar", nominal: 50, number: "5jpjm2vgzn"},
        {banknote: "ruble", nominal: 1000, number: "w8edpafta5"},
        {banknote: "dollar", nominal: 20, number: "xv1bypd4vx"},
        {banknote: "ruble", nominal: 2000, number: "yp05o0r16c"},
        {banknote: "dollar", nominal: 10, number: "l7moy1iisl"},
        {banknote: "ruble", nominal: 500, number: "1wbvxue57z"},
        {banknote: "dollar", nominal: 5, number: "i9c85oaou6"},
        {banknote: "ruble", nominal: 100, number: "dv6wt3maen"},
        {banknote: "dollar", nominal: 1, number: "6cgew7jax4"},
        {banknote: "ruble", nominal: 50, number: "ytgbdo7i5x"},
        {banknote: "dollar", nominal: 2, number: "sowaihnsr7"},
        {banknote: "ruble", nominal: 10, number: "2gkkjmxk4g"},
        {banknote: "dollar", nominal: 50, number: "nnw1qagp71"},
    ])

    const [bank, setBank] = useState<TypeMoney>("All")


    let currentMoney = money

    if (bank === "Dollar") {
        currentMoney = money.filter(money => money.banknote === "dollar")
    }
    if (bank === "Ruble") {
        currentMoney = money.filter(money => money.banknote === "ruble")
    }

    const onClickFilterHandler = (bank: TypeMoney) => {
        setBank(bank)
    }

    return (
        <ul className={"Money"}>
            {currentMoney.map((objFromMoneyArr, index) => {
                return (
                    <li key={index}>
                        <span>{objFromMoneyArr.banknote} </span>
                        <span>{objFromMoneyArr.nominal} </span>
                        <span>{objFromMoneyArr.number} </span>
                    </li>
                )
            })}

            <span style={{margin: "8px", padding: "8px"}}>
                <button onClick={() => onClickFilterHandler("All")}>All</button>
                <button onClick={() => onClickFilterHandler("Dollar")}>Dollar</button>
                <button onClick={() => onClickFilterHandler("Ruble")}>Ruble</button>
            </span>

        </ul>
    );
};


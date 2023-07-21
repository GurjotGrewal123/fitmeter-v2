import React, { Fragment, useState } from "react";
import { render } from "react-dom";
import '../styles/Filter.css';
import API from './API.js';


const filterKeys = ["department", "brand", "price"];

const initialFilterState = filterKeys.reduce(
    (collection, key) => ({
        ...collection,
        [key]: [],
    }),
    {},
);

const without = (obj, key) => {
    const { [key]: omit, ...foo } = obj;
    return foo;
};

const filterItems = (items, filter) => {
    const valueMap = {};
    const filteredItems = new Set();

    for (const item of items) {
        const allFilterMatches = [];

        for (const filterAttribute in filter) {
            const filterValues = filter[filterAttribute];
            const itemValue = filterAttribute === 'price' ? String(item[filterAttribute]) : item[filterAttribute];
            const matchesFilter =
                filterValues.length === 0 || filterValues.includes(itemValue);

            allFilterMatches.push(matchesFilter);

            const filterWithoutThisFilterAttribute = without(filter, filterAttribute);

            const matchesOtherFilter = Object.entries(
                filterWithoutThisFilterAttribute,
            ).every(
                ([key, values]) => values.length === 0 || values.includes(item[key]),
            );

            if (matchesOtherFilter) {
                valueMap[filterAttribute] = valueMap[filterAttribute] || {};

                valueMap[filterAttribute][itemValue] = valueMap[filterAttribute][itemValue] || 0;

                if (valueMap[filterAttribute][itemValue] !== undefined) {
                    valueMap[filterAttribute][itemValue] += 1;
                }
            }
        }

        if (allFilterMatches.every(Boolean)) {
            filteredItems.add(item);
        }
    }

    for (const filterAttribute in filter) {
        const filterValues = filter[filterAttribute];
        valueMap[filterAttribute] = valueMap[filterAttribute] || {};
        for (const value of filterValues) {
            valueMap[filterAttribute][value] = valueMap[filterAttribute][value] || 0;
        }
    }

    return { filteredItems: [...filteredItems], valueMap };
};

const Filter = ({ items, onBuyItem }) => {

    const [filter, setFilter] = useState(initialFilterState);

    const then = performance.now();
    const { filteredItems, valueMap } = filterItems(items, filter);
    console.log(
        `filtering ${items.length} items took ${(performance.now() - then).toFixed(
            2,
        )}ms`,
    );

    return (
        <div style={{ display: "flex", padding: 10, }}>
            <div className="filter-bar" style={{ position: "absolute", top: 100 }}>
                {filterKeys.map((key) => (
                    <Fragment key={key}>
                        <div>{key}</div>
                        <div
                            style={{
                                overflowY: "auto",
                                border: "1px solid #000",
                                padding: 5,
                                margin: 5,
                                marginBottom: 20,
                                height: "25vh",
                            }}
                        >
                            {Object.entries(valueMap[key])
                                .sort((a, b) => a[0].localeCompare(b[0]))
                                .map(([value, count]) => (
                                    <label style={{ display: "block" }} key={value}>
                                        <input
                                            name={key}
                                            checked={filter[key].includes(value)}
                                            type="checkbox"
                                            onChange={({ target: { name, checked } }) =>
                                                setFilter((filter) => ({
                                                    ...filter,
                                                    [key]: checked
                                                        ? [...filter[key], value]
                                                        : filter[key].filter((v) => v !== value),
                                                }))
                                            }
                                        />
                                        <span style={{ marginLeft: "1ch" }}>
                                            {value} ({count})
                                        </span>
                                    </label>
                                ))}
                        </div>
                    </Fragment>
                ))}
            </div>

            <div className="item-display">
                {filteredItems.map((item) => (
                    <div className="item" key={item.id}>
                        {item.name}
                        <div className="item-img-box">
                            <img className="item-img" src="https://m.media-amazon.com/images/I/61jkqM1Fx4L.jpg" alt="img" />
                        </div>
                        <div className="item-content">
                            {filterKeys.map((key) => (
                                <div key={key} style={{ marginLeft: 10 }}>
                                    {item[key]}
                                </div>
                            ))}
                        </div>
                        <div className="buy-btn">
                            <button onClick={() => onBuyItem(item)}>Buy</button>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    );
};

const items = API;

render(<Filter items={items} />, document.getElementById("root"));

export default Filter
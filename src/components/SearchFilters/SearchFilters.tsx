import React, {useState} from "react";
import "./SearchFilters.css";
import roomIcon from "../../assets/images/room-icon.svg";
import filterIcon from "../../assets/images/filter-icon.svg";

const STEP = 1000;

type PropertyRoom = 0 | 1 | 2 | 3 | 4;

interface RoomOption {
    label: string;
    value: PropertyRoom;
}

const roomTypes: RoomOption[] = [
    {label: "Студия", value: 0},
    {label: "1", value: 1},
    {label: "2", value: 2},
    {label: "3", value: 3},
    {label: "4", value: 4},
];

interface SearchFiltersProps {
    onSubmit?: (filters: {
        priceFrom: number | null;
        priceTo: number | null;
        rooms: PropertyRoom[];
    }) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSubmit }) => {
    const [priceFrom, setPriceFrom] = useState<string>("");
    const [priceTo, setPriceTo] = useState<string>("");
    const [activeRooms, setActiveRooms] = useState<PropertyRoom[]>([]);

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
        const value = e.target.value;
        const oldValue = e.target.defaultValue;
        
        if (Math.abs(Number(value) - Number(oldValue)) === STEP) {
            const remainder = Number(oldValue) % STEP;
            setter(String(Number(value) + remainder));
        } else {
            setter(value);
        }
        e.target.defaultValue = value;
    };

    const handleRoomClick = (value: PropertyRoom) => {
        setActiveRooms((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    const handleReset = () => {
        setPriceFrom("");
        setPriceTo("");
        setActiveRooms([]);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit?.({
            priceFrom: priceFrom ? Number(priceFrom) : null,
            priceTo: priceTo ? Number(priceTo) : null,
            rooms: activeRooms
        });
    };

    return (
        <form className="filters" onSubmit={handleSubmit}>
            <div className="filters__main">
                <div className="filters__range">
                    <div className="filters__input-group">
                        <label className="filters__label">от:</label>
                        <input
                            className="filters__input"
                            type="number"
                            value={priceFrom}
                            onChange={(e) => handlePriceChange(e, setPriceFrom)}
                            step={STEP}
                            min={0}
                            placeholder="0"
                        />
                    </div>
                    <div className="filters__input-group">
                        <label className="filters__label">до:</label>
                        <input
                            className="filters__input"
                            type="number"
                            value={priceTo}
                            onChange={(e) => handlePriceChange(e, setPriceTo)}
                            step={STEP}
                            min={0}
                            placeholder="150000"
                        />
                    </div>
                </div>
                <div className="filters__rooms">
                    <div className="filters__rooms-icon">
                        <img src={roomIcon} width="24" height="24" alt="Комнаты"/>
                    </div>
                    {roomTypes.map((room) => (
                        <button
                            type="button"
                            className={`filters__room-btn${
                                activeRooms.includes(room.value) ? " filters__room-btn--active" : ""
                            }`}
                            key={room.value}
                            onClick={() => handleRoomClick(room.value)}
                        >
                            {room.label}
                        </button>
                    ))}
                </div>
                <button type="button" className="filters__reset" onClick={handleReset}>
                    <img src={filterIcon} alt="Сбросить" width="24" height="24" className="filters__reset-icon"/>
                    <span>Сбросить</span>
                </button>
            </div>
            <div className="filters__search-wrap">
                <button type="submit" className="filters__search">
                    Искать
                </button>
            </div>
        </form>
    );
};

export default SearchFilters;

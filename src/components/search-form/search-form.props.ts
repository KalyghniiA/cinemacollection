import type {Dispatch, SetStateAction} from "react";

export interface SearchFormProps {
    setSearchValue:Dispatch<SetStateAction<string>>;
}
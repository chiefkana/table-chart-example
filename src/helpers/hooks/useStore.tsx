import { useContext } from "react";
import { StoreContext } from "../../providers/StoreProvider";
import { RootStore } from "../../stores/RootStore";

export const useStore = (): RootStore => useContext(StoreContext)
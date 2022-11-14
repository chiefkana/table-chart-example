import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import { useStore } from "../helpers/hooks/useStore";


const MainPage: FC = observer(() => {
  const { userStore, authStore } = useStore();

  useEffect(() => {userStore.setUser('Bret')}, [])

  return <>
    <h1 hidden={!authStore.auth}>AUTHORIZED</h1>
    <h2 hidden={!authStore.auth}>{userStore.username}</h2>
  </>
});

export default MainPage;
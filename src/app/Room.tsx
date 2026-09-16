"use client";

import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { RoomProvider } from "@liveblocks/react/suspense";
import { useSearchParams } from "next/navigation";
import { generateRandomRoomName } from "@/lib/randomRoomName";

const ROOM_ID_STORAGE_KEY = "liveblocks-room-id";

export function Room({ children }: PropsWithChildren) {
  const roomId = useRandomRoomId("liveblocks:demo:comments-hover-boostr-demo");

  if (!roomId) {
    return null;
  }

  return (
    <RoomProvider
      id={roomId}
      initialPresence={{ cursor: null, editingText: null }}
    >
      {children}
    </RoomProvider>
  );
}

function useRandomRoomId(baseRoomId: string) {
  const params = useSearchParams();
  const exampleId = params?.get("exampleId");
  const exampleRoomId = useMemo(() => {
    return exampleId ? `${baseRoomId}-${exampleId}` : null;
  }, [baseRoomId, exampleId]);

  const [roomId, setRoomId] = useState<string | null>(exampleRoomId);

  useEffect(() => {
    if (exampleRoomId) {
      setRoomId(exampleRoomId);
      return;
    }

    const storedRoomId = sessionStorage.getItem(ROOM_ID_STORAGE_KEY);
    if (storedRoomId) {
      setRoomId(storedRoomId);
      return;
    }

    const randomName = generateRandomRoomName();
    const newRoomId = `${baseRoomId}-${randomName}`;

    sessionStorage.setItem(ROOM_ID_STORAGE_KEY, newRoomId);
    setRoomId(newRoomId);
  }, [baseRoomId, exampleRoomId]);

  return roomId;
}

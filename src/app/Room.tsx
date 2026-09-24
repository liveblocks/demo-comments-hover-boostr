"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { RoomProvider } from "@liveblocks/react/suspense";
import { useSearchParams } from "next/navigation";

const ROOM_ID_STORAGE_KEY = "liveblocks-room-id";

export function Room({ children }: PropsWithChildren) {
  const roomId = useExampleRoomId();

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

/**
 * This function is used when deploying an example on liveblocks.io.
 * You can ignore it completely if you run the example locally.
 */
function useExampleRoomId() {
  const params = useSearchParams();
  const exampleId = params?.get("exampleId");
  const [roomId, setRoomId] = useState<string | null>(null);

  useEffect(() => {
    let baseId = sessionStorage.getItem(ROOM_ID_STORAGE_KEY);
    if (!baseId) {
      baseId = crypto.randomUUID();
      sessionStorage.setItem(ROOM_ID_STORAGE_KEY, baseId);
    }

    setRoomId(exampleId ? `${baseId}-${exampleId}` : baseId);
  }, [exampleId]);

  return roomId;
}

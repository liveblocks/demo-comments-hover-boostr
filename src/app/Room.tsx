"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { RoomProvider } from "@liveblocks/react/suspense";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ROOM_ID_STORAGE_KEY = "liveblocks-room-id";
const ROOM_QUERY_PARAM = "room";

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
  const pathname = usePathname();
  const router = useRouter();
  const exampleId = params?.get("exampleId");
  const roomFromUrl = params?.get(ROOM_QUERY_PARAM);
  const [roomId, setRoomId] = useState<string | null>(null);

  useEffect(() => {
    if (exampleId) {
      const baseId =
        roomFromUrl ??
        sessionStorage.getItem(ROOM_ID_STORAGE_KEY) ??
        crypto.randomUUID();
      sessionStorage.setItem(ROOM_ID_STORAGE_KEY, baseId);
      setRoomId(`${baseId}-${exampleId}`);
      return;
    }

    if (roomFromUrl) {
      sessionStorage.setItem(ROOM_ID_STORAGE_KEY, roomFromUrl);
      setRoomId(roomFromUrl);
      return;
    }

    let baseId = sessionStorage.getItem(ROOM_ID_STORAGE_KEY);
    if (!baseId) {
      baseId = crypto.randomUUID();
      sessionStorage.setItem(ROOM_ID_STORAGE_KEY, baseId);
    }

    const search = new URLSearchParams(params?.toString() ?? "");
    search.set(ROOM_QUERY_PARAM, baseId);
    router.replace(`${pathname}?${search.toString()}`, { scroll: false });
    setRoomId(baseId);
  }, [exampleId, params, pathname, roomFromUrl, router]);

  return roomId;
}

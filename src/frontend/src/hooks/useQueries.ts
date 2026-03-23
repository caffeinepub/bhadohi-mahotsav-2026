import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Exhibitor, StallBooking } from "../backend.d";
import { useActor } from "./useActor";

export function useGetEvents() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getEvents();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useNewsletterSignup() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (email: string) => {
      if (!actor) throw new Error("Not connected");
      return actor.newsletterSignup(email);
    },
  });
}

export function useSubmitStallBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (booking: StallBooking) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitStallBooking(booking);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stallBookings"] });
    },
  });
}

export function useRegisterExhibitor() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (exhibitor: Exhibitor) => {
      if (!actor) throw new Error("Not connected");
      return actor.registerExhibitor(exhibitor);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["exhibitors"] });
    },
  });
}

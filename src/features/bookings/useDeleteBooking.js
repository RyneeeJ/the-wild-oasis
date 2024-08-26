import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  // needed to invalidate the cache upon successful deletion / mutation of the data in supabase
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    // teh function that will be called upon successful mutation
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    // In case there was an error in calling the mutationFn
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}

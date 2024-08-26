import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  // needed to invalidate the cache upon successful deletion / mutation of the data in supabase
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    // teh function that will be called upon successful mutation
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    // In case there was an error in calling the mutationFn
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Store
import { fetchData } from "@/store/useSimulationStore";
import { fetchUserData } from "@/store/useUserStore";
// Component
import Loader from "@/components/loader/loader";

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchDataAndUser = async () => {
      try {
        await fetchData({ type: "structurewritten" });
        await fetchUserData();
        setIsLoading(false);
      } catch (error) {
        router.back();
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchDataAndUser();
  }, []);

  return isLoading ? <Loader /> : <>{children}</>;
}

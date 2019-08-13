/**
 * @file useStory
 * @version 1.0.0
 * @since 12 August 2019
 * @description Custom react hooks for fetching API
 *
 * @flow
 * @format
 */

import { useState, useEffect } from "react";
import { apiRoute } from "../../app.json";

export default function useStory(storyType: string) {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchStory(storyType: string) {
      try {
        setIsLoading(true);
        const res = await fetch(`${apiRoute}/${storyType}.json?print=pretty`, { method: "GET" }).then(res => res.json());

        if (res) {
          setResponse(res);
          setIsLoading(false);
        }
      } catch (error) {
        // handling error
        setHasError(true);
      }
    }

    fetchStory(storyType);

    return () => {
      // componentWillUnmount, cancel setState, API request or event listener
      // To prevent memory leaked
    };
  }, [storyType]);

  return {
    response,
    isLoading,
    hasError
  };
}
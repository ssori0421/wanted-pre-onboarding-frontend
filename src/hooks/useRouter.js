import { useNavigate } from 'react-router-dom';

/**
 * @description - routeTo로 path값을 받아 페이지 이동
 * @returns routeTo
 */
export const useRouter = () => {
  const router = useNavigate();
  return {
    routeTo: (path) => router(path),
  };
};

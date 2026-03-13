import { Metadata } from 'next';
import ErrorMain from '@/page-views/error/error-main'
 
export const metadata: Metadata = {
  title: "Prime Creative - Not Found Page",
};

export default function NotFound() {
  return (
    <ErrorMain/>
  )
}
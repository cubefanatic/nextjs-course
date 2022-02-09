import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsid = router.query.newsid;

    return (
      <h1>The Detail page</h1> 
    )
  }
  
  export default DetailPage;
export default function handleRedirectCars({
  link,
  id,
  router,
}: {
  link: string;
  router: any;
  id: string;
}) {
  const newTab = window.open(`/${link}/${id}`, "_blank");
  if (newTab) {
    newTab.focus();
  } else {
    router.push(`/${link}/${id}`);
  }
  return;
}

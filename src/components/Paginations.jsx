import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded(count) {
  return (
    <Stack spacing={2}>
      <Pagination count={{count}} shape="rounded" />
      <Pagination count={{count}} variant="outlined" shape="rounded" />
    </Stack>
  );
}
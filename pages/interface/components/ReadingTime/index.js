import { BookIcon } from '@primer/octicons-react';
import { Tooltip } from '@primer/react';

export default function ReadingTime({ words, ...props }) {
  return (
    <Tooltip sx={{ position: 'absolute', ml: 1 }} aria-label={'tempo de leitura'} suppressHydrationWarning {...props}>
      <span style={{ whiteSpace: 'nowrap' }} suppressHydrationWarning>
        <BookIcon size={16} />
        {calulateAverageReadingTime(words)}
      </span>
    </Tooltip>
  );
}

function calulateAverageReadingTime(words) {
  const averageTime = 250;
  const totalTime = Math.round(words / averageTime);
  return ` ${totalTime < 1 ? 1 : totalTime}m`;
}

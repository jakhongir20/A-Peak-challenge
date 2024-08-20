import { FormDialog } from '@/components/shared/form';
import { Button } from '@/components/shared/ui';
import { useState } from 'react';

export default function Home() {
  const [isOpenDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <Button className="m-4" onClick={() => setOpenDialog(true)}>
        Open Modal
      </Button>
      <FormDialog
        open={isOpenDialog}
        onOpenChange={(val: boolean) => setOpenDialog(val)}
      />
    </div>
  );
}

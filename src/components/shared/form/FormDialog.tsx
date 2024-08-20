import { useBreakpoint } from '@/hooks';
import { WORK_TIME_SCHEDULE } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HelpIcon } from '../HelpIcon';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  InputGroup,
  SelectGroup,
  TextareaGroup,
} from '../ui';
import { DialogFooter, DialogHeader } from '../ui/Dialog';
import { FormDots } from './FormDots';
import { FormTopIcon } from './FormTopIcon';

interface Props {
  open: boolean;
  className?: string;
  onOpenChange: (val: boolean) => void;
}

export const FormDialog: React.FC<Props> = ({
  open,
  className,
  onOpenChange: onOpenDialog,
}) => {
  const [step, setStep] = useState(1);
  const [hasOpened, setHasOpened] = useState(false);
  const breakpoint = useBreakpoint();

  const handleNextClick = () => {
    setStep((prevStep) => (prevStep === 1 ? 2 : 1));
  };

  const renderSelectItem = () => {
    return (
      <SelectGroup
        name="employment"
        labelText="Employment"
        placeholder="Select time"
        className=""
        value={WORK_TIME_SCHEDULE[0].value}
        options={WORK_TIME_SCHEDULE}
        onChange={() => {}}
      />
    );
  };

  const renderInputTextarea = () => {
    return (
      <>
        <InputGroup
          name="title2"
          labelText="Title 2"
          className=""
          placeholder="What is your title 2?"
          onChange={() => {}}
        />
        <TextareaGroup
          name="description"
          labelText="Description"
          className=""
          placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints."
          labelTooltipIcon={<HelpIcon />}
          labelTooltipText="Add to a libray"
          onChange={() => {}}
        />
      </>
    );
  };

  React.useEffect(() => {
    if (open && !hasOpened) {
      setHasOpened(true);
    }
  }, [open]);

  React.useEffect(() => {
    if (breakpoint !== 'XS') {
      setStep(1);
    }
  }, [breakpoint]);

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        onOpenDialog(val);
        if (!val) {
          setHasOpened(false);
        }
        setTimeout(() => setStep(1), 200);
      }}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogContent
        className={cn('sm:max-w-[640px] p-4 sm:p-6 overflow-hidden', className)}
      >
        <FormTopIcon />
        <DialogHeader className="space-y-0 text-left mt-1 sm:mt-0 z-10">
          <DialogTitle className="font-semibold text-lg">
            Add experience
          </DialogTitle>
          <DialogDescription className="font-normal text-sm">
            Share where you’ve worked on your profile.
          </DialogDescription>
        </DialogHeader>
        <form>
          <motion.div
            className=""
            key={step}
            initial={
              !hasOpened ? {} : { opacity: 0, x: step === 1 ? -100 : 100 }
            }
            animate={!hasOpened ? {} : { opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: step === 1 ? 100 : -100 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 ? (
              <div className="grid w-full items-center gap-4">
                <InputGroup
                  name="title"
                  labelText="Title"
                  className=""
                  placeholder="What is your title?"
                  onChange={() => {}}
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputGroup
                    name="name"
                    labelText="Company"
                    prefix={<i className="icon-search"></i>}
                    className=""
                    placeholder="Search for company"
                    onChange={() => {}}
                  />
                  <InputGroup
                    name="website"
                    labelText="Website"
                    prefix="http://"
                    prefixWithLine
                    className=""
                    placeholder="www.example.com"
                    onChange={() => {}}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputGroup
                    name="location"
                    labelText="Location"
                    prefix={<i className="icon-search"></i>}
                    className=""
                    placeholder="Search for city"
                    onChange={() => {}}
                  />
                  {breakpoint !== 'XS' && renderSelectItem()}
                </div>
                {breakpoint !== 'XS' && renderInputTextarea()}
              </div>
            ) : (
              <div className="grid w-full items-center gap-4">
                {renderSelectItem()}
                {renderInputTextarea()}
              </div>
            )}
          </motion.div>
          {breakpoint === 'XS' && (
            <FormDots step={step} onClick={handleNextClick} />
          )}
          <DialogFooter className="mt-6 sm:gap-y-4 gap-y-3 transition-all">
            {breakpoint === 'XS' && (
              <Button
                type="button"
                className={cn(
                  'w-full transition-all',
                  step === 2
                    ? 'opacity-100 mt-0 z-10'
                    : 'opacity-0 -mt-[52px] -z-10'
                )}
                variant="outline"
                onClick={handleNextClick}
              >
                Back
              </Button>
            )}

            <Button className="w-full" variant="outline" type="button">
              <i className="icon-save"></i>
              <span className="ml-[6px]">Save as draft</span>
            </Button>
            {breakpoint !== 'XS' ? (
              <Button className="w-full" type="button">
                Add experience
              </Button>
            ) : (
              <Button
                className="w-full"
                type="button"
                onClick={() => step !== 2 && handleNextClick()}
              >
                {step === 1 ? 'Next' : 'Add experience'}
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

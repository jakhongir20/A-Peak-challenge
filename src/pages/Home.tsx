import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { createBreakpoint } from 'react-use';
import { HelpIcon } from '../components/shared/HelpIcon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/shared/ui/Dialog';
import { SelectGroup } from '../components/shared/ui/SelectGroup';
import { TextareaGroup } from '../components/shared/ui/TextareaGroup';
import { Button, InputGroup } from '../components/ui';
import { Toggle } from '../components/ui/toggle';
import { cn } from '../lib/utils';

const useBreakpoint = createBreakpoint({ XL: 1280, L: 768, S: 640, XS: 480 });

export default function Home() {
  const breakpoint = useBreakpoint();
  const [step, setStep] = useState(1);
  const [hasOpened, setHasOpened] = useState(false); // Track if the modal has been opened
  const [isOpen, setOpen] = useState(false); // Track if the modal has been opened

  React.useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true); // Mark as opened after the first render
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (breakpoint !== 'XS') {
      setStep(1);
    }
  }, [breakpoint]);

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
        options={[
          {
            value: 'full-time',
            label: 'Full time',
          },
          {
            value: 'part-time',
            label: 'Part time',
          },
          {
            value: 'remote',
            label: 'Remote',
          },
        ]}
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

  return (
    <div>
      <Dialog
        onOpenChange={(val) => {
          setOpen(val);
          if (!val) {
            setHasOpened(false);
          }
          setTimeout(() => setStep(1), 200);
        }}
      >
        <DialogTrigger asChild>
          <Button className="m-4">Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[640px] p-4 sm:p-6 overflow-hidden">
          <div className="absolute left-0 top-0 items-center justify-center rounded-full z-0 hidden sm:flex">
            <div className="absolute w-72 h-72 opacity-30 rounded-full border border-[#E4E7EC]"></div>
            <div className="absolute w-60 h-60 opacity-35 rounded-full border border-[#E4E7EC]"></div>
            <div className="absolute w-48 h-48 opacity-45 rounded-full border border-[#E4E7EC]"></div>
            <div className="absolute w-36 h-36 opacity-60 rounded-full border border-[#E4E7EC]"></div>
            <div className="w-24 h-24 opacity-80  rounded-full border border-[#E4E7EC] "></div>
          </div>
          <Toggle
            className="w-12 h-12 hidden sm:flex items-center justify-center relative"
            variant="outline"
            aria-label="Toggle italic"
          >
            <i className="icon-flag text-2xl before:text-[#344054]"></i>
          </Toggle>

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
              <div className="flex justify-between w-9 mx-auto mt-5">
                <span
                  className={cn(
                    'w-[10px] h-[10px] rounded-full transition-all cursor-pointer',
                    step === 1 ? 'bg-[#7F56D9]' : 'bg-[#E4E7EC]'
                  )}
                  onClick={() => step !== 1 && handleNextClick()}
                ></span>
                <span
                  className={cn(
                    'w-[10px] h-[10px] rounded-full transition-all cursor-pointer',
                    step === 2 ? 'bg-[#7F56D9]' : 'bg-[#E4E7EC]'
                  )}
                  onClick={() => step !== 2 && handleNextClick()}
                ></span>
              </div>
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
    </div>
  );
}

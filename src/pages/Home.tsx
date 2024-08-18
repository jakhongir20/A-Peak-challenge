import { motion } from 'framer-motion';
import { SearchIcon } from 'lucide-react';
import React, { useState } from 'react';
import { createBreakpoint } from 'react-use';
import { SelectGroup } from '../components/shared/SelectGroup';
import { TextareaGroup } from '../components/shared/TextareaGroup';
import { Button, InputGroup } from '../components/ui';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
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
          value={''}
          labelTooltip="This is a tooltip"
          onChange={() => {}}
        />
      </>
    );
  };

  return (
    <div>
      <p className="text-lime-400 text-sm">Salom</p>
      <div className="rounded">
        <Button className="">Open Modal</Button>
      </div>
      <Dialog
        onOpenChange={(val) => {
          setOpen(val);
          if (!val) {
            setHasOpened(false);
          }
        }}
      >
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[640px] p-4 sm:p-6 overflow-hidden">
          <Toggle
            className="w-12 h-12 hidden sm:block"
            variant="outline"
            aria-label="Toggle italic"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.0914 6.72222H20.0451C20.5173 6.72222 20.7534 6.72222 20.8914 6.82149C21.0119 6.9081 21.0903 7.04141 21.1075 7.18877C21.1272 7.35767 21.0126 7.56403 20.7833 7.97677L19.3624 10.5343C19.2793 10.684 19.2377 10.7589 19.2214 10.8381C19.207 10.9083 19.207 10.9806 19.2214 11.0508C19.2377 11.13 19.2793 11.2049 19.3624 11.3545L20.7833 13.9121C21.0126 14.3248 21.1272 14.5312 21.1075 14.7001C21.0903 14.8475 21.0119 14.9808 20.8914 15.0674C20.7534 15.1667 20.5173 15.1667 20.0451 15.1667H12.6136C12.0224 15.1667 11.7269 15.1667 11.5011 15.0516C11.3024 14.9504 11.141 14.7889 11.0398 14.5903C10.9247 14.3645 10.9247 14.0689 10.9247 13.4778V10.9444M7.23027 21.5L3.00805 4.61111M4.59143 10.9444H12.4025C12.9937 10.9444 13.2892 10.9444 13.515 10.8294C13.7137 10.7282 13.8751 10.5667 13.9763 10.3681C14.0914 10.1423 14.0914 9.84672 14.0914 9.25556V4.18889C14.0914 3.59772 14.0914 3.30214 13.9763 3.07634C13.8751 2.87773 13.7137 2.71625 13.515 2.61505C13.2892 2.5 12.9937 2.5 12.4025 2.5H4.64335C3.90602 2.5 3.53735 2.5 3.2852 2.65278C3.0642 2.78668 2.89999 2.99699 2.82369 3.24387C2.73663 3.52555 2.82605 3.88321 3.00489 4.59852L4.59143 10.9444Z"
                stroke="#344054"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Toggle>
          <DialogHeader className="space-y-0 text-left mt-1 sm:mt-0">
            <DialogTitle className="leading-6">Add experience</DialogTitle>
            <DialogDescription className="leading-5">
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
                      prefix={<SearchIcon />}
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
                      prefix={<SearchIcon />}
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

              <Button className="w-full" variant="outline">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5.83333 2.5V5.33333C5.83333 5.80004 5.83333 6.0334 5.92416 6.21166C6.00406 6.36846 6.13154 6.49594 6.28834 6.57584C6.4666 6.66667 6.69996 6.66667 7.16667 6.66667H12.8333C13.3 6.66667 13.5334 6.66667 13.7117 6.57584C13.8685 6.49594 13.9959 6.36846 14.0758 6.21166C14.1667 6.0334 14.1667 5.80004 14.1667 5.33333V3.33333M14.1667 17.5V12.1667C14.1667 11.7 14.1667 11.4666 14.0758 11.2883C13.9959 11.1315 13.8685 11.0041 13.7117 10.9242C13.5334 10.8333 13.3 10.8333 12.8333 10.8333H7.16667C6.69996 10.8333 6.4666 10.8333 6.28834 10.9242C6.13154 11.0041 6.00406 11.1315 5.92416 11.2883C5.83333 11.4666 5.83333 11.7 5.83333 12.1667V17.5M17.5 7.77124V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86502C3.01217 3.39462 3.39462 3.01217 3.86502 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H12.2288C12.6364 2.5 12.8402 2.5 13.0321 2.54605C13.2021 2.58688 13.3647 2.65422 13.5138 2.7456C13.682 2.84867 13.8261 2.9928 14.1144 3.28105L16.719 5.88562C17.0072 6.17387 17.1513 6.318 17.2544 6.48619C17.3458 6.63531 17.4131 6.79789 17.4539 6.96795C17.5 7.15976 17.5 7.36358 17.5 7.77124Z"
                    stroke="#344054"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Save as draft
              </Button>
              {breakpoint !== 'XS' ? (
                <Button className="w-full" type="button">
                  Add experience
                </Button>
              ) : (
                <Button
                  className="w-full"
                  type="button"
                  onClick={handleNextClick}
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

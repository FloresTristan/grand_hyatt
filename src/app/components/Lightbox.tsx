'use client';

import * as React from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type ImageLightboxProps = {
  open: boolean;
  src: string;
  alt?: string;
  onClose: () => void;
  imageRef?: React.RefObject<HTMLImageElement | null>;
};

export function ImageLightbox({ open, src, alt = '', onClose, imageRef }: ImageLightboxProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          bgcolor: 'transparent',
          boxShadow: 'none',
          borderRadius: 2,
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          position: 'relative',
          width: { xs: '95vw', sm: '90vw' },
          height: { xs: '80vh', sm: '85vh' },
          overflow: 'hidden',
          bgcolor: 'transparent',
        }}
      >
        {/* Close button */}
        {/* <IconButton
          onClick={onClose}
          aria-label="Close"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 2,
            color: '#fff',
            bgcolor: 'rgba(255,255,255,0.14)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.24)' },
          }}
        >
          <CloseIcon />
        </IconButton> */}

        {/* Image stage */}
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            ref={imageRef}
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            priority
            className='object-contain object-center'
            // style={{ objectFit: 'contain' }}  // show the whole image (no stretch)
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#003D82',
          fontWeight: 900,
          fontFamily: 'serif',
          WebkitTextStroke: '1.5px #003D82',
          paintOrder: 'stroke fill',
        }}
      >
        PH
      </div>
    ),
    {
      ...size,
    }
  );
}

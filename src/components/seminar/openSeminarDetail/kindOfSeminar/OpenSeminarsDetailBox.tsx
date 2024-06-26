import { OpenSeminarDetailSeminar } from '@/interfaces/seminar/openSeminar';
import { SeminarMember } from '@/interfaces/seminar/seminarMember';
import { SeminarThumbnail } from '@/interfaces/seminar/seminarThumbnail';
import Image from 'next/image';
import React from 'react';

/**
 * @description
 * 세미나 상세 페이지 리뷰 디테일 컴포넌트
 * @component SeminarDetailReviewDetail
 * @returns {JSX.Element} SeminarDetailReviewDetail
 * @since 2024.04.18
 */
/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */
const OpenSeminarsDetailBox = ({ seminar }: { seminar:OpenSeminarDetailSeminar }) => {

  return (
    <div className="w-full flex flex-row p-4 bg-mono_900 rounded gap-4"> 
    <div className='rounded overflow-hidden'>
      <Image
          src={seminar.member_profile_image}
          alt="translate_img"
          width={64}
          height={64}
          quality={100}
        />
        </div>
        <div className='flex flex-col justify-center'>
        <div className="B1 flex gap-2">
            {seminar.member_name} <p className="B1 text-mono_200">{seminar.member_role}</p>
        </div>
        <p className='className="B1'>{seminar.seminar_title}</p>
        </div>
  </div>
  );
};
export default OpenSeminarsDetailBox;

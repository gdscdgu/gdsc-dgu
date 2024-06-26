'use client';

import React, { useState } from 'react';
import SeminarThumbnailBox from './SeminarThumbnail';
import Link from 'next/link'
import { motion } from 'framer-motion';
import { seminarCardVariants } from '@/constants/seminar/seminarCardVariants';
import SeminarPagination from './SeminarPagination';
import { SeminarThumbnail } from '@/interfaces/seminar/seminarThumbnail';
import SeminarMenuBar from '../menubar/SeminarMenuBar';

/**
 * @description
 * 세미나 페이지 세미나 리스트
 * @component SeminarThumbnailList
 * @returns {JSX.Element} SeminarThumbnailList
 * @since 2024.04.18
 */


/**
 * Renders the header component for the recruitment section.
 * @returns The rendered header component.
 */

const SeminarThumbnailList = ({ seminars }: { seminars:SeminarThumbnail[] }) => {     
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const itemsPerPage = 12;  // 한 페이지당 표시할 항목 수

    // topic으로 데이터 필터링
  const filteredData = selectedCategory !== "all" ? seminars.filter(seminar => seminar.topic === selectedCategory) : seminars;

  // 페이지네이션
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
  // 페이지 번호 계산
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    // 세미나 리스트 페이지네이션 함수
    const paginate = (pageNumber: number) => {
      setCurrentPage(pageNumber);
      // /seminar/${seminar.id}/page
    };

    // 카테고리 변경 시 페이지를 첫 페이지로 리셋
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  
  
    return (
      <div>
        {/* select button */}
        <SeminarMenuBar selectedCategory={selectedCategory} setSelectedCategory={handleCategoryChange} />
      
        <div className="mt-10">
          {/* 썸네일 리스트 */}

          {/* desktop인 경우 */}
        <div className="desktop:grid bigTablet:grid lg:grid tablet:hidden md:hidden hidden desktop:grid-cols-3 gap-x-8 gap-y-10 bigTablet:grid-cols-3 gap-x-8 gap-y-10 lg:grid-cols-3 gap-x-8 gap-y-10">
        {currentItems.map((seminar:SeminarThumbnail, index:number) => (
           <motion.section
           key={index}
           whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
           whileTap={{ scale: 0.8 }}
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true, amount: 0.9 }}
           variants={seminarCardVariants}
           style={{ transformOrigin: '10% 60%' }}
         >
             <Link
             href={`/seminar/${seminar.id}`}
           >
             <SeminarThumbnailBox
             key={index}
             seminar={seminar}
             />
             </Link>
          </motion.section>
        ))}
        </div>

         {/*tablet, mobile인 경우 */}
        <div className="desktop:hidden bigTablet:hidden lg:hidden grid tablet:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10">
          {filteredData.map((seminar:SeminarThumbnail, index:number) => (
          <motion.section
          key={index}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.8 }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.9 }}
          variants={seminarCardVariants}
          style={{ transformOrigin: '10% 60%' }}
          >
          <Link
             href={`/seminar/${seminar.id}`}
           >
             <SeminarThumbnailBox
          key={index}
          seminar={seminar}
             />
             </Link>
          </motion.section>
        ))}
        </div>
        {/* 페이지네이션 버튼 */}
        <SeminarPagination
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        paginate={paginate}
      />

      </div>
      </div>
    );
  };
  export default SeminarThumbnailList;
  

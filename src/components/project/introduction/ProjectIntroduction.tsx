'use client';

import GithubIcon from '@/svg/icons/project/githubIcon.svg';
import YoutubeIcon from '@/svg/icons/project/youtubeIcon.svg';
import FileIcon from '@/svg/icons/project/fileIcon.svg';
import ProjectImg from '@/images/project_img.png';
import Image from 'next/image';
import { ProjectData } from '@/interfaces/project/projectData';
import ProjectIntroductionBand from './ProjectIntroductionBand';
import { motion } from 'framer-motion';

/**
 * @description
 * 프로젝트 상세 페이지 프로젝트 소개 컴포넌트
 * @component ProjectIntroduction
 * @returns {JSX.Element} ProjectIntroduction
 * @since 2024.04.16
 */
/**
 * Renders the prject introduction component for the project section.
 * @returns The rendered project introduction component.
 */

const ProjectIntroduction = ({ projectData }: { projectData: ProjectData }) => {
  return (
    <section className="w-full flex flex-col items-center">
      <section className="w-full max-w-[1200px] tablet:px-10 px-4">
        <div className="w-full mx-auto flex desktop:flex-row desktop:justify-start flex-col justify-center desktop:items-end gap-8 mt-20">
          <Image
            className="desktop:w-[34rem] tablet:w-full mobile:w-full rounded-md"
            src={ProjectImg}
            alt="프로젝트 프로필"
          />
          <div className="flex flex-col justify-end my-3">
            <div className="flex flex-row gap-[0.625rem] pb-5">
              <GithubIcon />
              <FileIcon />
              <YoutubeIcon />
            </div>
            <div className="pb-4 H3">{projectData?.title}</div>
            <div className="pb-4 H6">{projectData?.introduce}</div>
          </div>
        </div>
      </section>
      {/* -----------------------------------------------*/}
      {/* ------------ 프로젝트 소개 띠지 --------------------*/}
      {/* -----------------------------------------------*/}
      <ProjectIntroductionBand projectData={projectData} />
    </section>
  );
};

export default ProjectIntroduction;

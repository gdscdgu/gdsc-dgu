import SeminarDetailHeader from '@/components/seminar/seminarDetail/header/SeminarDetailHeader';
import SeminarDetailBanner from '@/components/seminar/seminarDetail/banner/SeminarDetailBanner';
import SeminarDetailPdf from '@/components/seminar/seminarDetail/pdf/SeminarDetailPdf';
import NotFoundPage from '@/app/not-found';
import SeminarDetailReview from '@/components/seminar/seminarDetail/review/SeminarDetailReview';
import { refactorSeminarData, refactorSeminarMemberData, refactorSeminarReviewData } from '@/hooks/seminar/notionDataRefactor';
import { headers } from "next/headers";
import { changePathtoSeperate } from '@/hooks/seminar/changePathtoNumber';
import { SEMINAR_MEMBER_DATA } from '@/constants/seminar/seminarMemberData';

export const dynamic = "force-dynamic";

const SeminarDetailPage = async () => {
  // server comp에서 path 가져오기
  const header = headers();
  const pathname = header.get('next-url')

  const seminarId = changePathtoSeperate(pathname ?? '', 'seminar');

  // all seminar data 정의
  const seminarResponse = await fetch(`${process.env.SERVER_HOST}/api/seminar/all`);
  const seminarList = await seminarResponse.json();
  const seminars = refactorSeminarData(seminarList.data ?? []);
    // 세미나 디테일 데이터로 분리
    let seminar =  seminars.find(seminar => `${seminar.id}` === `${seminarId}`);

    if(!seminar) {
      return <NotFoundPage />;
    }

  // reviews 데이터 정의
  const seminarReviewResponse = await fetch(`${process.env.SERVER_HOST}/api/seminar/review?seminarId=${seminarId}`);
  const seminarReviewList = await seminarReviewResponse.json();
  const reviews = refactorSeminarReviewData(seminarReviewList.reviews ?? []);

  // member 데이터 정의
  const memberResponse = await fetch(`${process.env.SERVER_HOST}/api/member?seminarId=${seminarId}`);
  const memberList = await memberResponse.json();
  const member = refactorSeminarMemberData(memberList.data[0] ?? SEMINAR_MEMBER_DATA, seminar.id);

  return <section className="flex justify-center">
  <div className="max-w-[1200px] desktop:px-10 bigTablet:px-10 lg:px-10 md:px-10 tablet:px-10 px-4 bg-mono_black">
     <div className="w-full">
        {/* header */}
    <SeminarDetailHeader key={`${seminar.id}_header`} seminar={seminar}/>

{/* banner */}
<SeminarDetailBanner key={`${seminar.id}_banner`} seminar={seminar} member={member}/>

{/* pdf file */}
<SeminarDetailPdf key={`${seminar.id}_pdf`} seminar={seminar}/>

{/* review */}
<SeminarDetailReview key={`${seminar.id}_review`} reviews={reviews} />
  </div>
  <div className="h-[7.5rem]"></div>
  </div>
  </section>;
};

export default SeminarDetailPage;

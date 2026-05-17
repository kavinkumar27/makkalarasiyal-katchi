import './DocumentModal.css';

interface Props {
  onClose: () => void;
}

const RulesModal = ({ onClose }: Props) => {
  return (
    <div className="document-modal-overlay" onClick={onClose}>
      <div className="document-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="document-modal-header">
          <h2>Party Rules & Regulations</h2>
          <button className="document-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="document-modal-body">
          <section>
            <h3>1. ஜாதி மதம் மொழி சார்ந்த கட்சி கிடையாது</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/1/1.png" alt="Rule 1" />
            </div>
          </section>
          <section>
            <h3>2. அனைவருக்கும் பொதுவான கட்சியாகும்.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/1/sample.jpg" alt="Rule 1" />
            </div>
          </section>
          <section>
            <h3>3. விவசாயிகளின் வாழ்வாதாரத்திற்காக குரல் கொடுப்பது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r3.jpg" alt="Rule 1" />
            </div>
          </section>
          <section>
            <h3>4. இயற்கை வளங்களை காக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r4.jpg" alt="Rule 1" />
            </div>
          </section>
          <section>
            <h3>5. லஞ்சம் ஊழல் தடுக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r5.jpg" alt="Rule 1" />
            </div>
          </section>
          <section>
            <h3>6. தனிமனிதரின் அடிப்படை உரிமைக்காக பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r6.png" alt="Rule 1" />
            </div>
          </section>
          <section>
            <h3>7. மாற்றுத்திறனாளிகளின் வாழ்வாதாரத்திற்காக பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r7.jpg" alt="Rule 1" />
            </div>
          </section>
          <section>
            <h3>8. மீனவர்கள் வாழ்வாதாரத்திற்காக பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r8.jpg" alt="Rule 1" />
            </div>
          </section>
          <section>
            <h3>9. சுயமரியாதை திருமணத்தை ஆதரிப்பது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r9.jpg" alt="Rule 1" />
            </div>
          </section>
          <section>
            <h3>10. கலப்பு திருமணத்தை ஊக்குவிப்பது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r10.jpg" alt="Rule 1" />
            </div>
          </section>
          <section>
            <h3>11. அனைத்து தொழிலாளர் நலன் காக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r11.jpg" alt="Rule 11" />
            </div>
          </section>

          <section>
            <h3>12. கட்டப்பஞ்சாயத்து கந்துவட்டி தடுக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r12.jpg" alt="Rule 12" />
            </div>
          </section>

          <section>
            <h3>13. பெண்கள் உரிமைக்காக பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r13.jpg" alt="Rule 13" />
            </div>
          </section>

          <section>
            <h3>14. பெண்களுக்கு எதிரான பாலியல் குற்றங்களை தடுக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r14.png" alt="Rule 14" />
            </div>
          </section>

          <section>
            <h3>15. மது ஒழிப்பிற்காக பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r15.jpg" alt="Rule 15" />
            </div>
          </section>

          <section>
            <h3>16. தரமான கல்வி கிடைக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r16.jpg" alt="Rule 16" />
            </div>
          </section>

          <section>
            <h3>17. சிறுபான்மையினர் கிறிஸ்துவ முஸ்லீம் வாழ்வாதாரத்திற்காக பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r17.jpg" alt="Rule 17" />
            </div>
          </section>

          <section>
            <h3>18. ஆபாச திரைப்படங்கள் மற்றும் ஆபாச இணையதளங்களை தடுக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r18.jpg" alt="Rule 18" />
            </div>
          </section>

          <section>
            <h3>19. தரமான மருத்துவம் கிடைக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r19.jpg" alt="Rule 19" />
            </div>
          </section>

          <section>
            <h3>20. நெசவாளர் வாழ்வாதாரத்திற்காக பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r20.jpg" alt="Rule 20" />
            </div>
          </section>

          <section>
            <h3>21. தேயிலை தொழிலாளர் நலனுக்காக பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r21.jpg" alt="Rule 21" />
            </div>
          </section>

          <section>
            <h3>22. அனைத்து வாகன ஓட்டுனர்கள் நலன் காக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r22.jpg" alt="Rule 22" />
            </div>
          </section>

          <section>
            <h3>23. சுத்தமான காற்று கிடைக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r23.jpeg" alt="Rule 23" />
            </div>
          </section>

          <section>
            <h3>24. நிலத்தடி நீர் உறிஞ்சுவதை தடுப்பது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r24.jpg" alt="Rule 24" />
            </div>
          </section>

          <section>
            <h3>25. மரங்கள் வெட்டுவதை தடுக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r25.jpg" alt="Rule 25" />
            </div>
          </section>

          <section>
            <h3>26. பனை விவசாயிகள் நலன் காக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r26.jpg" alt="Rule 26" />
            </div>
          </section>

          <section>
            <h3>27. சட்ட விழிப்புணர்வு ஏற்படுத்துவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r27.jpg" alt="Rule 27" />
            </div>
          </section>

          <section>
            <h3>28. விதவைப் பெண்கள் நலன் காக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r28.jpg" alt="Rule 28" />
            </div>
          </section>

          <section>
            <h3>29. கல்லூரி படிக்கும் மாணவ மாணவிகள் உரிமைக்காக பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r29.jpg" alt="Rule 29" />
            </div>
          </section>

          <section>
            <h3>30. இளைஞர்களுக்கு சம வேலை வாய்ப்புக்காக பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r30.jpg" alt="Rule 30" />
            </div>
          </section>

          <section>
            <h3>31. மலைவாழ் மக்கள் வாழ்வாதாரத்திற்காக பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r31.jpg" alt="Rule 31" />
            </div>
          </section>

          <section>
            <h3>32. அமைப்புசாரா தொழிலாளர்களுக்கு குரல் கொடுப்பது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r32.jpg" alt="Rule 32" />
            </div>
          </section>

          <section>
            <h3>33. பாரம்பரிய விளையாட்டுகளை ஊக்குவிப்பது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r33.jpg" alt="Rule 33" />
            </div>
          </section>

          <section>
            <h3>34. மக்களை பாதிக்கும் எந்த திட்டமாக இருந்தாலும் அதை எதிர்ப்பது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r34.jpg" alt="Rule 34" />
            </div>
          </section>

          <section>
            <h3>35. வெளிநாட்டு வாழ் இந்தியர்களுக்காக குரல் கொடுப்பது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r35.jpg" alt="Rule 35" />
            </div>
          </section>

          <section>
            <h3>36. தமிழகம் முழுவதும் இலவச ஆம்புலன்ஸ் இயக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r36.jpg" alt="Rule 36" />
            </div>
          </section>

          <section>
            <h3>37. தமிழகம் முழுவதும் இருப்பதை இல்லாதவர்களுக்கு கொடுக்கும் திட்டத்தை தொடங்குவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r37.jpg" alt="Rule 37" />
            </div>
          </section>

          <section>
            <h3>38. வணிகர்கள் நலன் காக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r38.jpg" alt="Rule 38" />
            </div>
          </section>

          <section>
            <h3>39. நுகர்வோர் நலன் காக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r39.jpg" alt="Rule 39" />
            </div>
          </section>

          <section>
            <h3>40. கூலி தொழிலாளிகள் நலன் காக்க பாடுபடுவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r40.jpg" alt="Rule 40" />
            </div>
          </section>

          <section>
            <h3>41. சமூகத்தில் நீங்கள் எந்த வழியில் பாதிக்கப்பட்டிருந்தாலும் உங்களுக்காக நாங்கள் பாடுபடுகிறோம்.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r41.jpg" alt="Rule 41" />
            </div>
          </section>

          <section>
            <h3>42. போதை இல்லாத தமிழகத்தை உருவாக்குவோம்.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r42.jpg" alt="Rule 42" />
            </div>
          </section>

          <section>
            <h3>43. தமிழர்களுக்காகவும் தமிழ் மொழிக்காகவும் பாடுபடுவோம்.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r43.jpg" alt="Rule 43" />
            </div>
          </section>

          <section>
            <h3>44. சனாதனத்தை எதிர்ப்போம்.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r44.jpg" alt="Rule 44" />
            </div>
          </section>

          <section>
            <h3>45. மனித உரிமைகளுக்காகவும் காவல் நிலைய லாக்கப் மரணங்களுக்கு எதிராக குரல் கொடுப்போம்.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r45.jpg" alt="Rule 45" />
            </div>
          </section>

          <section>
            <h3>46. ஆணவ படுகொலைக்கு எதிராக குரல் கொடுப்போம்.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r46.jpg" alt="Rule 46" />
            </div>
          </section>

          <section>
            <h3>47. பாதிக்கப்பட்ட மக்களுக்கு சட்டப் போராட்டம் நடத்துவது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r47.jpg" alt="Rule 47" />
            </div>
          </section>

          <section>
            <h3>48. நில மோசடி, சிட்பண்ட்ஸ் மோசடிக்கு எதிராக குரல் கொடுப்பது.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r48.jpg" alt="Rule 48" />
            </div>
          </section>

          <section>
            <h3>49. சாதி இல்லாத சமூகத்தை உருவாக்கும் எம்மதமும் சம்மதம் என உணர பாடுபடுவோம்.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r49.jpg" alt="Rule 49" />
            </div>
          </section>

          <section>
            <h3>50. திருநங்கைகள் வாழ்வாதாரம் உயர குரல் கொடுப்போம்.</h3>
            <div className='rules-gallery'>
              <img src="/PartyImages/rules/r50.jpg" alt="Rule 50" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;

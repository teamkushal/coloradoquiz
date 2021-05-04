import { TestBed } from '@angular/core/testing';

import { Experimental1215Service } from './experimental1215.service';

describe('Experimental1215Service', () => {
  let service: Experimental1215Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1215Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

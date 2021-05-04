import { TestBed } from '@angular/core/testing';

import { Experimental1102Service } from './experimental1102.service';

describe('Experimental1102Service', () => {
  let service: Experimental1102Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1102Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

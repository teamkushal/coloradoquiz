import { TestBed } from '@angular/core/testing';

import { Experimental1249Service } from './experimental1249.service';

describe('Experimental1249Service', () => {
  let service: Experimental1249Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1249Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

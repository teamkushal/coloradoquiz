import { TestBed } from '@angular/core/testing';

import { Experimental1851Service } from './experimental1851.service';

describe('Experimental1851Service', () => {
  let service: Experimental1851Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1851Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

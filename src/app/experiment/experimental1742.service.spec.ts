import { TestBed } from '@angular/core/testing';

import { Experimental1742Service } from './experimental1742.service';

describe('Experimental1742Service', () => {
  let service: Experimental1742Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1742Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental1017Service } from './experimental1017.service';

describe('Experimental1017Service', () => {
  let service: Experimental1017Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1017Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

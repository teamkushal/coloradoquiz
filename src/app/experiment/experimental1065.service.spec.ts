import { TestBed } from '@angular/core/testing';

import { Experimental1065Service } from './experimental1065.service';

describe('Experimental1065Service', () => {
  let service: Experimental1065Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1065Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

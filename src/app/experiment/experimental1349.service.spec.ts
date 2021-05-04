import { TestBed } from '@angular/core/testing';

import { Experimental1349Service } from './experimental1349.service';

describe('Experimental1349Service', () => {
  let service: Experimental1349Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1349Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

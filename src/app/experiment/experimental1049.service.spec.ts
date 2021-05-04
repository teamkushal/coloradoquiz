import { TestBed } from '@angular/core/testing';

import { Experimental1049Service } from './experimental1049.service';

describe('Experimental1049Service', () => {
  let service: Experimental1049Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1049Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

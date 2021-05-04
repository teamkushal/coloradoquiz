import { TestBed } from '@angular/core/testing';

import { Experimental1080Service } from './experimental1080.service';

describe('Experimental1080Service', () => {
  let service: Experimental1080Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1080Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

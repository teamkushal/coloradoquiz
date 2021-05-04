import { TestBed } from '@angular/core/testing';

import { Experimental1118Service } from './experimental1118.service';

describe('Experimental1118Service', () => {
  let service: Experimental1118Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1118Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

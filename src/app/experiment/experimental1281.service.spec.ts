import { TestBed } from '@angular/core/testing';

import { Experimental1281Service } from './experimental1281.service';

describe('Experimental1281Service', () => {
  let service: Experimental1281Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1281Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

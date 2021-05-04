import { TestBed } from '@angular/core/testing';

import { Experimental1196Service } from './experimental1196.service';

describe('Experimental1196Service', () => {
  let service: Experimental1196Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1196Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental1144Service } from './experimental1144.service';

describe('Experimental1144Service', () => {
  let service: Experimental1144Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1144Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

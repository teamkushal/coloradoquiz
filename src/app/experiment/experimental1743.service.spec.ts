import { TestBed } from '@angular/core/testing';

import { Experimental1743Service } from './experimental1743.service';

describe('Experimental1743Service', () => {
  let service: Experimental1743Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1743Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

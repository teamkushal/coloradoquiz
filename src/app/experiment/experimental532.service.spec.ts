import { TestBed } from '@angular/core/testing';

import { Experimental532Service } from './experimental532.service';

describe('Experimental532Service', () => {
  let service: Experimental532Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental532Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental365Service } from './experimental365.service';

describe('Experimental365Service', () => {
  let service: Experimental365Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental365Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

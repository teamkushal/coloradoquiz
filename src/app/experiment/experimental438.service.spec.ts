import { TestBed } from '@angular/core/testing';

import { Experimental438Service } from './experimental438.service';

describe('Experimental438Service', () => {
  let service: Experimental438Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental438Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

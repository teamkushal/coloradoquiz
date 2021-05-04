import { TestBed } from '@angular/core/testing';

import { Experimental1423Service } from './experimental1423.service';

describe('Experimental1423Service', () => {
  let service: Experimental1423Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1423Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

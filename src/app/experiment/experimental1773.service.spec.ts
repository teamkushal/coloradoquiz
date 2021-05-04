import { TestBed } from '@angular/core/testing';

import { Experimental1773Service } from './experimental1773.service';

describe('Experimental1773Service', () => {
  let service: Experimental1773Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1773Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

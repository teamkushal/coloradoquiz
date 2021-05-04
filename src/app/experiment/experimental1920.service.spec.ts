import { TestBed } from '@angular/core/testing';

import { Experimental1920Service } from './experimental1920.service';

describe('Experimental1920Service', () => {
  let service: Experimental1920Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1920Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

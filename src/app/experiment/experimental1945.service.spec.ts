import { TestBed } from '@angular/core/testing';

import { Experimental1945Service } from './experimental1945.service';

describe('Experimental1945Service', () => {
  let service: Experimental1945Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1945Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

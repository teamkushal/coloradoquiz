import { TestBed } from '@angular/core/testing';

import { Experimental1091Service } from './experimental1091.service';

describe('Experimental1091Service', () => {
  let service: Experimental1091Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1091Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

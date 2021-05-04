import { TestBed } from '@angular/core/testing';

import { Experimental1146Service } from './experimental1146.service';

describe('Experimental1146Service', () => {
  let service: Experimental1146Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1146Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

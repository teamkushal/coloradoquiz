import { TestBed } from '@angular/core/testing';

import { Experimental1189Service } from './experimental1189.service';

describe('Experimental1189Service', () => {
  let service: Experimental1189Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1189Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

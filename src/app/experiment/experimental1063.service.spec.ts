import { TestBed } from '@angular/core/testing';

import { Experimental1063Service } from './experimental1063.service';

describe('Experimental1063Service', () => {
  let service: Experimental1063Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1063Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

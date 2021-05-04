import { TestBed } from '@angular/core/testing';

import { Experimental328Service } from './experimental328.service';

describe('Experimental328Service', () => {
  let service: Experimental328Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental328Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

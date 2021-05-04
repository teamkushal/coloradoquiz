import { TestBed } from '@angular/core/testing';

import { Experimental1493Service } from './experimental1493.service';

describe('Experimental1493Service', () => {
  let service: Experimental1493Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1493Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

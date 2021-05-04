import { TestBed } from '@angular/core/testing';

import { Experimental1985Service } from './experimental1985.service';

describe('Experimental1985Service', () => {
  let service: Experimental1985Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1985Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

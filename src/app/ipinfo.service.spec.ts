import { TestBed } from '@angular/core/testing';

import { IpinfoService } from './ipinfo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IpinfoService', () => {
  let service: IpinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(IpinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

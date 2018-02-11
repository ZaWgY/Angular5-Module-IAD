import { TestBed, inject } from '@angular/core/testing';

import { StartPageService } from './start-page.service';

describe('StartPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartPageService]
    });
  });

  it('should be created', inject([StartPageService], (service: StartPageService) => {
    expect(service).toBeTruthy();
  }));
});

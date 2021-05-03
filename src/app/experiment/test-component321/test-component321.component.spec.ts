import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent321Component } from './test-component321.component';

describe('TestComponent321Component', () => {
  let component: TestComponent321Component;
  let fixture: ComponentFixture<TestComponent321Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent321Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

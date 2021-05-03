import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent997Component } from './test-component997.component';

describe('TestComponent997Component', () => {
  let component: TestComponent997Component;
  let fixture: ComponentFixture<TestComponent997Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent997Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
